"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
const users_routers_1 = require("./users/users.routers");
const server = new server_1.Server();
server.bootstrap([users_routers_1.usersRouter]).then(server => {
    console.log('Server is listening on:', server.application.address());
}).catch(error => {
    console.log('Server failed to start');
    console.error(error);
    process.exit(1);
});
// server.listen((3000), () => {
//     console.log('API is running on http://localhost:3000')
// })
