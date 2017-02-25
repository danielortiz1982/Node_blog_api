const mongoose		= require('mongoose');

// Create Mongoose Schema info
const collection = 'blog';
const DB_Name     = 'bv_blog';

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    seo_keywords: [],
    create_date: {
        type: Date,
        default: Date.now
    }
});

// Export Blog & Data Models
const Blog = module.exports = mongoose.model(DB_Name, blogSchema, collection);

// Get all Blog Post.
module.exports.getBlog = (callback, limit)=>{
    Blog.find(callback).limit(limit);
};

// Get Blog By ID
module.exports.getBlogById = (id, callback)=>{
    Blog.findById(id, callback);
};

// Add New Blog
module.exports.addBlog = (blog, callback)=>{
    Blog.create(blog, callback);
};

// Update Blog
module.exports.updateBlog = (id, blog, options, callback)=>{
    var query = {_id: id};
    var update = {
        title: blog.title,
        image_url: blog.image_url,
        content: blog.content,
        seo_keywords: blog.seo_keywords,
    };
    Blog.findOneAndUpdate(query, update, options, callback);
};

// Delete Blog
module.exports.deleteBlog = (id, callback)=>{
    var query = {_id: id};
    Blog.remove(query, callback);
};
