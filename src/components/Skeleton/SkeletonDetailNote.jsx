import * as React from 'react';
import Container from '../Container';

export default function SkeletonDetailNote() {
  return (
    <div className="px-8 mt-4 sm:mt-6 pb-10">
      <Container>
        <div className="flex flex-col gap-4">
          <div className="w-[50%] animate-pulse h-8 bg-stone-600 dark:bg-stone-500 rounded-md" />
          <div className="w-[85%] animate-pulse h-[4.5rem] bg-stone-600 dark:bg-stone-500 rounded-md" />
        </div>

        <div className=" mt-10 flex flex-col gap-3">
          <div className="w-[75%] animate-pulse h-4 bg-stone-600 dark:bg-stone-500 rounded-md" />
          <div className="w-[90%] animate-pulse h-4 bg-stone-600 dark:bg-stone-500 rounded-md" />
          <div className="w-[90%] animate-pulse h-4 bg-stone-600 dark:bg-stone-500 rounded-md" />
          <div className="w-[75%] animate-pulse h-4 bg-stone-600 dark:bg-stone-500 rounded-md" />
          <div className="w-[55%] animate-pulse h-4 bg-stone-600 dark:bg-stone-500 rounded-md" />
          <div className="w-[75%] animate-pulse h-4 bg-stone-600 dark:bg-stone-500 rounded-md" />
          <div className="w-[55%] animate-pulse h-4 bg-stone-600 dark:bg-stone-500 rounded-md" />
        </div>
      </Container>
    </div>
  );
}
