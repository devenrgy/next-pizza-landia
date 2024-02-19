'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { LuShoppingCart } from 'react-icons/lu';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export function CartButton() {
  const pathname = usePathname();
  const withoutLayoutArray = ['/cart'];
  const isWithoutLayout = withoutLayoutArray.includes(pathname);
  return (
    !isWithoutLayout && (
      <Link className='order-1 sm:order-2' href='/cart/'>
        <Button
          className='min-h-12 min-w-36 justify-between px-5 font-bold text-white'
          size='lg'
        >
          <span>520 ₽</span>
          <Separator
            className='h-6 bg-white opacity-30'
            orientation='vertical'
          />
          <div className='flex gap-2'>
            <LuShoppingCart size={18} />
            <span>3</span>
          </div>
        </Button>
      </Link>
    )
  );
}
