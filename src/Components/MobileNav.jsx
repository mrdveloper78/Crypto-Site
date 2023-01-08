import React, { useState } from 'react';
// import icon
import { CgMenuRight } from 'react-icons/cg';
// import nav data
import { navData } from "../data";



const MobileNav = () => {

    return (
        <div>
            <div class="offcanvas  fixed bottom-0 flex flex-col max-w-[320px] bg-violet invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 right-0 border-none w-96" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header flex items-center justify-between p-4">
                    <button type="button" class="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-white border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body flex-grow p-4 overflow-y-auto">
                    <ul 
                    className='
                    flex flex-col items-center justify-center 
                    h-full gap-y-8 text-white text-xl'>
                        {
                            navData && navData.map(
                                (item, index) => {
                                    const { name,href } = item;
                                    return (
                                        <li>
                                            <a href={href}>{name}</a>
                                        </li>
                                    )
                                }
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}



export default MobileNav;
