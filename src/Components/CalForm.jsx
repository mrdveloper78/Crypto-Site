import React from 'react';



const CalForm = () => {
  return (
    <div
      className='
    max-w-[942px] w-full bg-white mx-auto
    rounded-2xl text-darkblue p-12 shadow-primary'>

      {/* -------form------ */}
      <form
        className='
      flex flex-col lg:flex-row space-y-12
      lg:justify-between lg:items-center lg:space-y-0'>

        {/* input */}
        <input
          type="text"
          className='input placeholder:text-darkblue'
          placeholder='Enter your hash rate' />

        {/* select */}
        <select className='select' name="" id="">
          <option value=''>TH/s</option>
          <option value=''>H/s</option>
          <option value=''>KH/s</option>
          <option value=''>MH/s</option>
          <option value=''>GH/s</option>
        </select>

        {/* button */}
        <button className='btn text-white px-8 flex'>
          Calculate
        </button>

      </form>
      {/* end form */}


      {/* -------text------ */}
      <div className='mt-24 z-20'>
        <p className='text-blue font-medium mb-4'>
          ESTIMATED 24 HOUR REVENUE:
        </p>

        <h2 className='text-[32px] font-bold mb-3'>
          0.055 130 59 ETH
          <span className='text-blue'> ($1275)</span>
        </h2>

        <p className='text-gray-500 tracking-[1%]'>
          Revenue will change based on mining difficulty and Ethereum price.
        </p>
      </div>
      {/* end text */}

    </div>
  )
}



export default CalForm;
