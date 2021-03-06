import { usersRouter } from "./users.routers"

const users = [
    {name: 'Peter Parker', email: 'peter@marvel.com'},
    {name: 'Bruce Waine', email: 'bruce@dc.com'},
]

export class User {
    static findAll(): Promise<any[]>{
    return Promise.resolve(users)
    }
}