import React from 'react'

const CategoryItem = ({category}) => {
  return (
    <div className="flex w-full cursor-pointer items-center gap-4 rounded-lg bg-white p-2 px-5 text-gray-600 transition-all duration-300 ease-in-out hover:bg-gray-100 hover:outline hover:outline-[#ec2025] dark:bg-gray-700 dark:text-gray-400 dark:hover:outline xl:flex-col xl:items-start xl:py-6">
        <img src={category.image} alt="{caegory.name}" className='size-10'/>
        <div>
            <h1 className="text-xl font-bold">{category.name} </h1>
            <p className="text-gray-400 dark:text-white/40">{category.quantities}</p>
        </div>
    </div>
  )
}

export default CategoryItem