const express = require('express');
const app =express()
const portt = 3000
app.get('/',(req,res)=> res.send('heelo puhuong hihh '))
app.listen(portt,()=> console.log(`listening on port ${portt}`))