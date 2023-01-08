import React from 'react';
// import nav data
import {navData} from "../data";


const Nav = () => {
  return (
    <nav className='flex items-center'>
      <ul className='flex gap-x-8'>
        {
            navData && navData.map(
                (item,index) => {
                    const {href,name} = item;
                    return(
                        <li 
                        key={index} 
                        className='
                        border-b-2 border-transparent
                        hover:border-blue transition-all duration-300'>

                            <a href={href}>{name}</a>

                        </li>
                    )
                }
            )
        }
      </ul>
    </nav>
  )
}


export default Nav;