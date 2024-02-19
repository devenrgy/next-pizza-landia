import Link from 'next/link';

import { FaTrashCan } from 'react-icons/fa6';
import { LuArrowLeft } from 'react-icons/lu';

import { CartItem } from '@/components/cart-item';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function Cart() {
  return (
    <div className='mx-auto mt-24 max-w-[820px]'>
      <div className='mb-8 flex justify-between'>
        <h1 className='text-3xl font-bold'>Корзина</h1>

        <Button className='gap-2 text-neutral-300' variant={'ghost'}>
          <FaTrashCan size={20} />
          Очистить корзину
        </Button>
      </div>

      <Separator />

      <ul className='mb-2 min-h-[300px]'>
        <li className='[&+&]:border-t'>
          <CartItem />
        </li>
        <li className='[&+&]:border-t'>
          <CartItem />
        </li>
      </ul>

      <div className='mb-10 flex items-center justify-between text-xl'>
        <p>
          Всего пицц: <span className='font-bold'>3 шт.</span>
        </p>
        <p>
          Сумма заказа: <span className='font-bold text-primary'>900 ₽</span>
        </p>
      </div>

      <div className='flex items-center justify-between'>
        <Link href={'/'}>
          <Button
            className='h-12 gap-2 text-neutral-300 hover:text-neutral-300'
            variant={'outline'}
            size={'lg'}
          >
            <LuArrowLeft size={20} />
            Вернуться назад
          </Button>
        </Link>
        <Button className='h-12 font-bold text-white' size={'lg'}>
          Оплатить сейчас
        </Button>
      </div>
    </div>
  );
}
