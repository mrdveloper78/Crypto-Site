import React from 'react';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Image from '../assets/img/hero-img.png';


const Hero = () => {
    return (
        <section>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center lg:flex-row'>

                    {/*--------hero text--------*/}
                    <div className=' flex-1'>

                        {/* badge text */}
                        <div className='bg-white/10 py-1 pl-1 pr-3 mb-6 rounded-full max-w-[365px]'>
                            <div className='flex items-center justify-between text-sm lg:text-base'>
                                <div
                                    className='
                                text-white bg-darkblue 
                                rounded-full font-medium py-1 px-4 
                                hover:text-blue hover:cursor-help'>
                                    75% SAVE
                                </div>

                                <div>
                                    For the Black Friday weekend
                                </div>
                            </div>
                        </div>

                        {/* title */}
                        <div>
                            <h1 className='text-[32px] lg:text-[64px] font-bold leading-tight mb-6'>
                                Fastest & secure platform to invest in crypto.
                            </h1>

                            <p className='max-w-[440px] leading-relaxed mb-8'>
                                Buy and sell cryptocurrencies,
                                trusted by 10M wallets with over $30 billion in transactions.
                            </p>

                            <button className='btn gap-x-6 pl-6 text-sm lg:h-16 lg:text-base'>
                                Try for free
                                <IoIosArrowDroprightCircle className='text-2xl lg:text-3xl'/>
                            </button>
                        </div>

                    </div>
                    {/* end hero text */}


                    {/*-------hero image--------*/}
                    <div className='flex-1'>
                        <img src={Image} alt="Image" />
                    </div>
                    {/* end hero image */}

                </div>
            </div>
        </section>
    )
}


export default Hero;