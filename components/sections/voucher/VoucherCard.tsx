export type IVoucherCardData = {
    step: number;
    title: string;
    description: string;
    children?: React.ReactNode;
};

export default function VoucherCard({ step, title, description, children }: IVoucherCardData) {
    return (
        <div className="flex flex-col w-[90%] justify-between lg:w-auto mx-auto mt-5 md:mt-0 bg-neutral-200/10 min-h-[250px] lg:min-w-[30%] lg:max-w-[30%] rounded-lg items-center p-6 transition-colors ease-in-out duration-300 hover:bg-neutral-800/80">
            <div className="flex flex-col items-center">
                <div className="flex w-16 h-16 rounded-full border-2 border-blue-primary justify-center items-center">
                    <h3 className="text-3xl text-blue-primary font-semibold">{step}</h3>
                </div>

                <h4 className="text-2xl text-neutral-200 text-center font-normal mt-4">{title}</h4>

                <p className="text-lg text-neutral-300 text-center font-light mt-2">{description}</p>
            </div>
            

            <div className="flex w-full">
                {children}
            </div>
        </div>
    );
}