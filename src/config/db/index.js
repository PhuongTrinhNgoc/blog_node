const mongoose = require('mongoose');
async function conect(){
    try {
    await mongoose.connect('mongodb://127.0.0.1/phuong_blog_dev');
        console.log('succsess');
    } catch (error) {
        console.log('succsess err');
        
    }
}
module.exports = {conect}