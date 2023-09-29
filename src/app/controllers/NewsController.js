class NewsController {
    // [get] / neww
    index(req,res){
        res.render('news')
    }
    show(req,res){
        res.send('phjh')
    }
 
}
module.exports = new NewsController