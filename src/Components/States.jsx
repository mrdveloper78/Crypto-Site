import React from 'react';
// import icons
import { HiChartBar, HiUser, HiGlobe } from 'react-icons/hi';


const States = () => {
  return (
    <section className='pt-24'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-y-6 lg:justify-between'>

          {/* -------item1-------- */}
          <div className='flex items-center gap-x-6'>
            {/* icon */}
            <div
              className='
            bg-white/10 w-20 h-20 rounded-full
            flex items-center justify-center
            text-blue text-2xl lg:text-4xl'>
              <HiChartBar />
            </div>

            {/* text */}
            <div>
              <div className='text-2xl font-bold lg:text-[40px] lg:mb-2'>
                $30B
              </div>

              <div className='text-gray'>Digital Currency Exchanged</div>
            </div>
          </div>
          {/* end item1 */}


          {/* -------item2-------- */}
          <div className='flex items-center gap-x-6'>
            {/* icon */}
            <div
              className='
            bg-white/10 w-20 h-20 rounded-full
            flex items-center justify-center
            text-blue text-2xl lg:text-3xl'>
              <HiUser />
            </div>

            {/* text */}
            <div>
              <div className='text-2xl font-bold lg:text-[40px] lg:mb-2'>
              $10M+
              </div>

              <div className='text-gray'>Trusted Wallets Investor</div>
            </div>
          </div>
          {/* end item2 */}


          {/* -------item3-------- */}
          <div className='flex items-center gap-x-6'>
            {/* icon */}
            <div
              className='
            bg-white/10 w-20 h-20 rounded-full
            flex items-center justify-center
            text-blue text-2xl lg:text-3xl'>
              <HiGlobe />
            </div>

            {/* text */}
            <div>
              <div className='text-2xl font-bold lg:text-[40px] lg:mb-2'>
              195
              </div>

              <div className='text-gray'>Countries Supported</div>
            </div>
          </div>
          {/* end item3 */}

        </div>
      </div>
    </section>
  )
}



export default States;
