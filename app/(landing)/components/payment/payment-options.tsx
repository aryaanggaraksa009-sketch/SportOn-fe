import { FiCreditCard } from "react-icons/fi";
import CardWithHeader from "../ui/card-with-header";

const paymentList = [
    {
        bank_name: "BCA",
        account_number: 23624354576,
        account_holder: "PT SportOn Digital",
    },
    {
        bank_name: "Mandir",
        account_number: 83923912013203123,
        account_holder: "PT SportOn Digital",
    },
    {
        bank_name: "BTPN",
        account_number: 5238218923,
        account_holder: "PT SportOn Digital",
    },
];

const PaymentOptions = () => {
    return (
        <div className="flex justify-end item-center">
            <CardWithHeader title="Payment Options">
                {
                    paymentList.map((payment, index) => (
                        <div className="flex gap-5 p-5 border-b border-gray-100" key={index}>
                            <div className="bg-blue-100 p-4 text-blue-500 h-fit self-center">
                                <FiCreditCard size={24}/>
                            </div>
                           <div className="flex justify-between items-center w-full">
                            <div>
                                <div className="font-bold">{payment.bank_name}</div>
                                <div className="text-sm">{payment.account_number}</div>
                                <div className="text-sm opacity-70">{payment.account_holder}</div>
                            </div>

                            <div className="ml-auto bg-blue-50 text-gray-800 text-xs h-fit px-2 py-1">
                                Bank Transfer
                            </div>
                            </div>
                        </div>
                    ))
                }
            </CardWithHeader>
        </div>
    );
};

export default PaymentOptions;