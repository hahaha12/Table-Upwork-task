import React, { useState, useEffect } from 'react'
import functions from './../../api/AccountAPI';


const AccountTable = ({ isData }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        if (isData) {
            functions.getMainAccountsByUserId().then(res => setData(res))
        } else {
            functions.getPendingAccountsByUserId().then(res => setData(res))
        }
    }, [isData])


    return (
        <table className="items-center bg-transparent w-full border-collapse ">
            <thead>
                <tr className=' bg-black '>
                    <th className="w-4 text-base  px-4 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        ID
                    </th>
                    <th className="w-4 text-base  text-white align-right border border-solid border-blueGray-100 py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Description
                    </th>
                    <th className="px-6 text-base pr-9 text-white align-middle border border-solid border-blueGray-100 py-3 text-xs  border-l-0 border-r-0 whitespace-nowrap font-semibold text-right ">
                        Amount
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.map(({ id, debit, credit, currency, description, datetime }) => (
                    <tr className={`${id % 2 === 0 && 'bg-gray-50'}`} key={id}>
                        <td className="text-base w-4 border-t-0 px-3 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            {id}
                        </td>
                        <td className="border-t-0 px-1 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                            <p className='text-base'>{description}</p>
                            <p>{datetime}</p>
                        </td>
                        <td className={`${credit ? 'text-red-500' : debit && 'text-green-500'} text-base border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap   pr-11 text-right`}>
                            {currency + ' ' + id}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table >
    )
}

export default AccountTable
