const Course = require('../modal/Couser')
class SiteController {
    // [get] / neww
    async index(req, res) {
        try {
            const data = await Course.find({});
            res.json(data);
        }  catch (err) {
            res.status(400).json({error: err});

        }

    }
    search(req,res){
        res.render('search')
    }
 
 
}
module.exports = new SiteController