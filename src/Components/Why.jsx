import React from 'react';
// import images
import Image from '../assets/img/why-img.png';


const Why = () => {
    return (
        <section className='section'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row items-center gap-x-8'>

                    {/* ------image------- */}
                    <div className='order-2 lg:order-1'>
                        <img src={Image} alt="Image" />
                    </div>
                    {/* end image */}


                    {/* --------text------ */}
                    <div className='order-1 lg:order-2 max-w-[480px]'>
                        <h2 className='section-title'>
                            Why you should choose CRAPPO
                        </h2>

                        <p className='section-subtitle'>
                            Experience the next generation cryptocurrency platform.
                            No financial borders, extra fees, and fake reviews.
                        </p>

                        <button className='btn px-6'>Learn more</button>
                    </div>
                    {/* end text */}

                </div>
            </div>
        </section>
    )
}



export default Why;
