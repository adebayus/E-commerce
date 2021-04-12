import React from 'react'
import Backdrops from '../backdrop/Backdrops'
import Carts from '../carts/Carts'
import Categories from '../categories/Categories'

function Modal() {
    return (
        <React.Fragment>
            <Backdrops/>
            {/* <Categories/> */}
            <Carts/>
        </React.Fragment>
    )
}

export default Modal
