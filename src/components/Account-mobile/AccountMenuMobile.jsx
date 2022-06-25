import React from 'react'
import { ReactComponent as Hamburger } from '../../assets/svg/burger-menus.svg'

const AccountMenu = ({ isData, setIsData }) => {
    return (
        <>
            <div className=' w-11/12 mx-auto mt-5 mb-18'>
                <Hamburger />
            </div>
            <div className=' w-11/12 mx-auto  mb-10  inline-flex  justify-center'>
                <h1 className='text-3xl mt-5'>
                    Account
                </h1>
            </div>
            <div className='flex justify-center'>
                <div className='flex-2 w-11/12 mx-auto inline-flex  justify-between'>
                    <div
                        onClick={() => setIsData(true)}
                        className={`border-b-2 pr-5 ${isData ? 'border-b-gray-700 font-bold' : 'border-b-gray-400'}  pb-2 mb-2 w-6/12 justify-center flex`}>
                        Main
                    </div>
                    <div
                        onClick={() => setIsData(false)}
                        className={`border-b-2 pr-5 ${!isData ? 'border-b-gray-700 font-bold' : 'border-b-gray-400'} pr-5 mb-2 pb-2 w-6/12 justify-center flex`}>
                        Pending
                    </div>
                </div>
            </div >
        </>

    )
}

export default AccountMenu 
