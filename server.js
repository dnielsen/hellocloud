// adapted from http://nodejs.org/api/synopsis.html

http = require("http")
cfenv = require("cfenv")

// get environmental information for this app
appEnv   = cfenv.getAppEnv()
instances = appEnv.app.instance_index || 0

// create a server with a simple request handler
server = http.createServer(onRequest)

// start the server on the calculated port and host
server.listen(appEnv.port, function() {
    console.log("server starting on " + appEnv.url)
})

//-----------------------------------------------
function onRequest(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"})

  response.write("<html><body><h1>Hello Cloud App</h1>")
  response.write("<h2>Instance ID: [" + instances + "]</h2></body></html>")
  response.end()
}
