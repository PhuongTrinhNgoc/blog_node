const Course = require('../modal/Couser'); // Make sure the model path is correct
const { mongoosObj } = require('../../util/mongoose');

class CoursesController {
    // [get] /courses/slug
    async show(req, res, next) {
        try {
            const course = await Course.findOne({ slug: req.params.slug });
            if (!course) {
                // Handle the case when no course is found
                // You might want to send a 404 response or render an error page
                return res.status(404).send('Course not found');
            }
            res.render('courses/show', { course: mongoosObj(course) });
        } catch (error) {
            // Handle the error, e.g., render an error page
            next(error);
        }
    }

    create(req, res, next) {
        res.render('courses/create');
    }

    async store(req, res, next) {
        const formData = req.body;
    
        formData.img = `https://img.youtube.com/vi/${req.body.imgId}/sddefault.jpg`;
        formData.imgId = req.body.imgId
        const course = new Course(formData);

        try {
            await course.save();
            res.send('success');
            res.redirect('/');
        } catch (error) {
            // Handle the error, e.g., render an error page
            next(error);
        }
    }
    async edit(req, res, next) {
      try {
    const couClone = await  Course.findById(req.params.id)
      res.render('courses/edit' , {couClone : mongoosObj(couClone)});
        
      } catch (error) {
        error
        
      }
  }
   async update(req, res, next) {
       await  Course.updateOne({_id:req.params.id},req.body)
      try {
        res.redirect('/me/stored/courses')
      } catch (error) {
        console.log(error);
      }

}
}

module.exports = new CoursesController;
