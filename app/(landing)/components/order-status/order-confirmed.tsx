"use client";

import Image from "next/image";

const OrderConfirmed = () => {
    return (
        
        <div className="bg-white w-169 p-16 flex flex-col justify-center items-center mx-auto">
            <Image src="/images/icon-order-confirmed.svg" width={117} height={117} alt="order submitted" className="mb-4"/>
            <h2 className="text-2xl text-semibold mb-2"><b>Order Confirmed !!</b></h2>
            <p className="text-center mb-8">We have received your payment, and your order is currently processed by our staff, just wait until your favorite sportswear arrive in your home. We will contact you in Whatsapp for further shipping updates.</p>
        </div>
    );
};

export default OrderConfirmed;