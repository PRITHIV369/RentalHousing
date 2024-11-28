import React from 'react'
import Filter from './Filter'
import Banner from './Banner'
import Slider from './Slider'
function Home() {
    return (
        <>
        <div className="flex justify-center items-center text-2xl text-violet-600 py-6">
            <b>Rental Housing</b>
        </div>
        <Banner/>
        <Slider/>
         </>
    )
}

export default Home