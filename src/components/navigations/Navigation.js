import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Backdrops from '../backdrop/Backdrops'
import Modal from '../modal/Modal'
import Categories from '../categories/Categories'

function Navigation() {
    
    const [isOpen, setIsOpen] = useState(false)
    


    return (
        <nav className="w-full bg-frost">
            <div className="flex container mx-auto gap-2 py-3 justify-between text-white">
                <div className="border border-white p-1">
                    <span className="font-trainOne text-xl text-white"> BOOK'S MEDIA </span>
                </div>
                <div onClick={() => setIsOpen(!isOpen)} className="text-2xl flex items-center justify-end cursor-pointer">
                    <span> Kategori </span>
                    <span className="ml-4"><FontAwesomeIcon color="white" icon={faAngleDown}/> </span> 
                </div>
                <div  className="w-96 flex items-center">
                    <form className="w-full">
                        <input type="text" className="focus:outline-none rounded text-gray-500 h-10 w-full pl-4" placeholder="Cari Produk"/>
                    </form>
                </div>
                <div className="w-20 text-2xl flex items-center justify-center">
                    <span className="text-2xl"> Masuk </span>
                </div>
                <div className="flex items-center justify-end">
                    <span className="text-2xl"><FontAwesomeIcon color="white" icon={faShoppingCart}/></span>
                </div>
            </div>
            { isOpen ? <Categories clickClose={()=> setIsOpen(false)}/> : null }
            
        </nav>
    )
}

export default Navigation
