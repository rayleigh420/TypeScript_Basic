interface User {
    name: string,
    email: string,
}

const listUser: User[] = [];

const user_1: User = {
    name: 'Karen',
    email: 'karen01@gmail.com'
}

const user_2 = {
    name: "Rayleigh",
    email: 'rayleight02@gmail.com'
}

const user_3 = {
    name: 'Vostro',
    email: 'vostro03@gmail.com',
    address: 'America'
}

listUser.push(user_1)
listUser.push(user_2) // Van co the push do co cac truong giong voi interface
listUser.push(user_3) // Van co the push do co cac truong giong voi interface

console.log(listUser)