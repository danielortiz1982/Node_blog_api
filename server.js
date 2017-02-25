const express		= require('express');
const server		= express();
const bodyParser	= require('body-parser');
const mongoose		= require('mongoose');
const Categories	= require('./models/categories');
const Template		= require('./template/template');
const PORT			= 5000;

// use bodyParser to parse the body
server.use(bodyParser.json());

// Database connection
mongoose.connect('mongodb://localhost/bv_blog');

server.get('/', (req, res)=>{
	res.send(Template.homeTemplate());
});

server.get('/about', (req, res)=>{
	res.send(Template.aboutTemplate());
});

server.get('/api/categories', (req, res)=>{
	Categories.getCategories((err, categories)=>{
		if(err){
			throw err;
		}else {
			res.json(categories);
		}
	});
});

server.listen(PORT, ()=>{
	return console.log('Server running on port => ' + PORT);
});