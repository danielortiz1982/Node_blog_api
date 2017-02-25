const mongoose		= require('mongoose');

// Create Mongoose Schema
const categorySchema = mongoose.Schema({
   name: {
       type: String,
       required: true
   },
    create_date: {
        type: Date,
        default: Date.now
    }
});

// Export Categories & Data Models
const Categories = module.exports = mongoose.model('categories', categorySchema);

// Get all Categories.
module.exports.getCategories = (callback, limit)=>{
    Categories.find(callback).limit(limit);
};

// Add new Category
module.exports.addCategory = (category, callback)=>{
    Categories.create(category, callback);
};

// Update Category
module.exports.updateCategory = (id, category, options, callback)=>{
    var query = {_id: id};
    var update = {
        name: category.name
    };
    Categories.findOneAndUpdate(query, update, options, callback);
};

// Delete Category
module.exports.deleteCategory = (id, callback)=>{
    var query = {_id: id};
    Categories.remove(query, callback);
};
