import React from 'react'


const buut = () => {
  return (
<form class="">
    
       
    <div class="flex gap-1">
        <div class="relative rounded-lg w-64 overflow-hidden  before:absolute before:w-12 before:h-12 
        before:content[''] before:right-0  before:rounded-full before:blur-lg  after:absolute after:z-10
         after:w-20 after:h-20 after:content['']   after:right-12 after:top-3 after:rounded-full
          after:blur-lg">
        <input placeholder="Mail..." class="relative bg-transparent ring-0   text-sm rounded-lg   block w-full p-2.5 "
         type="text"/>
        </div>
        <button class="bg-red-500 text-sm w-fit h-fit p-2 rounded-full hover:bg-violet-400">Subscribe</button>
    </div>
</form>
  )
}
export default buut;