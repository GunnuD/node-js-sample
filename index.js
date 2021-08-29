var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello DSPA, Dear Seema , This is Testing DevOps Node! JS Project , Hello ,Aarti Rajput How are you ? welcome to Pooja Rajpoot  devOps Project---Thanks DSPA cloud technology')
}) 

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
