import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons'

function Helper() {
    return (
        <header className="bg-dark-frost">
            <div className="container mx-auto flex justify-end">
                <a href="/"className="my-1 mr-10 cursor-pointer">
                    <p className="text-base text-white leading-3 flex items-center">
                        <i className="mr-1"><FontAwesomeIcon color="white" icon={faQuestionCircle} /></i>
                        Bantuan
                    </p>
                </a>
            </div>
        </header>
    )
}

export default Helper
