const http = require('http')

function getTime (currentTime) {
  return {
    hour: currentTime.getHours(),
    minute: currentTime.getMinutes(),
    second: currentTime.getSeconds()
  }
}

const server = http.createServer(function (req, res) {

  const urlToGetTime = new URL(req.url, 'http://google.fr') // On attribue à req une URL random, ici Google
  const currentTime = new Date(urlToGetTime.searchParams.get('iso')) // On récupère la date en format ISO depuis l'URL
  let result = getTime(currentTime) // On récupère l'heure courante
  
  res.writeHead(200)
  res.end(JSON.stringify(result))
  
})
server.listen(Number(process.argv[2]))
