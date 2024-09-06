//patron adaptador
//es un patron que su objetivo es que sea facil el adaptar cambios en el codigo.
// en este ejemplo se realiza el pátron adaptador para poder cambiar la dependencia de la 
// libreria getAge que calcula la edad en base a una fecha
// supon que se requiere hacer un cambio por x motivo y ya no se usara mas la libreria
//si no se usara este patron de arquitectura, seria muy talachudo hacer el cambio en todos
// los lugares en donde se usa, pero con el uso del patron adaptador se realiza de manera eficiente
// haciendo que el codigo se pueda cambiar de manera sencilla




export const getAge = (birthdate: string) => {

    return new Date().getFullYear() - new Date(birthdate).getFullYear();
}

