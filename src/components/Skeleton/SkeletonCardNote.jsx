import * as React from 'react';
import PropTypes from 'prop-types';
import CardNote from '../Card/CardNote';
import clsxm from '../../utils/clsxm';

export default function SkeletonCardNote({ isArchive = false }) {
  return (
    <CardNote isArchive={isArchive} to="/">
      <div className="flex flex-col gap-3 px-4 pt-4">
        <div className="w-[85%] animate-pulse h-7 bg-stone-600 dark:bg-stone-500 rounded-md" />
        <div className="w-[65%] animate-pulse h-5 bg-stone-600 dark:bg-stone-500 rounded-md" />
      </div>

      <div className=" mt-3 px-4 flex flex-col gap-3">
        <div className="w-[75%] animate-pulse h-4 bg-stone-600 dark:bg-stone-500 rounded-md" />
        <div className="w-[90%] animate-pulse h-4 bg-stone-600 dark:bg-stone-500 rounded-md" />
        <div className="w-[90%] animate-pulse h-4 bg-stone-600 dark:bg-stone-500 rounded-md" />
        <div className="w-[75%] animate-pulse h-4 bg-stone-600 dark:bg-stone-500 rounded-md" />
        <div className="w-[55%] animate-pulse h-4 bg-stone-600 dark:bg-stone-500 rounded-md" />
      </div>

      <div className={clsxm(
        'divide-x flex items-center border-t-[1px] divide-primary/60 border-primary/60 mt-4',

        isArchive && 'divide-archived/60 border-archived/60',
      )}
      >
        <div className="w-[50%] animate-pulse h-10 bg-stone-600/30 dark:bg-stone-500/50 " />
        <div className="w-[50%] animate-pulse h-10 bg-stone-600/30 dark:bg-stone-500/50 " />
      </div>
    </CardNote>
  );
}

SkeletonCardNote.propTypes = {
  isArchive: PropTypes.bool,
};

SkeletonCardNote.defaultProps = {
  isArchive: false,
};
