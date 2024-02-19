import Image from 'next/image';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { PIZZA_DOUGH, PIZZA_SIZES } from '@/constants';

interface PizzaCardProps {
  id: number;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
}

export default function PizzaCard({
  title,
  imageUrl,
  types,
  sizes,
  price,
}: PizzaCardProps) {
  return (
    <Card className='w-[280px] border-none shadow-none '>
      <CardHeader className='relative mx-auto mb-5 h-[260px] w-[260px] p-0'>
        <Image
          src={imageUrl}
          priority
          sizes='260'
          fill
          alt={`Пицца ${title}`}
        />
      </CardHeader>
      <CardContent className='mb-5 p-0'>
        <CardTitle className='mb-5 text-center text-xl font-bold'>
          {title}
        </CardTitle>

        <Tabs defaultValue={PIZZA_DOUGH[types[0]]}>
          <TabsList className='h-14 w-full rounded-b-none p-2'>
            {PIZZA_DOUGH.map((dough, i) => (
              <TabsTrigger
                key={i}
                disabled={!types.includes(i)}
                className='h-full flex-1 font-bold'
                value={dough}
              >
                {dough}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <Tabs defaultValue={sizes[0].toString()}>
          <TabsList className='h-14 w-full rounded-t-none p-2'>
            {PIZZA_SIZES.map((size, i) => (
              <TabsTrigger
                key={i}
                disabled={!sizes.includes(size)}
                className='h-full flex-1 font-bold'
                value={size.toString()}
              >
                {size} см.
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </CardContent>
      <CardFooter className='justify-between p-0'>
        <p className='text-xl font-bold'>от {price} ₽</p>
        <Button className='font-bold' variant={'outline'}>
          Добавить
        </Button>
      </CardFooter>
    </Card>
  );
}
