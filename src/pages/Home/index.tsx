import React, { useState } from 'react'
import UserAccount from '../../components/ts-learning/UserAccount'

import './index.less'

export default function Index() {

    const [ user ] = useState(new UserAccount('DueTy', 123))
    const [list, setList] = useState<UserAccount[]>([])
    const [searchKey, setSearchKey] = useState('')

    return (
        <div>
            <div style={{ marginTop: 10 }}>
                <input type="text" placeholder="搜索" value={searchKey} />
                <button 
                    onChange={handleSearchKeyChange}
                    onClick={handleSearchClick} 
                    style={{ marginLeft: 10 }}>搜索</button>
            </div>
            <h1 
                className="main-user"
                onClick={handleFirstClick}>
                {user.name}-{user.id}
            </h1>
            {list.map((item, index) => (
            <h1 key={index}>{item.name}-{item.id}</h1>
            ))}
        </div>
    )

    function handleSearchKeyChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchKey(e.target.value)
    }
    
    function handleFirstClick() {
        const lastId = list[list.length - 1] ? list[list.length - 1].id : user.id
        setList([ ...list, new UserAccount('DueTy', lastId + 1)])
    }

    function handleSearchClick() {
        console.log(searchKey);
        
    }

    function getUserById(id:number): UserAccount {
        const foundUser = list.find(u => u.id === id) || new UserAccount('DueTy', id)
        return foundUser
    }
}