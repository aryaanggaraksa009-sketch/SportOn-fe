import Button from "@/app/(landing)/components/ui/button";
import { useState } from "react"
import Modal from "../ui/modal";
import ImageUploadPreview from "../ui/image-upload-preview";
import Image from "next/image";
import priceFormatter from "@/app/utils/price-formatter";
import { FiCheck } from "react-icons/fi";

type TTransactionModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

const TransactionModal = ({ isOpen, onClose }: TTransactionModalProps) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Verify transactions">
            <div className="flex gap-6">
                <div>
                    <h4 className="font-semibold text-sm mb-2">
                        Payment Proof
                    </h4>
                    <Image src="/images/payment-proof-fake.png" alt="payment proof" width={200} height={401} />
                </div>
                <div>
                    <h4 className="font-semibold text-sm mb-2">
                        Order Details
                    </h4>
                    <div className="bg-gray-100 rounded-md flex flex-col gap-2.5 p-4 text-sm mb-5">
                        <div className="flex justify-between font-medium">
                            <div className="opacity-50">Date</div>
                            <div className="text-right">06/02/2026 00:20</div>
                        </div>
                        <div className="flex justify-between font-medium">
                            <div className="opacity-50">Customer</div>
                            <div className="text-right">Depsey</div>
                        </div>
                        <div className="flex justify-between font-medium">
                            <div className="opacity-50">Contact</div>
                            <div className="text-right">+123123123</div>
                        </div>
                        <div className="flex justify-between gap-10 font-medium">
                            <div className="opacity-50 whitespace-nowrap">
                                Shipping Address
                            </div>
                            <div className="text-right">
                                Kenshu Street, Harajuku, Japan, 332122
                            </div>
                        </div>
                    </div>

                    <h4 className="font-semibold text-sm mb-2">Items Purchased</h4>
                    <div className="border border-gray-200 rounded-lg p-2 flex items-center gap-3">
                        <div className="bg-gray-100 rounded aspect-square w-8 h-8">
                            <Image src="/images/products/product-2.png" width={30} height={30} alt="product image" />
                        </div>
                        <div className="font-medium text-sm"> SportsOn Hyperfast Shoes</div>
                        <div className="font-medium ml-auto text-sm">2 units</div>
                    </div>
                    <div className="flex justify-between text-sm mt-6">
                        <h4 className="font-emibold">Total </h4>
                        <div className="text-primary font-semibold">
                            {priceFormatter(530000)}
                        </div>
                    </div>
                    <div className="flex justify-end gap-5 mt-12">
                        <Button className="text=primary! bg-primary-light! rounded-md" size="small">
                            <FiCheck size={20} /> Approve
                        </Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default TransactionModal;

