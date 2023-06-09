import React from 'react'
import {BiImageAdd} from 'react-icons/bi'

const CreateNFT = () => {
  return (
    <div className='mx-0 md:mx-auto pt-[72px] flex justify-center max-w-2xl'>
      <div className='p-6'>
        <header className='flex flex-col text-4xl font-semibold tracking-wider py-3'>
          <h1>Create New Item</h1>
        </header>
        <form action="">
          <p className='my-3'>
            <span className='text-red-500'>*</span>
            <span className='text-gray-500'> Required fields</span>
          </p>
          <div>
            <div className='mb-2'>
              <label htmlFor="file" className='font-semibold text-lg md:text-xl mb-1'>Image, Video, Audio, or 3D Model *</label>
              <span className='flex text-sm text-gray-500'>File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB</span>
            </div>
            <div className='h-[257px] w-[350px] border-[3px] border-dashed border-gray-400 rounded-lg flex items-center justify-center'>
              <BiImageAdd size={50} className='text-gray-500'/>
            </div>
          </div>
          <div className='mt-6'>
            <span className='font-semibold text-lg md:text-xl flex mb-3'>Name *</span>
            <div className='w-full p-2 border-gray-300 border-[0.5px] rounded-lg'>
                <input type="url" name="" id="" placeholder='item name' className='w-full outline-none'/>
            </div>
          </div>
          <div className='mt-4 md:mt-6'>
            
              <span className='font-semibold text-lg md:text-xl'>External Link</span>
              <p className='text-gray-500 text-xs mb-1 md:mb-3'>NFT_MARKET will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more detailsa</p>
              <div className='w-full p-2 border-gray-300 border-[0.5px] rounded-lg'>
                <input type="url" name="" id="" placeholder='http://youritem.io/item/123' className='w-full outline-none'/>
              </div>
          </div>
          <div className='mt-4 md:mt-6'>
            <span className='font-semibold text-lg md:text-xl'>Description</span>
            <p className='text-gray-500 text-xs mb-1 md:mb-3'>The description will be included to the item's detail page, underneath its image. Markdown systax is supported </p>
            <div className='w-full p-2 border-gray-300 border-[0.5px] rounded-lg'>
              <textarea name="" id="" cols="60" rows="5" placeholder='Provide a detailed description of your item' className='w-full h-auto outline-none'></textarea>
            </div>
          </div>
          <div className='mt-6'>
            <button className='bg-[#2081e2] text-white font-semibold p-4 rounded-lg'>Create</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateNFT
