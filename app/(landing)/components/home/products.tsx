import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button";
import { FiPlus } from "react-icons/fi";
import priceFormatter from "@/app/utils/price-formatter";
import { Product } from "@/app/types";
import { getImageUrl } from "@/app/lib/api";

const productList = [
    {
        name: "SportOn product 1",
        category: "Running",
        price:230000,
        imgUrl: "product-1.png",
    },
    {
        name: "SportOn product 2",
        category: "Tennis",
        price:250000,
        imgUrl: "product-2.png",
    },
     {
        name: "SportOn product 3",
        category: "Running",
        price:350000,
        imgUrl: "product-3.png",
    },
     {
        name: "SportOn product 4",
        category: "Football",
        price:530000,
        imgUrl: "product-4.png",
    },
    {
        name: "SportOn product 5",
        category: "Running",
        price:420000,
        imgUrl: "product-5.png",
    },
     {
        name: "SportOn product 6",
        category: "Basketball",
        price:620000,
        imgUrl: "product-6.png",
    },
];

type TProductsProps = {
    products: Product[]
}

const ProductsSection = ({products}: TProductsProps) => {

    return (
        <section id="products-section" className="container mx-auto mt-32 mb-52">
            <h2 className="font-bold italic text-4xl text-center mb-11"><span className="text-primary">OUR </span>PRODUCTS</h2>
            <div className="grid grid-cols-4 gap-5">
                {
                    products.map((product) => (
                        <Link href={`/product/${product._id}`} key={product._id} className="p-1.5 bg-white hover:drop-shadow-xl duration-300">
                            <div className="bg-primary-light aspect-square w-full flex justify-center items-center relative">
                                <Image src={getImageUrl(product.imageUrl)} alt={product.name} width={300} height={300} className="aspect-square object-contain"/>
                                <Button className="w-10 h-10 p-2! absolute right-3 top-3 ">
                                    <FiPlus size={24} />
                                </Button>
                            </div>
                            <h3 className="font-medium text-lg mb-1.5 mt-4">{product.name}</h3>
                            <div className="flex justify-between mb-8">
                                <div className="text-gray-500">{product.category.name}</div>
                                <div className="font-medium text-primary">
                                    {priceFormatter(product.price)}
                                </div>
                            </div>
                        </Link>
                    ) )}
            </div>
        </section>
    );
};

export default ProductsSection;