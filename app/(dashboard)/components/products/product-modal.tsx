import Button from "@/app/(landing)/components/ui/button";
import { useEffect, useState } from "react"
import Modal from "../ui/modal";
import ImageUploadPreview from "../ui/image-upload-preview";
import { Category, Product } from "@/app/types";
import { getAllCategories } from "@/app/services/category.services";
import { createProduct, updateProduct } from "@/app/services/product.services";
import { getImageUrl } from "@/app/lib/api";
import { toast } from "react-toastify";

type TProductModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSuccess?: () => void;
    product?: Product | null;
};

type ProductFormData = {
    name: string;
    price: number;
    stock: number;
    categoryId: string;
    description: string;
};

const ProductModal = ({ isOpen, onClose, onSuccess, product }: TProductModalProps) => {
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [categories, setCategories] = useState<Category[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState<ProductFormData>({
        name: "",
        price: 0,
        stock: 0,
        categoryId: "",
        description: "",
    });

    const isEditMode = !!product;

    const fetchCategories = async () => {
        try {
            const data = await getAllCategories();
            setCategories(data);
        } catch (error) {
            console.error("Failed to fetch categories", error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    ) => {
        const {id, value} = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const data= new FormData();
            data.append("name", formData.name);
            data.append("price", formData.price.toString());
            data.append("stock", formData.stock.toString());
            data.append("categoryId", formData.categoryId);
            data.append("description", formData.description);
            if (imageFile) {
                data.append("image", imageFile);
            }

            if (isEditMode) {
                await updateProduct(product._id, data);
             } else {
                await createProduct(data);
             }
            // Reset From Data
            setFormData({
                name: "",
                price: 0,
                stock: 0,
                categoryId: "",
                description: "",
            });
            setImageFile(null);
            setImagePreview(null);

            toast.success(
                isEditMode ? "Product updated successfully" : "Product created successfully"
            );

            onSuccess?.();
            onClose?.();
        } catch (error) {
            console.error (
                isEditMode ? "Failed to update product" : "Failed to create product", error,
            );
            toast.error(
                isEditMode ? "Failed to update product" : "Failed to create product",
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        if (isEditMode && isOpen) {
            setFormData({
                name: product.name,
                description: product.description,
                price: product.price,
                categoryId: product.category._id,
                stock: product.stock,
            });
            setImagePreview(product.imageUrl ? getImageUrl(product.imageUrl) : null);
        } else if (isOpen) {
            setFormData({
                name: "",
                price: 0,
                stock: 0,
                categoryId: "",
                description: "",
            });
            setImageFile(null);
            setImagePreview(null);
        }
    }, [isOpen, product]);

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={isEditMode ? "Edit Product" : "Add Product"}>
            <div className="flex flex-col gap-6">
                <div className="flex gap-7">
                    <div className="min-w-50">
                        <ImageUploadPreview label="Product Image" value={imagePreview} onChange={(file) => {
                            setImageFile(file); setImagePreview(URL.createObjectURL(file));
                        }} 
                        />
                    </div>
                    <div className="flex flex-col gap-7 w-full">
                        <div className="input-group-admin">
                            <label htmlFor="productName">Product Name</label>
                            <input type="text" id="productName" name="productName" placeholder="e. g. Running" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="input-group-admin">
                                <label htmlFor="productPrice">Price (IDR)</label>
                                <input type="number" id="price" name="price" placeholder="e. g. 700000" />
                            </div>
                             <div className="input-group-admin">
                                <label htmlFor="stock">Stock</label>
                                <input type="number" id="stock" name="stock" placeholder="e. g. 700" />
                            </div>
                        </div>
                        < div className="input-group-admin">
                                <label htmlFor="category">Category</label>
                                <select name="category" id="category">
                                    <option value="" disabled>
                                        Select Category
                                    </option>
                                    <option value="running">Running</option>
                                    <option value="football">Football</option>
                                </select>
                            </div>
                    </div>
                </div>
                <div className="input-group-admin">
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" rows={7} placeholder="Product Details..."></textarea>
                </div>
                <Button className="ml-auto mt-3 rounded-lg">Create Product</Button>
            </div>
        </Modal>
    );
};

export default ProductModal;

