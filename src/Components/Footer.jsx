import React from 'react';

// import images
import Logo from '../assets/img/logo.svg';
import VisaImg from '../assets/img/visa.png';
import MastercardImg from '../assets/img/mastercard.png';
import BitcoinImg from '../assets/img/bitcoin.png';

// import icons
import {
    IoLogoYoutube,
    IoLogoInstagram,
    IoLogoTwitter,
    IoLogoLinkedin,
} from 'react-icons/io';

// import data
import { quickLinks } from "../data";
import { resourcesLinks } from "../data";

const Footer = () => {
    return (
        <footer className='pt-0 lg:pt-24'>
            <div className='container mx-auto'>

                {/* --------up-------- */}
                <div
                    className='
                mb-24 flex flex-col gap-12 
                lg:flex-row lg:justify-between'>

                    {/* logo */}
                    <div className='flex-1 max-w-[285px] mx-auto lg:mx-0'>
                        <a href="#">
                            <img src={Logo} alt="Logo" />
                        </a>
                    </div>

                    {/* links */}
                    <div
                        className='
                    flex-1 flex flex-col gap-16
                    lg:flex-row text-center lg:text-left'>
                        {/* Quick Links */}
                        <div className='w-full'>
                            <h2 className='text-xl font-medium mb-6'>Quick Links</h2>
                            <ul className='space-y-4 text-gray'>
                                {
                                    quickLinks && quickLinks.map(
                                        (item, index) => {
                                            const { href, name } = item;
                                            return (
                                                <li key={index}>
                                                    <a href={href} className='hover:text-blue'>
                                                        {name}
                                                    </a>
                                                </li>
                                            )
                                        }
                                    )
                                }
                            </ul>
                        </div>

                        {/* Resources Links */}
                        <div className='w-full'>
                            <h2 className='text-xl font-medium mb-6'>Resources Links</h2>
                            <ul className='space-y-4 text-gray'>
                                {
                                    resourcesLinks && resourcesLinks.map(
                                        (item, index) => {
                                            const { href, name } = item;
                                            return (
                                                <li key={index}>
                                                    <a href={href} className='hover:text-blue'>
                                                        {name}
                                                    </a>
                                                </li>
                                            )
                                        }
                                    )
                                }
                            </ul>
                        </div>
                    </div>

                    {/* payment */}
                    <div className='flex-1 flex flex-col '>
                        <div className='lg:ml-[80px]'>
                            <h3 className='h3 font-medium text-center lg:text-left mb-10'>
                                We accept following payment systems
                            </h3>

                            <div className='flex justify-center items-center gap-6'>
                                <img src={VisaImg} alt="VisaImg" />
                                <img src={MastercardImg} alt="MastercardImg" />
                                <img src={BitcoinImg} alt="BitcoinImg" />
                            </div>
                        </div>
                    </div>

                </div>
                {/* end up */}



                {/* -------down------- */}
                <div className='py-12'>
                    <div
                        className='
                    flex flex-col items-center gap-y-6 
                    lg:flex-row lg:justify-between lg:gap-y-0'>
                        {/* copyright */}
                        <p>&copy; 2022 CRAPPO. All rights reserved.</p>

                        {/* socials */}
                        <div className='flex text-2xl gap-x-6'>
                            <a href="#">
                                <IoLogoInstagram className='hover:text-blue' />
                            </a>
                            <a href="#">
                                <IoLogoLinkedin className='hover:text-blue' />
                            </a>
                            <a href="#">
                                <IoLogoTwitter className='hover:text-blue' />
                            </a>
                            <a href="#">
                                <IoLogoYoutube className='hover:text-blue' />
                            </a>
                        </div>
                    </div>
                </div>
                {/* end down */}

            </div>
        </footer>
    )
}



export default Footer;
