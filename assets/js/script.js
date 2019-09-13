/*
  É muito importante que todo seu código fique dentro deste
  document.addEventListener, pois isso garante que ele vai
  rodar apenas quando toda a página estiver carregada. Isso
  foi explicado no Material Prévio de JavaScript da Aula 9.
*/
document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']
  /*
    A função coDesConnect cria uma conexão com o Firebase.
  */
  let db = coDesConnect('https://portfolio-codes.firebaseio.com/')

  /*
    O método download recebe dois parâmetros. O primeiro é
    o caminho até o dado específico que vocề deseja baixar.
    Reveja os slides para entender como caminhos funcionam.

    O segundo é uma função que deve ser chamada quando o
    dado terminar de ser baixado. Essa função recebe um
    parâmetro que é justamente o dado.

    ATENÇÃO: NÃO CHAME ESSE MÉTODO MAIS QUE UMA VEZ. NÃO
    É NECESSÁRIO E PODE CAUSAR PROBLEMAS DE SINCRONIZAÇÃO.
  */
  db.download('/', function(data) {
    //coDesReplace('.projeto', data)

    console.log(value)
  /*
    Uma query string é um dicionário armazenado no próprio
    endereço da página. O início dela é marcado por um "?"
    e ela consiste em um número indeterminado de pares da
    forma "chave=valor", separados por "&". Isso acabou de
    ser explicado nos slides.

    A função coDesReplace recebe dois parâmetros. O primeiro
    é um seletor para localizar algum elemento da página. No
    exemplo abaixo, usamos ".main" para localizar o elemento
    cuja classe é "main". Não esqueça que é como no CSS: os
    nomes de classes devem começar com ponto.

    O segundo é um dicionário cujas chaves são palavras que
    estão entre {{ e }} nesse elemento e cujos valores são os
    textos que devem substituir essas ocorrências de {{}}.
  */
    context = data['portfolio'][value]
    console.log(context)
    coDesReplace('title',context)

    context = data['portfolio'][value]
    coDesReplace('.container-aluno-text-name', context)

    context = data['portfolio'][value]
    console.log(context)
    coDesReplace('.projeto', context)
  })
})
