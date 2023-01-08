import React from 'react';



const NewsLetterForm = () => {
  return (
      <form 
      className='
      flex-1 flex flex-col 
      lg:flex-row gap-y-6 lg:gap-x-10 justify-end
      items-start w-full'>
        <input 
        type="text" 
        placeholder='Enter Your Email' 
        className='input w-full placeholder:text-base'/>

        <button className='btn bg-white text-darkblue px-8 hover:bg-white/50'>
        Subscribe
        </button>
      </form>
  )
}



export default NewsLetterForm;
