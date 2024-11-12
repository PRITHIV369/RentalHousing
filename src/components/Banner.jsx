import React from 'react'
import Filter from './Filter'

const Banner = () => {
  return (
    <div className="h-96 w-full bg-gradient-to-br from-violet-700 to-indigo-600 flex justify-center items-center flex-col gap-5 p-4 shadow-lg rounded-lg">
    <b className="text-white text-center text-3xl md:text-4xl font-bold tracking-wide drop-shadow-lg animate-fadeIn">
        Find the Best Houses Here!
    </b>
    <div className="w-full flex justify-center">
        <Filter className="w-full max-w-md transition-transform duration-300 hover:scale-105"/>
    </div>
</div>
  )
}

export default Banner