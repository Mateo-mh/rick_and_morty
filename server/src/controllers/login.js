const { User } = require('../DB_connection')

const login = async (req,res) => {
    try {
        const { email, password } = req.query
        if( !email || !password ) return res.status(400).send('Faltan datos')
    
        const user = await User.findOne({
            where: {
                email: email
            }
        }) 

        if(!user) return res.status(404).send('Usuario no encontrado')
    } catch (error) {
        
    }
}

module.exports = login;
