import Image from 'next/image';

import { FaMinus, FaPlus } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function CartItem() {
  return (
    <Card className='flex flex-col items-center justify-between gap-5 border-none py-8 shadow-none md:flex-row'>
      <CardHeader className='flex flex-col items-center gap-4 p-0 text-center md:flex-row md:text-left'>
        <Image
          className='bg-neutral-400'
          src=''
          width={80}
          height={80}
          alt=''
        />
        <div>
          <CardTitle className='text-xl'>Сырный цыпленок</CardTitle>
          <CardDescription className='text-lg'>
            тонкое тесто, 26 см.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className='flex items-center gap-3 p-0'>
        <Button
          className='h-8 w-8 border-2 border-primary'
          variant={'outline'}
          size={'icon'}
        >
          <FaMinus size={16} className='text-primary' />
        </Button>
        <p className='text-xl font-bold'>3</p>
        <Button
          className='h-8 w-8 border-2 border-primary'
          variant={'outline'}
          size={'icon'}
        >
          <FaPlus size={16} className='text-primary' />
        </Button>
      </CardContent>
      <CardFooter className='flex flex-col items-center gap-2 p-0 md:flex-row md:gap-24'>
        <p className='text-xl font-bold'>770 ₽</p>
        <Button className='h-8 w-8 border-2' variant={'outline'} size={'icon'}>
          <IoClose size={20} className='text-neutral-300 dark:text-white' />
        </Button>
      </CardFooter>
    </Card>
  );
}
