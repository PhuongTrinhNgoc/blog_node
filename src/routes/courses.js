const express = require('express');
const route = express.Router();
const CoursesController = require('../app/controllers/CoursesController')

// newsController.index
route.get('/create',CoursesController.create)
route.post('/store',CoursesController.store)
route.get('/:id/edit',CoursesController.edit)
route.put('/:id',CoursesController.update)
route.get('/:slug',CoursesController.show)


module.exports = route;
