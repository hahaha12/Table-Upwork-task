import React, { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import functions from '../../api/AccountAPI'
import AccountHeader from './AccountHeader'
import AccountTable from './AccountTable'
import AccountMenu from './AccountMenuMobile'



const MainAccount = () => {
    const [isData, setIsData] = useState(true)
    const {
        getMainAccountsByUserId,
        getPendingAccountsByUserId,
        getMainBalanceByUserId,
        getPendingBalanceByUserId,
    } = functions

    const handlers = useSwipeable({
        onSwipedLeft: () => setIsData(false),
        onSwipedRight: () => setIsData(true)
    })

    const myRef = React.useRef()
    const refPassthrough = (el) => {
        handlers.ref(el);
        myRef.current = el;
    }

    return (
        <div  {...handlers} ref={refPassthrough}>
            <AccountMenu
                setIsData={setIsData}
                isData={isData}
            />
            <AccountHeader
                data={() => [getMainBalanceByUserId(), getPendingBalanceByUserId()]}
            />
            <AccountTable
                data={() => [getMainAccountsByUserId(), getPendingAccountsByUserId()]}
                isData={isData}
            />
        </div>
    )
}

export default MainAccount
