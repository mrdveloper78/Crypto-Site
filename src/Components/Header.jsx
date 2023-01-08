import React, { useEffect, useState } from 'react';
// import logo
import Logo from "../assets/img/logo.svg";
// import components
import Nav from './Nav';
// import icon
import { CgMenuRight } from "react-icons/cg";
import MobileNav from './MobileNav';



const Header = () => {



    return (
        <header className='py-[30px] lg:pt-[60px]'>
            <div
                data-aos='fade-down'
                data-aos-delay='900'
                data-aos-duration='2000'
                className={`
                 mx-auto container flex items-center justify-between`}>

                {/* --------logo------- */}
                <a href='#'>
                    <img src={Logo} alt="Logo" />
                </a>
                {/* end logo */}



                {/* --------nav & buttons-------- */}
                <div className='hidden lg:flex gap-x-[55px]'>
                    <Nav />
                    <div className='flex items-center font-medium'>
                        <a href="" className='hover:text-blue transition'>Login</a>
                        <span className='mx-6 text-white/20 font-thin'>|</span>
                        <button className='btn h-[52px] text-base px-8'>Register</button>
                    </div>
                </div>
                {/* end nav */}


                {/* -------mobile nav------- */}
                <div className='flex lg:hidden cursor-pointer '>
                    <CgMenuRight
                        class=" text-white font-medium text-2xl leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg  focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mr-1.5"
                        data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" />
                </div>
                {/* end mobile nav */}

            </div>
        </header>
    )
}



export default Header;

