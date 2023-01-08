import React from 'react';

// import image
import Image2 from '../assets/img/feature-2-img.png';

const FeaturesSection2 = () => {
  return (
    <section className='py-[30px] lg:py-[120px]'>
      <div className='flex flex-col lg:flex-row items-center justify-end'>

        {/* -------image------- */}
        <div className='flex-1 lg:absolute lg:left-0 order-2 lg:order-1'>
          <img src={Image2} alt="Image2" />
        </div>
        {/* end image */}


        {/* -------text-------- */}
        <div className='flex-1 max-w-[456px] order-1 lg:order-2'>
          <h3 className='h3 mb-6'>Detailed Statistics</h3>

          <p className='text-gray mb-8'>
          View all mining related information in realtime, 
          at any point at any location and decide which polls you want to mine in.
          </p>

          <button className='btn px-8 mb-6 lg:mb-0'>learn more</button>
        </div>
        {/* end text */}

      </div>
    </section>
  )
}



export default FeaturesSection2;
