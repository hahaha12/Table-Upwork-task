import React, { useState, useEffect } from 'react'

const AccountHeader = ({ data }) => {

    const [getMainBalanceByUserId, getPendingBalanceByUserId] = data()

    const [pending, setPending] = useState({})
    const [balance, setBalance] = useState({})

    useEffect(() => {
        getPendingBalanceByUserId.then(res => setPending(res))
        getMainBalanceByUserId.then(res => setBalance(res))
    }, [])

    return (
        <div className='m-2'>
            <div className='ml-2 mb-4 LatinKaBoldItalic'>
                Account Summary
            </div>
            <div className='w-11/12'>
                <div className=' m-2 w-full flex jus justify-between'>
                    <div className='ml-6'>
                        Balance
                    </div>
                    <div className='ml-9'>
                        {balance.currency + ' ' + balance.balance}
                    </div>
                </div>
                <div className=' m-2 w-full flex jus justify-between'>
                    <div className='ml-6'>
                        Pending
                    </div>
                    <div className='ml-9'>
                        {pending.currency + ' ' + pending.balance}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountHeader
