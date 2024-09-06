//? factory function es una funcion que crea una funcion 
// const { getAge } = require('../plugins/get-age.plugin')
// const { createUUID } = require('../plugins/get-id.plugin')
// const { getAge, createUUID } = require('../plugins')

interface buildMakePerson {
    createUUID: () => string
    getAge: (birthdate: string) => number
}

interface personOptions {
    name: string
    birthdate: string
}

export const buildMakePerson = ({ createUUID, getAge } : buildMakePerson) => {
    return ({ name, birthdate }: personOptions) => {


        return {
            id: createUUID(),
            name,
            birthdate,
            age: getAge(birthdate)

        }
    }
}

// const buildPerson = ({name, birthdate}) => {
    
    
//     return {
//         id: createUUID(),
//         name,
//         birthdate,
//         age: getAge(birthdate)

//     }
// }


// const obj = {name: 'John', birthdate: '1989-12-22'}
// console.log(buildPerson(obj))


