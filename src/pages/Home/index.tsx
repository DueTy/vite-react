import React, { useState } from 'react'
import UserAccount from '../../components/UserAccount/UserAccount'

import './index.less'

export default function Index() {

    const [ user ] = useState(new UserAccount('DueTy', 123))
    const [list, setList] = useState<UserAccount[]>([])
    const [searchKey, setSearchKey] = useState('')

    return (
        <div>
            <input type="text" value={searchKey} onChange={handleSearch} />
            <h2 
                className="main-user"
                onClick={handleFirstClick}>
                {user.name}-{user.id}
            </h2>
            {list.map((item, index) => (
            <h2 key={index}>{item.name}-{item.id}</h2>
            ))}
        </div>
    )

    function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
        const id = e.target.value
        setSearchKey(id)
        const hasMemeber = getUserById(Number(id))
        console.log('列表中有该成员嘛？ ', !!hasMemeber)
    }

    function getUserById(id:number){
        const userFound = list.find(u => u.id === id)
        return userFound
    }
    
    function handleFirstClick() {
        const lastOneId = list[list.length - 1] ? list[list.length - 1].id : user.id
        setList([ ...list, new UserAccount('DueTy', lastOneId + 1)])
    }
}