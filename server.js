const express		= require('express');
const server		= express();
const bodyParser	= require('body-parser');
const mongoose		= require('mongoose');
const PORT			= 5000;

// use bodyParser to parse the body
server.use(bodyParser.json());

// Database connection
mongoose.connect('mongodb://dortiz:l3inad1982@ds157499.mlab.com:57499/bv_blog');

server.get('/', (req, res)=>{

	let homeMessage	= `
		<h1><a href="https://nodejs.org/en/" target="_blank">Node.js</a> Blog API.</h1>
		<h3>API endpoints below:</h3>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/about">About API</a></li>
		</ul>
	`;

	res.send(homeMessage);
});

server.get('/about', (req, res)=>{

	let aboutMessage = `
		<h1>This is a Node.js Blog Restful API...</h1>
		<p><a href="/">Return Home</a></p>
	`;

	res.send(aboutMessage);
});

server.listen(PORT, ()=>{
	return console.log('Server running on port => ' + PORT);
});