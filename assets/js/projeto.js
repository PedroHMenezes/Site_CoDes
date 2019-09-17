document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect('https://portfolio-codes.firebaseio.com/')

  //console.log(value)
  db.download('/', function(data) {
    let params = coDesExtract()
    //console.log(params)
    let value = params['key']
    let categ = params['category']
    console.log(categ)
    console.log(value)

    context = data['portfolio'][categ]['projetos'][value]
    console.log(context)
    coDesReplace('body',context)


 })
})
