import React, { useState } from 'react';
// import data
import { currency } from '../data';

// import icons
import { IoIosArrowForward } from 'react-icons/io';


const Trade = () => {

    const [value, setValue] = useState('Bitcoin');

    return (
        <section
            className='
        section lg:pt-[280px] bg-gradient-to-b lg:relative 
        from-[#f8f9fb] to-[#fafbff] bg-white text-darkblue '>
            <div className='container mx-auto'>
                <div>

                    {/* -------text------- */}
                    <h2 className='section-title text-center mb-16'>
                        Trade securely and market the high growth cryptocurrencies.
                    </h2>
                    {/* end text */}


                    {/* -------cards------ */}
                    <div className='flex flex-col lg:flex-row gap-[45px]'>
                        {
                            currency && currency.map(
                                (item, index) => {
                                    const { abbr, description, image, name } = item;
                                    return (
                                        // پدر بزرگ کلی جعبه
                                        <div
                                            onClick={() => setValue(name)}
                                            className={`
                                        ${name === value ? 'bg-violet text-white' : 'bg-white'}
                                        w-full rounded-2xl py-12 px-6
                                        shadow-primary cursor-pointer transition duration-300
                                        `}>
                                            {/*پدر عناصز نسبت به هم  */}
                                            <div
                                                className='
                                             flex 
                                             flex-col items-center justify-center'>

                                                {/* item image */}
                                                <img className='mb-12' src={image} alt="image" />

                                                {/* item name */}
                                                <div className='mb-4 flex items-center gap-x-2'>
                                                    <div className='text-[32px] font-bold'>
                                                        {name}
                                                    </div>

                                                    <div className='text-lg text-gray-400 font-medium'>
                                                        {abbr}
                                                    </div>
                                                </div>

                                                {/* item description */}
                                                <p className='mb-6 text-center'>{description}</p>

                                                {/* item btn */}
                                                <button
                                                    className={`
                                                ${name === value
                                                            ? 'text-white bg-blue hover:bg-blue-hover border-none pl-8 pr-6 gap-x-3'
                                                            : 'text-blue w-16'
                                                        }
                                                rounded-full border-2 border-gray-300
                                                h-16 flex items-center justify-center
                                                `}>
                                                    {
                                                        name === value &&
                                                        <div>Start mining</div>
                                                    }

                                                    <IoIosArrowForward className={`${name === value ? 'text-2xl' : 'text-3xl'}`}/>
                                                </button>

                                            </div>
                                        </div>
                                    )
                                }
                            )
                        }
                    </div>
                    {/* end cards */}

                </div>
            </div>
        </section>
    )
}



export default Trade;
