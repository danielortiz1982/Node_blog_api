const mongoose		= require('mongoose');

const categoryShcema = mongoose.Schema({
   name: {
       type: String,
       required: true
   },
    create_date: {
        type: Date,
        default: Date.now
    }
});

const Categories = module.exports = mongoose.model('categories', categoryShcema);

module.exports.getCategories = (callback, limit)=>{

    Categories.find(callback).limit(limit);
};