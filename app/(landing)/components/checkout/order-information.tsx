import CardWithHeader from "../ui/card-with-header";

const OrderInformation = () => {
    return (
        <div className="flex justify-end item-center">
            <CardWithHeader title="Order Information">
                <div className="p-5">
                    <div className="input-group">
                        <label htmlFor="full-name">Full Name</label>
                        <input type="text" placeholder="Type your full name" id="full_name"/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="wa_number">Whatsapp Number</label>
                        <input type="text" placeholder="Type your whatsapp number" id="wa-number"/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="shipping_address">Shipping Address</label>
                        <textarea placeholder="Type your shipping address" id="shipping_address" rows={7}/>
                    </div>
                </div>
        
            </CardWithHeader>
        </div>
    );
};

export default OrderInformation;