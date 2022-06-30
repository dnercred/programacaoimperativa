/*Passo1-Crie uma função construtora que tenha como atributos: nome (string), quantidade de faltas (number)
 e notas (array de números). */
 

 function Aluno (nome, qtfaltas, notas) {
    this.nome = nome;
    this.qtfaltas = qtfaltas;
    this.notas = notas;
  }


 /*Passo2-Na função construtora crie o método calcularMedia que retorna a média de suas notas. 
  Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1.
   Crie alguns alunos para testar a sua função construtora. */

let Aluno1 = new Aluno("DENENR PEREIRA SANTOS ", 0, [100, 100, 100]);
let Aluno2 = new Aluno("BRENNER santos ", 5, [100, 100, 100]);
let Aluno3 = new Aluno("Daniele", 10, [90, 95, 80]);
let Aluno4 = new Aluno("Danilo pereira ", 4, [100, 70, 90]);
let Aluno5 = new Aluno("BRENDA PEREIRA ", 6, [90, 30, 40]);
let Aluno6 = new Aluno("DENILSON SANTOS ", 6, [0, 0, 0]);

//reduzindo o array
let listaAlunos = [Aluno1, Aluno2, Aluno3, Aluno4, Aluno5,Aluno6];

const medias = [];
for (const Aluno of listaAlunos) {
  let soma = 0;
  for (const nota of Aluno.notas) {
      soma += nota;
  }
  medias.push({Nome: Aluno.nome, Média: soma / Aluno.notas.length });
}




/*Passo3-Crie o objeto literal curso que tem como atributos: 
nome do curso (string),
 nota de aprovação (number), 
 faltas máximas (number) 
 e uma lista de estudantes (um array composto pelos alunos criados no passo 2).*/

 /*let curso = {
  nomeCurso: "DH",
  notaAprovacao:0,
  faltasMaximas:0,
  estudantes:listaAlunos,
 
}*/

/*Passo4-Crie o método que permite adicionar alunos à lista do curso, ou seja, 
quando chamamos nosso método em nosso objeto curso, deverá adicionar um Aluno a mais 
na propriedade lista de estudantes do objeto curso.*/

let curso = {
  nomeCurso: "DH",
  notaAprovacao:70,
  faltasMaximas:20,
  alunos:listaAlunos,
  cadastrarAluno(nome, qtfaltas, notas){
    let aluno = new Aluno(nome, qtfaltas, notas);
    this.alunos.push(aluno);
  },

  consultarAluno(nome){
    for(let i = 0;i < this.alunos.length;i++){
      const aluno = this.alunos[i];
      if(aluno.nome === nome){
        console.log("O método para cadastro de aluno funcionou, tanto é que estamos retornando o seu nome!!! ",aluno);
        return aluno;
      }
    }
  },

  /*Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true
   se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que
    ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. 
    Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.*/
    alunoAprovado(nome,notaAprovacao,faltasMaximas) {
   
      for(let i = 0;i < this.alunos.length;i++){
        const aluno = this.alunos[i]
        if(notaAprovacao>=70 && faltasMaximas<=20){
           console.log("aprovado")
           }else{
            console.log("reprovado")
           }
      }
    } 
  }

  curso.cadastrarAluno('DENNER ', 0, [100,100,100]);
  curso.consultarAluno('BRENNER');
  curso.alunoAprovado('DANILO')



  





  
 
