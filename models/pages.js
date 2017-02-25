const mongoose		= require('mongoose');

// Create Mongoose Schema info
const collection = 'pages';

const pageSchema = new mongoose.Schema({
    page_title: {
        type: String,
        required: true
    },
    page_image_url: {
        type: String,
        required: true
    },
    page_content: {
        type: String,
        required: true
    },
    page_create_date: {
        type: Date,
        default: Date.now
    }
});

// Export Pages & Data Models
const Pages = module.exports = mongoose.model(collection, pageSchema);

// Get all Pages.
module.exports.getPages = (callback, limit)=>{
    Pages.find(callback).limit(limit);
};

// Get Page By ID
module.exports.getPageById = (id, callback)=>{
    Pages.findById(id, callback);
};

// Add New Page
module.exports.addPages = (page, callback)=>{
    Pages.create(page, callback);
};

// Update Page
module.exports.updatePage = (id, page, options, callback)=>{
    var query = {_id: id};
    var update = {
        title: page.title,
        image_url: page.image_url,
        content: page.content
    };
    Pages.findOneAndUpdate(query, update, options, callback);
};

// Delete Page
module.exports.deletePage = (id, callback)=>{
    var query = {_id: id};
    Pages.remove(query, callback);
};
