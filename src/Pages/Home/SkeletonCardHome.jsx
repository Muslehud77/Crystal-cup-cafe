import React from 'react';
import Skeleton from 'react-loading-skeleton';

const SkeletonCardHome = () => {
    const a = Array(6).fill(0)
    return a.map((_, i) => (
      <div key={i} className="flex justify-center items-center">
        <div className={`w-10/12 mb-5 transition-all duration-500`}>
          <Skeleton className="h-[500px] w-full rounded  object-cover object-center mb-6"></Skeleton>
          <div className="rounded overflow-hidden">
            <Skeleton className="tracking-widest text-white text-xs font-medium title-font px-2 py-1 text-right  bg-black"></Skeleton>
            <Skeleton className="tracking-widest text-white text-xs font-medium title-font px-2 py-1 text-right  bg-black"></Skeleton>
            <Skeleton></Skeleton>
          </div>
        </div>
      </div>
    ));
    
     
        
   
};

export default SkeletonCardHome;