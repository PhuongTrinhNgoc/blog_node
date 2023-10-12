module.exports={
    mongoosToObj:  function  (mongooses){
        return mongooses.map(mongooes => mongooes.toObject())
    },
    mongoosObj:  function  (mongooses){
        return mongooses ? mongooses.toObject() : mongooses
    }
}