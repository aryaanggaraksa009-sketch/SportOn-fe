type TcardWithHeaderProps = {
    title: string;
    children: React.ReactNode;
};

const CardWithHeader = ({ title, children }: TcardWithHeaderProps) => {
    return (
        <div className="relative bg-white w-150">
            <div className="px-5 py-4 border-b border-gray-200">
                <h2 className="font-bold text-lg">{title}</h2>
            </div>
            {children}
        </div>
    );
}; 

export default CardWithHeader;