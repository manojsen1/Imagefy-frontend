import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'

function Description() {
  return (
    <motion.div
    initial={{opacity: 0.2, y:100}}
    transition={{duration: 1}}
    whileInView={{opacity:1 , y: 0}}
    viewport={{once:true}}
     className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">Create AI Iamges</h1>
      <p className='text-gray-500 mb-8'>Turn iamgination itno visuals</p>

      <div className="flex flex-col gap-5 md:gap-14 md:flex-row items-center">
        <img className='w-80 xl:w-96 rounded-lg ' src={assets.sample_img_1} alt="" />
        <div className=''>
          <h2 className='text-3xl font-medium max-w-lg mb-4 '>Introducing the AI-based Text to image Generator</h2>
          <p className='text-gray-600 mb-4 '>Easily bring your ideas to life with our free AI image generator . whether you need stunning visuals or unique iamgery, our tool transfor your text-imto eye-catching images with just a few clicks. Imagine it, describe it, and watch it come to life instantly.</p>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quo tenetur obcaecati voluptas eligendi non suscipit iure repellendus est natus excepturi temporibus saepe aliquam consequuntur, ad voluptatum. Tempora, tenetur vel? Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, rerum.</p>
        </div>
      </div>
    </motion.div>
  )
}

export default Description
