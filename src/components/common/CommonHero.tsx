import React from 'react';
import SubHeading from './SubHeading';
import Link from 'next/link';

interface CommonHeroProps {
  currentPage: string;
}

const CommonHero: React.FC<CommonHeroProps> = ({ currentPage }) => {
  return (
    <div className='bg-[url(/images/detail-page-bg.png)] bg-center h-[120px] bg-sky-100 lg:h-[200px] flex flex-col justify-center items-center'>
      <div className='flex flex-col items-center p-4 rounded-xl'>
        <SubHeading content={currentPage} />
        <nav className='lg:mt-2 mt-1 text-sm'>
          <Link aria-label="home route" href="/" className='hover:underline text-primary font-semibold'>Home</Link>
          <span className='mx-2 text-primary'>/</span>
          <span className='text-primary font-semibold'>{currentPage}</span>
        </nav>
      </div>
    </div>
  );
};

export default CommonHero;
