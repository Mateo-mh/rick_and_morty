const validate = (userData) => {
    let errors = {};

    if(!/\S+@\S+\.\S+/.test(userData.email)){
        errors.email = 'El email es invalido'
    }

    if(!userData.email){
        errors.email = 'Este campo no puede estar vació'
    }

    if(userData.email.length > 35){
        errors.email = 'Este campo no puede tener mas de 35 caracteres'
    }

    if(!userData.password.match(/\d/)){
        errors.password = 'La contraseña tiene que tener al menos un número'
    }

    if(userData.password.length < 6 || userData.password.length > 10 ){
        errors.password = 'La contraseña tiene que tener una longitud entre 6 y 10 caracteres'
    }

    return errors;
};
export default validate