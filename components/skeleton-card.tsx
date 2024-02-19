import { Skeleton } from '@/components/ui/skeleton';

export function SkeletonCard() {
  return (
    <div className='flex max-w-[280px] flex-col'>
      <div className='mb-5'>
        <Skeleton className='mx-auto h-[260px] w-[260px] rounded-full' />
      </div>
      <div className='mb-5'>
        <Skeleton className='mx-auto mb-5 h-[28px] w-full' />

        <Skeleton className='h-[112px] w-full' />
      </div>
      <div className='flex items-center justify-between'>
        <Skeleton className='h-[30px] w-[80px]' />
        <Skeleton className='h-[40px] w-[100px]' />
      </div>
    </div>
  );
}
