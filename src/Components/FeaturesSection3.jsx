import React from 'react';

// import image
import Image3 from '../assets/img/feature-3-img.png';

const FeaturesSection3 = () => {
  return (
    <section className='py-[30px] lg:py-[120px]'>
      <div className='flex flex-col lg:flex-row'>

        {/* ---------text-------- */}
        <div className='flex-1 max-w-[454px] lg:mt-10'>
          <h3 className='h3 mb-6'>
            Grow your profit and track your investments
          </h3>

          <p className='max-w-[408px] text-gray mb-6'>
            Use advanced analytical tools.
            Clear TradingView charts let you track current and historical profit investments.
          </p>

          <button className='btn px-6'>Learn more</button>
        </div>
        {/* end text */}


        {/* --------image-------- */}
        <div className='flex-1 flex justify-end'>
          <img src={Image3} alt="Image3" />
        </div>
        {/* end image */}

      </div>
    </section>
  )
}



export default FeaturesSection3;
