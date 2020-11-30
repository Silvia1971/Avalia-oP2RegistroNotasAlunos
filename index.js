var aluno  = [];

function Aluno(id, nome, n1, n2,n3) {
    this.id = id;
    this.nome = nome;
    this.n1 = n1;
    this.n2 = n2;
    this.n3 = n3;
    this.notafinal = function() {
        var nTotal = parseFloat(this.n1) + parseFloat(this.n2) + parseFloat(this.n3);
        var media = parseFloat(nTotal)/3;
        return media;
    };
    this.Resultado = function(){
        if (this.notafinal() > 5)
        {
            return "APROVADO";
        }
        else
        {
            return "EXAME";
        }
    };
}

function adiciona() 
{
    var id = document.getElementById("id");
    var nome = document.getElementById("nome");
    var n1 = document.getElementById("n1");
    var n2 = document.getElementById("n2");
    var n3 = document.getElementById("n3");
    var erro = document.getElementById("erro");

    if (id.value == "") {
        erro.innerHTML = 'ID é obrigatório';
        id.focus();
        return false;
    }
    if (nome.value == "") {
        erro.innerHTML = 'Nome é obrigatório';
        nome.focus();
        return false;
    }
    if (n1.value == "") {
        erro.innerHTML = 'Nota 1 é obrigatório';
        n1.focus();
        return false;
    }
    if(!(parseFloat(n1.value) >= 0 && parseFloat(n1.value) <= 10))
    {
        erro.innerHTML = 'Nota 1 tem de estar entre 0 e 10';
        n1.focus();
        return false;
    }
    if (n2.value == "") {
        erro.innerHTML = 'Nota 2 é obrigatório';
        n2.focus();
        return false;
    }

    if(!(parseFloat(n2.value) >= 0 && parseFloat(n2.value) <= 10))
    {
        erro.innerHTML = 'Nota 2 tem de estar entre 0 e 10';
        n2.focus();
        return false;
    }

    if (n3.value == "") {
        erro.innerHTML = 'Nota 3 é obrigatório';
        n3.focus();
        return false;
    }    
    
    if(!(parseFloat(n3.value) >= 0 && parseFloat(n3.value) <= 10))
    {
        erro.innerHTML = 'Nota 3 tem de estar entre 0 e 10';
        n3.focus();
        return false;
    }
    
    var aluno1 = new Aluno(id.value, nome.value,n1.value,n2.value,n3.value);

    aluno.push(aluno1);
    
    mostrar();
    limparTxt();    

    alert("Aluno e Notas Inseridos com Sucesso");
}

function mostrar()
{
    var tabela = document.getElementById("tabela");
    var media = 0;
    var tamanho = aluno.length;
    var celula="";
    var text = "";
    text= '<table class="table table-bordered table-dark">';
    text+='<thead>';
    text+='<tr>';
    text+='<th scope="col">ID</th>';
    text+='<th scope="col">NOME</th>';
    text+='<th scope="col">NOTA 1</th>';
    text+='<th scope="col">NOTA 2</th>';
    text+='<th scope="col">NOTA 3</th>';
    text+='<th scope="col">MÉDIA</th>';
    text+='<th scope="col">SITUAÇÃO</th>';
    text+='</tr>';
    text+='</thead>';
    text+='<tbody>';

    aluno.forEach(function (it)
    {
        celula = "";
        celula += "<td>" + it.id + "</td>";
        celula += "<td>" + it.nome + "</td>";
        celula += "<td>" + it.n1 + "</td>";
        celula += "<td>" + it.n2 + "</td>";
        celula += "<td>" + it.n3 + "</td>";
        celula += "<td>" + it.notafinal() + "</td>";
        celula += "<td>" + it.Resultado() + "</td>";

        text+= '<tr>';   
        text+= celula;
        text+= '</tr>';
    });    
    
    text+= '</tbody>';
    text+= '</table>';
    tabela.innerHTML = text;
}

function apagar()
{
    aluno.pop();
    mostrar();
    limparTxt();
}

function limpar()
{
    aluno = [];
    mostrar();
    limparTxt();
}

function limparTxt()
{
    var id = document.getElementById("id");
    var nome = document.getElementById("nome");
    var n1 = document.getElementById("n1");
    var n2 = document.getElementById("n2");
    var n3 = document.getElementById("n3");

    id.value = "";
    nome.value = "";
    n1.value = "";
    n2.value = "";
    n3.value = "";
}