document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect('https://portfolio-codes.firebaseio.com/')

  //console.log(value)
  db.download('/', function(data) {
    let params = coDesExtract()
    //console.log(params)
    let value = params['key']
    let categ = MapDataBase(data)
    let categid = categ[value]
    console.log(categid)
    //console.log(value)

  //console.log(data)
    context = data['portfolio'][categid]['projetos'][value]
    console.log(context)
    coDesReplace('body',context)


 })

function MapDataBase(object) {
  map = {}
  for(let directory in object["portfolio"]) {
	   for (let project in object["portfolio"][directory]["projetos"]) {
		     map[project] = directory;
	   }
  }
  return map
  }

})
