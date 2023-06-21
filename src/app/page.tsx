'use client';

import { useEffect, useState } from 'react';
import { AProduct, FetchData } from './ApiData.type';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Product } from '@/components/Product';

export default function Home() {

  const [items, setItems] = useState<AProduct[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.lichi.com/category/get_category_product_list?category=clothes&shop=1&lang=1&limit=12&page=2")
      const data: FetchData = await response.json();
      setItems(data.api_data.aProduct);
    }
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch("https://api.lichi.com/category/get_category_product_list?category=clothes&shop=1&lang=1&limit=12&page=" + (items.length / 12) + 1)
    const data: FetchData = await response.json()
    setItems([...items, ...data.api_data.aProduct])
  }

  return (
    <main className="container mx-auto p-2 justify-center items-center" >
      <h1 className='text-[30px] py-9 uppercase tracking-wide'>Lichi</h1>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        className='flex flex-wrap gap-2 justify-center w-full'>
        {items.map((item) => <Product item={item} key={item.id} />)}
      </InfiniteScroll>
    </main>
  );
}
