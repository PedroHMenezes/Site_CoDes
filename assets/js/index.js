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
    coDesReplace('.projeto', data)

    console.log(value)
 })
})
