function alunos(nome, qtFaltas, notas) {
    return {
        nome: nome,
        qtFaltas: qtFaltas,
        notas: notas,
        calcularMedia() {
            let media = 0;
            for (let i = 0; i < this.notas.length; i++) {
                media += this.notas[i];
            }
            return media / this.notas.length;
        },
        faltas() {
            this.qtFaltas += 1;
        },
    };
}


let Aluno1 = new Aluno("DENENR PEREIRA SANTOS ", 0, [100, 100, 100]);
let Aluno2 = new Aluno("BRENNER santos ", 5, [100, 100, 100]);
let Aluno3 = new Aluno("Daniele", 10, [90, 95, 80]);
let Aluno4 = new Aluno("Danilo pereira ", 4, [100, 70, 90]);
let Aluno5 = new Aluno("BRENDA PEREIRA ", 6, [90, 30, 40]);
let Aluno6 = new Aluno("DENILSON SANTOS ", 6, [0, 0, 0]);



let aluno0 = new alunos('DENNER PEREIRA SANTOS ', 2, [10, 7, 8, 3]);
let aluno1 = new alunos('BRENNER SANTOS ', 1, [8, 10, 7, 4]);
let aluno2 = new alunos('DANIELE SANTOS ', 1, [0, 5, 0, 9]);
let aluno3 = new alunos('DANILO PEREIRA', 0, [9, 6, 10, 9]);
let aluno4 = new alunos('BRENDA PEREIRA ', 4, [7, 7, 9, 8]);
let Aluno6 = new Alunos("DENILSON SANTOS ", 6, [0, 0, 0]);
console.log( 
             `Atenção O seguinte aluno : ${aluno1.nome} Em nossas, Nas Avaliações ${aluno1.qtFaltas} faltas, 
              e recebeu as seguintes notas:${aluno1.notas}. Sua média final é de: ${aluno1.calcularMedia()}`)

let curso = {
    nomeCurso: 'Digitalhouse',
    notaAprovacao: 7,
    maximoDeFaltas: 4,
    listaAlunos: [aluno0, aluno1, aluno2, aluno3, aluno4],

    cadastrarAluno(aluno) {
        this.listaAlunos.push(aluno);
    },
    aprovado(nomeAluno) {
        
        if (nomeAluno > this.listaAlunos.length - 1) {
            return 'Aluno não cadastrado'
        }

        let aluno = this.listaAlunos[nomeAluno];
        
        if (aluno.qtFaltas < this.maximoDeFaltas && aluno.calcularMedia() >= this.notaAprovacao 
        || aluno.calcularMedia() >= this.notaAprovacao * 1.1){
            return true
        } else {
            return false
        }
    },
    alunosAprovados() {
        let aprovados = [];
        for (let i = 0; i < this.listaAlunos.length; i++) {
            aprovados.push(this.aprovado(i));
        }
        return aprovados;
    },
};


let aluno5 = new alunos('DENNER SANTOS ', 2, [6, 8, 6, 5]);
let aluno6 = new alunos('BRENDA PEREIRA', 2, [6, 8, 6, 5]);
curso.cadastrarAluno(aluno5);






console.log(curso.listaAlunos[1].nome);
console.log(curso.aprovado(1));

console.log(curso.listaAlunos[4].nome);
 console.log(curso.aprovado(4));

console.log(curso.listaAlunos[5].nome);
console.log(curso.aprovado(7));

console.log(curso.alunosAprovados());