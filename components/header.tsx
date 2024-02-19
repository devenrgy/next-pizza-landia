import Image from 'next/image';
import Link from 'next/link';

import { Suspense } from 'react';

import { CartButton } from '@/components/cart-button';
import { ModeToggle } from '@/components/mode-toggle';
import { SearchForm } from '@/components/search-form';

export default function Header() {
  return (
    <header className='flex flex-wrap items-center justify-center gap-x-12 gap-y-4 border-b pb-8'>
      <Link
        className='flex flex-col items-center gap-x-5 gap-y-2 text-center sm:flex-row sm:text-left'
        href='/'
      >
        <Image
          src='/icons/logo.svg'
          className='h-[50px] w-[50px]'
          width={50}
          height={50}
          alt='Логотип Pizza Store'
        />

        <div>
          <p className='text-2xl font-bold uppercase'>Пицца Ландия</p>
          <p className='text-neutral-400'>ваш кусочек пиццы в раю</p>
        </div>
      </Link>

      <div className='flex-grow'>
        <Suspense>
          <SearchForm />
        </Suspense>
      </div>

      <div className='flex flex-grow items-center justify-between gap-x-5 sm:ml-auto sm:flex-grow-0 sm:justify-normal'>
        <div className='order-2 sm:order-1'>
          <ModeToggle />
        </div>

        <Suspense>
          <CartButton />
        </Suspense>
      </div>
    </header>
  );
}
