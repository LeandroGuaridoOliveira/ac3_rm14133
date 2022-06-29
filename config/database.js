//importar o mongoose
const mongoose = require('mongoose')
//scripts de conexão
const conn = async()=>{
    const atlas = await mongoose.connect('mongodb+srv://UserAdmin:14133@ac1-2tri.xb0bm.mongodb.net/test')
}

//exportar as infomações para acesso externo
module.exports = conn 
