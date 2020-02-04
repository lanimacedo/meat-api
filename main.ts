import { Server } from './server/server'
import { usersRouter } from './users/users.routers'

const server = new Server()
server.bootstrap([usersRouter]).then(server=>{
    console.log('Server is listening on:', server.application.address())
}).catch(error=>{
    console.log('Server failed to start')
    console.error(error)
    process.exit(1)
})


// server.listen((3000), () => {
//     console.log('API is running on http://localhost:3000')
// })