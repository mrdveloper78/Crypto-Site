import React from 'react';
import NewsLetterForm from './NewsLetterForm';



const NewsLetter = () => {
    return (
        <section className='py-[40px] lg:py-[88px] bg-newsletter bg-cover'>
            <div className='container mx-auto'>
                <div 
                className='
                flex flex-col lg:flex-row items-center lg:justify-between
                p-12 rounded-2xl bg-blue lg:bg-newsletterBox lg:h-[216px]'>

                    {/* -------text-------- */}
                    <div>
                        <h3 className='h3 mb-6'>Start mining now</h3>

                        <p className='max-w-[348px] mb-8 lg:mb-0'>
                            Join now with CRAPPO to get the latest news and start mining now
                        </p>
                    </div>
                    {/* end text */}

                    {/* --------form------- */}
                    <NewsLetterForm />
                    {/* end form */}

                </div>
            </div>
        </section>
    )
}



export default NewsLetter;
