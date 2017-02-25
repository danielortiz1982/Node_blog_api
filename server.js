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

server.get('/about/post', (req,res)=>{
	res.send(Template.aboutPostTemplate());
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

server.post('/api/categories', (req, res)=>{
	let categories = req.body;
	Categories.addCategory(categories, (err, category)=>{
		if(err){
			throw err;
		}else{
			res.json(category);
		}
	});
});

server.put('/api/categories/:_id', (req, res)=>{
	let id = req.params._id;
	let categories = req.body;
	Categories.updateCategory(id, categories, {}, (err, category)=>{
		if(err){
			throw err;
		}
		else{
			res.json(category);
		}
	});
});

server.delete('/api/categories/:_id', (req, res)=>{
	var id = req.params._id;
	Categories.deleteCategory(id, (err, genre)=>{
		if(err){
			throw err;
		}
		else{
			res.json(genre);
		}
	})
});

server.listen(PORT, ()=>{
	return console.log('Server running on port => ' + PORT);
});