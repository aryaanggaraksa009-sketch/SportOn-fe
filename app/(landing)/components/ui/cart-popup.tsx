 
 import priceFormatter from "@/app/utils/price-formatter";
import Image from "next/image";
import Button from "./button";
import { FiArrowRight, FiTrash2 } from "react-icons/fi";
import { totalmem } from "os";
 
 const cartList = [
    {
        name: "SportOn product 1",
        category: "Running",
        price:230000,
        qty: 2,
        imgUrl: "product-1.png",
    },
    {
        name: "SportOn product 2",
        category: "Running",
        price:250000,
        qty: 5,
        imgUrl: "product-2.png",
    },
     {
        name: "SportOn product 3",
        category: "Running",
        price:350000,
        qty: 2,
        imgUrl: "product-3.png",
    },
 ];
 

const CartPopup = () => {
    const totalPrice = cartList.reduce((total, item) => total + item.price * item.qty, 0);
    return (
        <div className="absolute bg-white right-0 top-12 shadow-xl shadow-black-10 border border-gray-200 w-90 z-10">
            <div className="p-4 border-b border-gray-200 font-bold text-center">
                Shopping Cart
            </div>
            {
            cartList.map((item, index) => (
              <div className="border-b border-gray-200 p-2 flex gap-3">
                <div className="bg-primary-light aspect-square w-16 flex justify-center item-center">
                    <Image src={`/images/products/${item.imgUrl}`}
                    width={63}
                    height={63}
                    alt={item.name}
                    className="aspect-square object-contain"
                    />
                </div>
                <div className="self-center">
                    <div className="text-sm font-medium mb-1">{item.name}</div>
                    <div className="flex gap-3 font-medium text-xs">
                        <div>{item.qty}x</div>
                        <div className="text-primary">{priceFormatter(item.price)}</div>
                    </div>
                </div>
                <Button size="small" variant="ghost" className="w-7 h-7 p-0! drlf-center ml-auto">
                    <FiTrash2 />
                </Button>
              </div>
            ))}
            <div className="border-t border-gray-200 p-4">
                <div className="flex justify-between font-semibold">
                    <div className="font-semibold text-sm">Total</div>
                    <div className="text-primary text-xs">{priceFormatter(totalPrice)}
                    </div>
                </div>
                <Button variant="dark" size="small" className="w-full mt-4">
                    Checkout Now <FiArrowRight />
                </Button>
            </div>
        </div>
    );
};

export default CartPopup;