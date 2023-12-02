import React from 'react'
import Navo from './Navo'
import Jaba from './../assets/jaba.svg'
import Offer from './../assets/icons/Offer.svg'
import Shoppingcart from './../assets/icons/Shoppingcart.svg'
import user from './../assets/icons/user.svg'
 const Navbar = () => {
  return ( 
    <div className="  w-full flex bg-[#FD0054] justify-between   duration-500 hover:shadow-red-500/50  h-fit shadow-2xl p-5  fixed top-0 left-0 z-50 ">
        <img className='w-[227.45px] h-12   ' src={Jaba} alt='jaba'/>
        <div className='font-Gothams flex items-center  px-15 space-x-[100px]  text-sm  '>
          <a href="#ws" className="text-white flex  " ><Navo name='Offers'/>
          <img src={Offer} alt='offer' className=' w-[22px] mx-2 h-[22px]' />
          </a>
          <a href="#ws" className="text-white flex  " ><Navo name='Carts'/>
          <img src={Shoppingcart} alt='cart' className=' w-[22px] mx-2 h-[22px] ' />
           </a>
           <a href="#ws" className="text-white flex  " ><Navo name='Sign in'/>
          <img src={user} alt='user' className=' w-[22px] h-[22px] mx-2    ' />
           </a>
      </div>
 
        </div> 
  )
}
export default Navbar;