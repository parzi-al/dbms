import React from 'react'
import Shoe from './../assets/Shoe.svg'
import Jaba from './../assets/jaba.svg'
import Shoe2 from './../assets/Shoe2.svg'

import Price from './../assets/price.svg'
import Nav from './../components/Navbar';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Scroller from '../components/scroll'
import Butt from '../components/butt'
import Buut from '../components/buut'
// import { Link } from 'react-router-dom'




const Home = () => { 
  
   return (
    <div className='  w-fit'>

     <Parallax   >
<Nav/>
     <div className='w-full bg-[#FD0054] '>

    <section className='  text-white bg-[#FD0054] flex pt-40  w-full relative ' >
<div className='flex md:flex-row flex-col '>
  
    <div className='md:w-1/2 relative m-10 flex flex-col    '>
    <div className=' flex flex-col md:items-start items-center'>
    <span className=' md:text-sm   '>
    #Bl2023
    </span>
    <span className=' md:text-6xl md:font-[100] text-xl '>
    High Top Shoe
    </span>
   
    <span className=' md:text-8xl z-20 text-center  font-[1000] text-6xl '>
    Blue Broom
    </span>
    <span className=' md:text-2sm md:text-start z-20 text-center md:p-0 md:pt-3 p-12 rounded-full bg-white md:bg-opacity-[0%]  md:shadow-none shadow-2xl bg-opacity-[6%] text-2xs font-[400] '>This high-top sneaker is designed to offer you a stylish and comfortable footwear option. The shoe features a blue upper with pink accents, creating a striking contrast. The white sole adds a touch of elegance and durability. </span>
  <a href='#ws' class="  z-20  md:mt-5 w-fit  ">
  <Butt/>
  </a>
    </div>
 

  
    </div>  

<div className=' relative md:w-1/2 h-full flex items-center   '>
      <ParallaxLayer offset={-0.5}   speed={-0.15} style={{zIndex:10, height:'fit-content  ', width:'fit-content  ', position:'absolute' ,alignItems:'center'}} >
<img src={Shoe} alt='shoe' className='w-[344px]  md:w-[744px] md:h-[514.71px]  md:mx-10 md:mt-[15rem]  ' />
      </ParallaxLayer>
</div>
</div>
   </section>
   <div className='flex bg-white  w-full  relative  '>
    <div className=' w-fit  w-1/2 md:h-fit h-1/2 md:flex md:flex-col p-7 md:z-40 hover:duration-500 hover:shadow-cyan-500/50 rounded-2xl bg-white  shadow-2xl m-10 '>
        <span className='md:text-4xl text-[#3FA0F0]   font-[1000]'>
        Blue <br/>Broom
        </span>
        <div className='flex  md:text-2xl text-xs md:w-fit md:h-fit  w-[10rem]    flex-col'>

<li>      Torsion Control System    </li>
<li>      Segments of Solid Rubber  </li>
<li>      Thin Mesh Sewr Pannel     </li>
   </div>
        </div>
     <div  className='w-1/2 relative flex items-center '>
        <ParallaxLayer offset={0}  speed={-0.15}  style={{zIndex:1, height:'fit-contents',width:'fit-content' ,position:'absolute'}}>

  <img src={Shoe2} alt='shoe' className=' rotate-12 md:w-[744px]  md:h-[514.71px]  md:translate-x-[1rem] md:translate-x-[24rem] ' />
     </ParallaxLayer>
  <img src={Price} alt='shoe' className='z-20 md:w-[444px] h-fit md:mt-60 mt-40 w-[222px]  md:translate-x-[] md:p-6  ' />
     </div>

    </div>

    </div>
    <div className=' z-20  bg-black h-full relative md:mt-20  pt-[100px]  '>   
    <span className='flex  text-6xl flex-col font-[1000] items-center text-white    '>
      FEATURED
      <span className=' text-3xl font-[700]  text-white p-10 uppercase     '>
      Midnight Couture collections
    </span>
      <div className='z-20  item-center h-screen  w-screen'>
   <Scroller/>
      </div>
    </span>

    <div className='flex mx-20 mt-[8rem]    text-white'>
     <div className=' flex flex-col '>

            <img src={Jaba} alt='shoe' className=' w-[159.082px] h-[56.124px] ' />
         <div className='flex '>
                <div className='w-fit h-fit'>   
                        <span className='flex flex-col my-4'>Home</span>
                        <span className='flex flex-col my-4'>collections</span>
                        <span className='flex flex-col my-4'>contact</span>
                </div>
                <div  className='w-fit h-fit'>
                        <span className='flex flex-col mx-10 m-4'>privacypolicy</span>
                        <span className='flex flex-col mx-10 m-4'>Terms of use</span> 
                        <span className='flex flex-col mx-10 m-4'>FAQ</span></div>
                </div>
                <span className='pt-20 opacity-[50%] hover:opacity-[100%]'>Copyright ©2023 All rights reserved.</span>
              </div>
      <div className='mx-40  mt-20 flex flex-col text-2xl font-mono font-[400]'>

           Join our Newsletter
          <span
          className='  text-xs  font-mono font-[200]'>We’ll send you nice letters. No spam.</span>
                <Buut/> 
          </div>
    </div>
     </div>
    </Parallax>  
    </div>

  )
}
export default Home;