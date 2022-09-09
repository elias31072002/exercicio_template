/*
Exemplo simples de projeto com uma estrutura
de diretórios organizada.
Autor: Fabrício G. M. de Carvalho, Ph.D
*/

/* importando o express */
const express = require('express')
const app = express();
const port = 5000;

/* importando o modelo */
const modelo = require('./models/modelos');
var Projeto = modelo.Projeto; //Vinculação de tipo
var Usuario = modelo.Usuario;



/* Configurando a template engine. */
app.set('view engine', 'ejs');
app.set('views', './views');

/* Configurando o diretório que serve arquivos estáticos.*/
app.use(express.static('public'));

app.get('/', PersonalInfo);

app.get('/meusprojetos', listProjectHandler)

app.listen(port, listenHandler);

function PersonalInfo(req, res){

    res.render('mostrar_informacoes.ejs')
}

function listProjectHandler(req, res){
    /* Os dados a seguir, em uma aplicação real, deveriam vir de um BD */
    let projeto_1 = new Projeto("RoyaltyDev", "Python", "2020-2", "2020-2"); 
    let projeto_2 = new Projeto("ProjetoGSW", "Python", "2021-1", "2021-1");
    let projeto_3 = new Projeto("ProjetoNESS", "Python", "2021-2", "2021-2");    
    let projetos = [];
    projetos.push(projeto_1);
    projetos.push(projeto_2);
    projetos.push(projeto_3);
    res.render('listar_projetos.ejs',{lista_projetos: projetos});    
}

function PersonalInfo(req, res){
    let aboutMe = new Usuario("Elias Ferreira de Faria", "20", "Python, HTML e CSS", "Análise e Desenvolvimento de Sistemas - FATEC Jessen Vidal", "elias.faria@fatec.sp.gov.br");
    let aboutMeList = [];
    aboutMeList.push(aboutMe);
    res.render('mostrar_informacoes.ejs', {list_aboutMe: aboutMeList})
}

function listenHandler(){
    console.log(`Escutando na porta ${port}!`);
}