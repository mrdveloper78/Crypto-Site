import React from 'react';

// import image
import Image1 from '../assets/img/feature-1-img.png';

const FeaturesSection1 = () => {
  return (
    <section className='pb-[30px] lg:pb-[120px] pt-0'>
      <div className='flex flex-col lg:flex-row'>

        {/*--------text--------*/}
        <div className='max-w-[454px] mb-6 lg:mt-10'>
          <h3 className='h3 mb-6'>Invest Smart</h3>

          <p className='text-gray mb-6'>
            Get full statistic information about the behavior of buyers
            and sellers will help you to make the decision.
          </p>

          <button className='btn px-8'>Learn more</button>
        </div>
        {/* end text */}


        {/* -------image------ */}
        <div className='flex-1 flex justify-end'>
          <img src={Image1} alt="Image1" />
        </div>
        {/* end image */}

      </div>
    </section>
  )
}



export default FeaturesSection1;
