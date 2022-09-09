class Projeto{
    constructor(nomeProject, tecnologia, inicio, fim){
        this.nomeProject = nomeProject;
        this.tecnologia = tecnologia;
        this.inicio = inicio;
        this.fim = fim;

    }
}

class Usuario{
    constructor(nome, idade, tecnologias, escolar, contato){
        this.nome = nome;
        this.idade = idade;
        this.tecnologias = tecnologias;
        this.escolar = escolar;
        this.contato = contato;
    }
}

module.exports = {
    Projeto: Projeto,
    Usuario: Usuario
}  





