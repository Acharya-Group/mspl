import React from 'react';
import SubHeading from './SubHeading';
import Link from 'next/link';

interface CommonHeroProps {
  currentPage: string;
}

const CommonHero: React.FC<CommonHeroProps> = ({ currentPage }) => {
  return (
    <div className='bg-gray-100 text-gray-800 h-[120px] lg:h-[200px] flex flex-col justify-center items-center'>
      <SubHeading content={currentPage} />
      <nav className='lg:mt-2 mt-1 text-sm'>
        <Link href="/" className='hover:underline'>Home</Link>
        <span className='mx-2'>/</span>
        <span>{currentPage}</span>
      </nav>
    </div>
  );
};

export default CommonHero;
