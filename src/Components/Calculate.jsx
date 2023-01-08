import React from 'react';
import CalForm from './CalForm';



const Calculate = () => {
  return (
    <section className='section z-10 relative'>
      <div className='container mx-auto'>
        <div>

          {/* -------text------- */}
          <div className='text-center'>
            <h2 className='section-title'>
              Check how much you can earn
            </h2>

            <p className='section-subtitle text-lg mb-16 max-w-[622px] mx-auto'>
              Let's check your hash rate to see how much you will earn today.
            </p>
          </div>
          {/* end text */}


          {/* -------form------- */}
          <div>
            <CalForm/>
          </div>
          {/* end form */}

        </div>
      </div>
    </section>
  )
}



export default Calculate;
