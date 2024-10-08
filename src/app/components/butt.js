import React from 'react'


const butt = () => {
  return (
<button class="cursor-pointer relative group overflow-hidden border-2 rounded-full w-fit px-8 py-2 border-green-500">
  <span class="font-bold text-white    text-xl relative z-10 group-hover:text-[#2B2024] duration-500">Buy now</span>
  <span class="absolute top-0 left-0 w-full bg-[#2B2024] duration-500 group-hover:-translate-x-full h-full"></span>
  <span class="absolute top-0 left-0 w-full bg-[#2B2024] duration-500 group-hover:translate-x-full h-full"></span>
  
    <span class="absolute top-0 left-0 w-full bg-[#2B2024] duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
  <span class="absolute delay-300 top-0 left-0 w-full bg-[#2B2024] duration-500 group-hover:translate-y-full h-full"></span>
</button>
  )
}
export default butt;