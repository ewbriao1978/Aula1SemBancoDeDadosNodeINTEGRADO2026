const user = {
  name: 'first',
  user: 'example',
  password: '12345'
}

const dataSalario = {
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


async function saveSalario(req, res) {
    const   { salario }= req.body;
    dataSalario.salario = salario; // Atualiza o salário com o valor recebido no corpo da requisição
    return res.status(200).json({ message: 'Salário atualizado com sucesso', salario: dataSalario.salario });
}

async function getUser(req, res) {
    return res.status(200).json(user);
}


async function saveUser(req,res) {
    const { name, user, password } = req.body;
    user.name = name;
    user.user = user;
    user.password = password;
    return res.status(200).json({ message: 'Usuário atualizado com sucesso', user });
}

module.exports = { 
    getSalario, 
    getSalarioLiquido, 
    saveSalario, 
    getUser,
    saveUser
};