import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { LuMapPin } from 'react-icons/lu';
import { SlCalender } from 'react-icons/sl';

const DestinationCard = ({ destination }) => {
  const {_id, imageUrl, price, destinationName, duration, country } = destination || {};

  return (
    <div className='border rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col bg-white w-full '>
      {/* ছবির জন্য ফিক্সড হাইটের র‍্যাপার */}
      <div className='relative w-full h-48'>
        <Image
          alt={destinationName || 'destination'}
          src={imageUrl}
          fill
          className='object-cover'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'
        />
      </div>

      {/* কনটেন্ট সেকশন */}
      <div className='p-4 flex flex-col justify-between flex-1 gap-4'>
        <div className='flex flex-col gap-1.5'>
          <div className='flex items-center gap-1 text-sm text-gray-500'>
            <LuMapPin className='text-rose-500' />
            <span>{country}</span>
          </div>

          <h2 className='text-xl font-bold text-gray-800 line-clamp-1'>
            {destinationName}
          </h2>

          <div className='flex gap-1.5 items-center text-sm text-gray-500'>
            <SlCalender />
            <span>{duration}</span>
          </div>
        </div>

        <div className='flex justify-between items-center pt-3 border-t border-gray-100'>
          <span className='text-xs text-gray-500'>Price</span>
          <h3 className='text-2xl font-bold text-gray-900'>${price}</h3>
        </div>
        <Link href={`/destinations/${_id}`}> <Button variant='ghost' className={'text-cyan-500'}>Book Now <FiExternalLink /></Button></Link>
      </div>
    </div>
  );
};

export default DestinationCard;