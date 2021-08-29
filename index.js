var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello DSPA Testing DevOps Node! JS Project Hello How are you ? welcome to DSPA devOps Project')
}) 

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
