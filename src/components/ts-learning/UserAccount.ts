interface User {
    name: string
    id: number
}

class UserAccount implements User {
    name: string
    id: number

    constructor(name: string, id: number) {
        this.name = name
        this.id = id
    }
}

export default UserAccount