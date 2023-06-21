import { AProduct } from "@/app/ApiData.type";

export function Product({ item }: { item?: AProduct; }) {
    if (!item) return <div>...loading</div>
    return (
        <li className='w-[370px] h-[600px] hover:opacity-70 flex flex-col gap-0' >
            <img className='' src={item.photos[0].thumbs['384_512']} alt="" />
            <div className='flex flex-col text-start pb-4 pt-1'>
                <span className='text-[12px] tracking-wide uppercase h-[30px]'> {item.name}</span>
                <div className='flex justify-between items-center'>
                    <span className='uppercase tracking-wide font-normal'>{item.price}{item.currency.postfix_symbol}</span>
                    <button className='py-2 px-3 bg-[#c7b2a8] uppercase tracking-wide text-white text-[12px]'>Добавить</button>
                </div>
            </div>
        </li>
    );
};