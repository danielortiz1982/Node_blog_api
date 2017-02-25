const mongoose		= require('mongoose');

// Create Mongoose Schema
const blogSchema = mongoose.Schema({
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
const Blog = module.exports = mongoose.model('bv_blog', blogSchema, 'blog');

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
        name: blog.title
    };
    Blog.findOneAndUpdate(query, update, options, callback);
};

// Delete Blog
module.exports.deleteBlog = (id, callback)=>{
    var query = {_id: id};
    Blog.remove(query, callback);
};
