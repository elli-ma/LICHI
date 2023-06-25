'use client';

import { useEffect, useState } from 'react';
import { AProduct, FetchData } from './ApiData.type';
import { FixedSizeGrid } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import useSwrInfinite from 'swr/infinite'

const fetcher = ( url: string) => fetch(url).then(res => res.json()).then((r: FetchData) => r.api_data.aProduct)
function getKey(pageIndex: number, previousPageData: AProduct[]) {
  if (previousPageData && !previousPageData.length) return null // reached the end
  return `https://api.lichi.com/category/get_category_product_list?category=clothes&shop=1&lang=1&limit=12&page=${pageIndex+1}`
}

export default function Home() {
  const {data, size, setSize} = useSwrInfinite<AProduct[]>(getKey, fetcher)

  useEffect(() => {
    setSize(1)
  }, []);

  return (
    <main className="flex h-screen flex-col" >
      <h1 className='text-[30px] py-9 uppercase tracking-wide ml-2'>Lichi</h1>
      <div className='flex h-full w-full overflow-x-hidden'>
        <AutoSizer className='place-content-center'>
          {({ height, width }) => {
            if (!data) { return <div>Loading..</div>}
            let maxColumns = 4;
            let columnWidth = Math.max(width / maxColumns, 360);
            let columns = Math.floor(width / columnWidth);
            let rowCount = Math.floor(size * 12 /columns)
            return <FixedSizeGrid
              columnCount={columns}
              columnWidth={columnWidth}
              rowCount={rowCount}
              rowHeight={630}
              height={height}
              width={width}
              style={{ overflowX: "hidden" }} >
              {({ columnIndex, rowIndex, style }: { columnIndex: number, rowIndex: number, style: any }) => {
                const itemIndex = columnIndex + Math.floor(columns) * rowIndex
                const [page, pageIndex] = [Math.floor(itemIndex/ 12), itemIndex % 12]
                const item = data.at(page)?.at(pageIndex)
                if (rowIndex == rowCount - 1 && columnIndex == columns -1 ) setSize(size + 1)
                if (!item) {
                  return <div>loading...</div>
                }
  
                return (
                  <li className='flex justify-between' style={style}>
                    <div className='grow-0 flex flex-col p-2 hover:opacity-70 h-[630px]' key={item.id} >
                      <img className='h-[512px] w-[384px]' src={item.photos[0].thumbs['384_512']} alt="" />
                      <div className='flex flex-col text-start pb-4 pt-1'>
                        <span className='text-[12px] tracking-wide uppercase h-[30px]'> {item.name}</span>
                        <div className='flex justify-between items-center'>
                          <span className='uppercase tracking-wide font-normal'>{item.price}{item.currency.postfix_symbol}</span>
                          <button className='py-2 px-3 bg-[#c7b2a8] uppercase tracking-wide text-white text-[12px]'>Добавить</button>
                        </div>
                      </div>
                    </div>
                  </li>


                );
              }}
            </FixedSizeGrid>
          }}
        </AutoSizer>
      </div>


    </main >
  );
}
