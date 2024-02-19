'use client'

import { useSearchParams } from 'next/navigation';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function PizzaSort() {
  const searchParams = useSearchParams();
  const currentSort = searchParams.get('sort') ?? '';

  const handleUpdateSorting = (name: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('sort', name);
    window.history.pushState(null, '', `?${params.toString()}`);
  };

  return (
    <div className='flex items-center gap-3 text-sm font-bold'>
      Сортировка по:
      <Select value={currentSort} onValueChange={handleUpdateSorting}>
        <SelectTrigger className='font-normal text-primary'>
          <SelectValue placeholder='популярности' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='rating'>популярности</SelectItem>
          <SelectItem value='price'>по цене</SelectItem>
          <SelectItem value='title'>по алфавиту</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
