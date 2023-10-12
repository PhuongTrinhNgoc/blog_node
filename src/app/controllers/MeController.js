const Course = require('../modal/Couser')
const { mongoosToObj } = require('../../util/mongoose')
class MeController {
    // [get] / neww
    async storedController(req, res) {
        try {
            const data = await Course.find({})
            res.render('meListCourses',{data: mongoosToObj(data)})
        }  catch (err) {
            res.status(400).json({error: err});

        }

    }
 
 
}
module.exports = new MeController