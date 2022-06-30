
function Aluno(nome, quantidadeFaltas, notas) {
  this.nome = nome
  this.quantidadeFaltas = quantidadeFaltas
  this.notas = notas
  this.calculaMedia = function () {
    let soma = 0
    for (let i = 0; i < this.notas.length; i++) {
      soma = soma + this.notas[i]
    }
    const media = soma / this.notas.length
    return media
  }
  this.faltas = function () {
    this.quantidadeFaltas += 1
    return this.quantidadeFaltas
  }
}

let DENNERSANTOS = new Aluno('DENNER SANTOS ', 10, [7, 7, 8, 9])

let BRENNERSANTOS = new Aluno('BRENNER SANTOS ', 2, [8, 9, 5, 9.9])

let DANIELESANTOS= new Aluno('Ana Catarina', 6, [10, 9.7, 3, 9.9])



console.log(AnaCarolina.calculaMedia())
console.log(AnaBeatriz.faltas())

let listaAlunos = [DENNER SANTOS , BRENNER SANTOS ,DANIELE SANTOS ]
let curso = {
  nomeDoCurso: '',
  notaDeAprovacao: 7,
  faltasMaximas: 5,
  listaAlunos: listaAlunos,
  cadastrarAluno(nome, quantidadeFaltas, notas) {
    let aluno = new Aluno(nome, quantidadeFaltas, notas)
    this.listaAlunos.push(aluno)
  },
  // percorrendo a lista
  consultarAluno(nome) {
    for (let i = 0; i < this.listaAlunos.length; i++) {
      const aluno = this.listaAlunos[i]
      if (aluno.nome === nome) {
        console.log('Aluno encontrado ' + aluno.nome)
        return aluno
      }
    }
    console.log(' ATENCAO Aluno nao encontrado')
  },
  situacaoFinal(nome) {
    let aluno = this.consultarAluno(nome)
    let media = aluno.calculaMedia()
    let situacaoFinalAluno = false
    if (
      media >= this.notaDeAprovacao &&
      aluno.quantidadeFaltas < this.faltasMaximas
    ) {
      console.log(${aluno.nome} possui a media = ${media}. Aluno Aprovado!)
      situacaoFinalAluno = true
    } else if (
      aluno.quantidadeFaltas === this.faltasMaximas &&
      media > this.notaDeAprovacao * 1.1
    ) {
      console.log(
        ${aluno.nome} esta com a media = ${media}. Numero de faltas = ${
          aluno.quantidadeFaltas
        }. Aluno Aprovado! Apesar de ter atingido o número máximo de faltas Que tem que ser Observado porque aconteceu de ${
          this.faltasMaximas
        } sua nota foi ${media / this.notaDeAprovacao}% acima da média que é ${
          this.notaDeAprovacao
        }!
      )
      situacaoFinalAluno = true
    } else {
      console.log(
        ${aluno.nome} possui media = ${media} e numero de faltas = ${aluno.quantidadeFaltas}. Aluno Reprovado
      )
    }
    return situacaoFinalAluno
  },
  listaAlunosAprovados() {
    const listaAprovados = []
    for (let i = 0; i < this.listaAlunos.length; i++) {
      const aluno = this.listaAlunos[i]
      const situacaoAluno = this.situacaoFinal(aluno.nome)
      listaAprovados.push(situacaoAluno)
    }
    return listaAprovados
  }
}
curso.cadastrarAluno('DENNER SANTOS ', 5, [7.7, 7.7, 7.6, 7.6])
curso.cadastrarAluno('BRENNER SANTOS ', 5, [7.7, 7.7, 7.8, 7.7])

// console.log(curso.listaAlunos)
// curso.consultarAluno('Ana Julia')
// curso.situacaoFinal('Ana Carolina')
console.log(curso.situacaoFinal('DENNER SANTOS '))
console.log(curso.situacaoFinal('BRENNER SANTOS'))
console.log(curso.situacaoFinal('DANIELE SANTOS'))
console.log(curso.listaAlunosAprovados())
