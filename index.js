//config
const express = require('express')
const path = require('path')

const app = express()


//paths
app.get('/', (req, res) => {
	res.send('Hello')
})

app.get('/data', (req, res) => {
	res.json({
		"name":"Tony",
		"colors": [
			"red", "black", "white"
		]
	})
})
//Static Files


//serve every file inside 'client' folder as static
app.use(express.static(path.join(__dirname, 'client')))



app.get('/markethome', (req, res) => {
	res.sendFile(path.join(__dirname,'/client/markethome.html'))
})



app.listen(3000, () => {
	console.log('server listening on port 3000');
})
