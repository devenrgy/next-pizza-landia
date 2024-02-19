'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

import { Suspense } from 'react';

import PizzaSort from '@/components/pizza-sort';

import { CATEGORIES } from '@/constants';

import { cn } from '@/lib/utils';

export default function Template({ children }: { children: React.ReactNode }) {
  let categoryPath = useSearchParams().get('category') ?? '';
  let sort = useSearchParams().get('sort') ?? '';
  const path = usePathname();
  const withoutLayoutArray = ['/cart'];
  const isWithoutLayout = withoutLayoutArray.includes(path);

  categoryPath = categoryPath === 'all' ? '' : categoryPath;

  return (
    <section>
      {!isWithoutLayout && (
        <div className='mb-8 flex flex-wrap items-center justify-between gap-x-4 gap-y-8'>
          <nav className='flex flex-wrap gap-3'>
            {CATEGORIES.map(({ path, name }, id) => (
              <Link
                key={id}
                className={cn(
                  categoryPath === path
                    ? 'pointer-events-none bg-secondary-foreground text-secondary'
                    : 'bg-secondary hover:text-secondary',
                  'block cursor-pointer rounded-md px-7 py-3 font-bold transition-colors hover:bg-secondary-foreground '
                )}
                href={`${path ? `?category=${path}${sort ? `&sort=${sort}` : ''}` : `${sort ? `/?sort=${sort}` : '/'}`}`}
              >
                {name}
              </Link>
            ))}
          </nav>

          <Suspense>
            <PizzaSort />
          </Suspense>
        </div>
      )}

      {children}
    </section>
  );
}
