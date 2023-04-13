import React from 'react'
import { Jost, Roboto } from 'next/font/google'

const jost = Jost({ subsets: ['latin'] })
const roboto = Roboto({ subsets: ['latin'], weight: ["700"] })

const Spinner = () => {
    return (
        <div className="h-full">

            <div className="w-full h-full text-white grid grid-cols-1 grid-rows-1 place-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-arrow-repeat animate-spin" viewBox="0 0 16 16">
                    <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                    <path fillRule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
                </svg>
                <p className={` ${roboto.className} text-4xl ml-4`}>Loading...</p>
            </div>

        </div>
    )
}

export default Spinner