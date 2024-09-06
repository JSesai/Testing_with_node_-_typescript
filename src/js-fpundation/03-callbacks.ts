
interface User {
    id: number;
    name: string;
    email: string;
    age: number;
}

const users: User[] = [
    {
        id: 1,
        name: 'John',
        email: 'john@example.com',
        age: 30
    },
    {
        id: 2,
        name: 'Jane',
        email: 'jane@example.com',
        age: 25
    }, 
    {
        id: 3,
        name: 'Bob',
        email: 'bob@example.com',
        age: 35
    }
    
]

//funcion callback recibe un id y un callback que es una funcion esta funcion 
// obtiene un usuario por id, el callback tiene dos parametros que recibe en el return 
export const getUserById = (id: number, callback: (err?: string, user?: User) => void ) => {
    const user = users.find(user => user.id === id)
    
    if(!user){
        //se pasa en el primer parametro el error por eso aqui al no encopntrar el usuario se devuelve
        //el mensaje y como primer parametro
        return callback(`User with id ${id} not found`)
    
    }

    //si todo fue exitoso se devuelve el usuario el primer parametro como null que es el que corresponde al error
    //el segundo corresponde al usuario
    return callback(undefined, user)
    
    
    
}

