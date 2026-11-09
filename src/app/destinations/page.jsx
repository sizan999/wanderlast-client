import DestinationCard from '@/components/DestinationCard';
import React from 'react';

const DestinationPage = async () => {
    const res = await fetch(`http://localhost:5000/destinations`)
    const destination = await res.json()

    console.log(destination)
    return (
        <div className='max-w-7xl mx-auto'>
            <h1>All Destination</h1>
            <div className='grid grid-cols-4 gap-4'>
                {
                    destination.map(destination => <DestinationCard key={destination._id} destination={destination}></DestinationCard>)
                }
            </div>
        </div>
    );
};

export default DestinationPage;