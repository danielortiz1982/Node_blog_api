/////////////////////////////////////////////////////////////////////////// Application Dependency ///////////////////////////////////////////////////////////////////////////

const express		= require('express');
const server		= express();
const bodyParser	= require('body-parser');
const mongoose		= require('mongoose');
const Categories	= require('./models/categories');
const Blog			= require('./models/blog');
const Template		= require('./template/template');
const PORT			= 5000;
const DB			= 'mongodb://localhost/bv_blog';

/////////////////////////////////////////////////////////////////////////// Middleware ///////////////////////////////////////////////////////////////////////////

// use bodyParser to parse the body
server.use(bodyParser.json());

// Database Connection
mongoose.connect(DB);

/////////////////////////////////////////////////////////////////////////// Application Pages ///////////////////////////////////////////////////////////////////////////

server.get('/', (req, res)=>{
	res.send(Template.homeTemplate());
});

server.get('/about', (req, res)=>{
	res.send(Template.aboutTemplate());
});

server.get('/about/post', (req,res)=>{
	res.send(Template.aboutPostTemplate());
});

/////////////////////////////////////////////////////////////////////////// Categories API ///////////////////////////////////////////////////////////////////////////

server.get('/api/categories', (req, res)=>{
	Categories.getCategories((err, categories)=>{
		if(err){
			throw err;
		}else {
			res.json(categories);
		}
	});
});

server.get('/api/categories/:_id', (req, res)=>{

	Categories.getCategoryById(req.params._id, (err, category)=>{
		if(err){
			throw err;
		}
		else{
			res.json(category);
		}
	})
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

/////////////////////////////////////////////////////////////////////////// Blog API ///////////////////////////////////////////////////////////////////////////

server.get('/api/blog', (req, res)=>{
	Blog.getBlog((err, blog)=>{
		if(err){
			throw err;
		}else {
			res.json(blog);
		}
	});
});

server.get('/api/blog/:_id', (req, res)=>{

	Blog.getBlogById(req.params._id, (err, blog)=>{
		if(err){
			throw err;
		}
		else{
			res.json(blog);
		}
	})
});

server.post('/api/blog', (req, res)=>{
	let blog = req.body;
	Blog.addBlog(blog, (err, blog)=>{
		if(err){
			throw err;
		}else{
			res.json(blog);
		}
	});
});

server.put('/api/blog/:_id', (req, res)=>{
	let id = req.params._id;
	let blog = req.body;
	Blog.updateBlog(id, blog, {}, (err, blog)=>{
		if(err){
			throw err;
		}
		else{
			res.json(blog);
		}
	});
});

server.delete('/api/blog/:_id', (req, res)=>{
	var id = req.params._id;
	Blog.deleteBlog(id, (err, blog)=>{
		if(err){
			throw err;
		}
		else{
			res.json(blog);
		}
	})
});

/////////////////////////////////////////////////////////////////////////// init server listing on PORT ///////////////////////////////////////////////////////////////////////////

server.listen(PORT, ()=>{
	return console.log('Server running on port => ' + PORT);
});