import React, { useState } from 'react'
import UserAccount from '../../components/ts-learning/UserAccount'

import './index.less'

export default function Index() {

    const [ user ] = useState(new UserAccount('DueTy', 123))
    const [list, setList] = useState<UserAccount[]>([])

    return (
        <div>
            <div 
                className="main-user"
                onClick={handleFirstClick}>
                {user.name}-{user.id}
            </div>
            {list.map((item, index) => (
            <div key={index}>{item.name}-{item.id}</div>
            ))}
        </div>
    )
    
    function handleFirstClick() {
        setList([ ...list, new UserAccount('DueTy', user.id + 1)])
    }
}