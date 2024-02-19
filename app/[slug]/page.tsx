'use client';

import { useSearchParams } from 'next/navigation';

import { useEffect, useState } from 'react';

import PizzaCard from '@/components/pizza-card';
import { SkeletonCard } from '@/components/skeleton-card';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

import { CATEGORIES } from '@/constants';

async function getData<T>(
  category: string,
  sortName: string,
  title: string,
  currentPage: number
): Promise<T> {
  let res = null;

  const currentCategory = category === 'all' ? '' : `&category=${category}`;

  res = await fetch(
    `https://4275eac693d4b299.mokky.dev/items/?page=${currentPage}&sortBy=${sortName}${currentCategory}&title=*${title}&limit=4`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

interface Props {
  params: { slug: string };
  searchParams?: {
    title?: string;
    page?: string;
  };
}

export default function Page({ params, searchParams }: Props) {
  const title = searchParams?.title ?? '';
  const currentPage = Number(searchParams?.page) ?? 1;
  const category = useSearchParams().get('category') || 'all';
  const currentSort = useSearchParams().get('sort') ?? 'rating';
  const [isLoading, setIsLoading] = useState(false);
  const [pizzaData, setPizzaData] = useState<PizzaData | null>(null);
  const currentCategory = CATEGORIES.find(
    ({ path }) => path === `${category === 'all' ? '' : category}`
  );

  useEffect(() => {
    setIsLoading(true);

    (async () => {
      const data = await getData<PizzaData>(
        category,
        currentSort,
        title,
        currentPage
      );

      setPizzaData(
        await new Promise((resolve) => setTimeout(() => resolve(data), 150))
      );

      setIsLoading(false);
    })();
  }, [currentSort, category, title, currentPage]);

  const pizzaCardList = pizzaData?.items?.map((item, i) => (
    <PizzaCard key={i} {...item} />
  ));
  const skeletonCardList = Array.from({ length: 4 }, (_, i) => (
    <SkeletonCard key={i} />
  ));

  return (
    <div className='grid grid-rows-[minmax(600px,_1fr)_min-content] gap-4 sm:gap-0'>
      <div>
        <h1 className='mb-8 text-3xl font-bold'>
          {currentCategory?.name} пиццы
        </h1>
        <div className='grid place-items-center gap-x-8 gap-y-16 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
          {isLoading ? skeletonCardList : pizzaCardList}
        </div>
      </div>
      <Pagination className='h-10'>
        {pizzaData?.meta && (
          <PaginationContent className='gap-8'>
            {pizzaData.meta.current_page && pizzaData.meta.current_page > 1 && (
              <PaginationItem>
                <PaginationPrevious
                  className='border bg-primary font-bold text-white hover:bg-primary/90 hover:text-white'
                  href={`/?page=${pizzaData.meta.current_page - 1}${category && `&category=${category}`}${title && `&title=${title}`}${currentSort && `&sort=${currentSort}`}`}
                />
              </PaginationItem>
            )}

            {pizzaData.meta.current_page > 1 &&
              pizzaData.meta.current_page !== pizzaData.meta.total_pages && (
                <PaginationItem>
                  <PaginationLink
                    isActive
                    className='pointer-events-none border-none text-lg text-neutral-400 ring-1 ring-input'
                    href='#'
                  >
                    {pizzaData.meta.current_page}
                  </PaginationLink>
                </PaginationItem>
              )}

            {pizzaData.meta.current_page + 1 <= pizzaData.meta.total_pages && (
              <>
                <PaginationItem>
                  <PaginationNext
                    className='border bg-primary font-bold text-white hover:bg-primary/90 hover:text-white'
                    href={`/?page=${pizzaData.meta.current_page + 1}${category && `&category=${category}`}${title && `&title=${title}`}${currentSort && `&sort=${currentSort}`}`}
                  />
                </PaginationItem>
              </>
            )}
          </PaginationContent>
        )}
      </Pagination>
    </div>
  );
}
