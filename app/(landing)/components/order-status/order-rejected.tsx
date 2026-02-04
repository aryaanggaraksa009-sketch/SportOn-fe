"use client";

import Image from "next/image";
import { FiAlertCircle } from "react-icons/fi";

const OrderRejected = () => {
    return (
        
        <div className="bg-white w-169 p-16 flex flex-col justify-center items-center mx-auto">
            <div className="w-20 h-20 bg-primary-light rounded-full mx-auto p-3 flex justify-center items-center text-primary">
                <FiAlertCircle size={52} />
            </div>
            <h2 className="text-2xl text-semibold mb-2"><b>Order Rejected !!</b></h2>
            <p className="text-center mb-8">Sorry your order rejected because your payment invalid</p>
        </div>
    );
};

export default OrderRejected;