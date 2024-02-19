'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { useForm } from 'react-hook-form';

import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { zodResolver } from '@hookform/resolvers/zod';

const FormSchema = z.object({
  search: z.string(),
});

export function SearchForm() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const withoutLayoutArray = ['/cart'];
  const isWithoutLayout = withoutLayoutArray.includes(pathname);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      search: searchParams.get('title')?.toString(),
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const params = new URLSearchParams(searchParams);

    if (data.search) {
      params.set('title', data.search);
    } else {
      params.delete('title');
    }

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    !isWithoutLayout && (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex h-10 max-w-96 items-center gap-2'
        >
          <FormField
            control={form.control}
            name='search'
            render={({ field }) => (
              <FormItem className='h-full w-full'>
                <FormControl>
                  <Input
                    className='h-full text-lg'
                    placeholder='Поиск пиццы...'
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            size='icon'
            className='h-full w-12'
            type='submit'
            variant='default'
          >
            <MagnifyingGlassIcon color='white' width={30} height={30} />
          </Button>
        </form>
      </Form>
    )
  );
}
