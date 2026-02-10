"use client";

import Button from "@/app/(landing)/components/ui/button";
import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import ProductTable from "../../components/products/products-table";
import ProductModal from "../../components/products/product-modal";
import { Product } from "@/app/types";
import { getAllProducts } from "@/app/services/product.services";

const ProductManagement = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [products, setProducts] = useState<Product[]>([]);

    const fetchProducts = async () => {
        try {
            const data = await getAllProducts();
            if (data) {
                setProducts(data);
        }
    } catch (error) {
        console.error("Failed to fetch products", error);
    }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="font-bold text-2xl"> Product Management</h1>
                    <p className="opacity-50">Manage your inventory, price, and stock.</p>
                </div>
                <Button className="rounded-lg" onClick={() => setIsOpen(true)}>
                    <FiPlus size={24} />
                    Add Product
                </Button>
            </div>
            <ProductTable products={products} />
            <ProductModal isOpen={isOpen} onClose={handleCloseModal} />
        </div>
    );
};

export default ProductManagement;