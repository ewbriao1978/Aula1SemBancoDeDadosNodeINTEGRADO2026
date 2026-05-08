


const bcrypt = require('bcrypt');
const saltRounds = 10; // Recommended minimum is 10-12


let userdata = {
  name: 'first',
  user: 'example',
  password: '12345'
}

 var dataSalario = {
  salario: 1000
}

async function getSalario(req, res) {
    return res.status(200).json(dataSalario);
}

async function getSalarioLiquido(req, res) {
    const salarioLiquido = dataSalario.salario - dataSalario.salario * 0.27; // Exemplo de cálculo de salário líquido
    return res.status(200).json(
        { 
            "salarioLiquido": salarioLiquido
        }
    );
}


 function saveSalario(req, res) {
    const   { salario }= req.body;
    dataSalario.salario = salario; // Atualiza o salário com o valor recebido no corpo da requisição
    return res.status(200).json({ message: 'Salário atualizado com sucesso', salario: dataSalario.salario });
}

async function getUser(req, res) {
    return res.status(200).json(userdata);
}


async function saveUser(req,res) {
    const { name, user, password } = req.body;
    userdata.name = name;
    userdata.user = user;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    userdata.password = hashedPassword;
    return res.status(200).json({ message: 'Usuário atualizado com sucesso', user: userdata });
}

module.exports = { 
    getSalario, 
    getSalarioLiquido, 
    saveSalario, 
    getUser,
    saveUser
};