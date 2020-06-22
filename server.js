const express = require('express');
const bodyParser = require('body-parser');
const Coupon = require('./app/models/Coupons/Coupons');
const Upload = require('./app/middlewares/fileUploadExtension');
const app = express();
const port = process.env.PORT || 5000;
const db = require('./utils/getSQLConnection');
var pan = require('validate-india').pan;
var validator = require('validator');
const { Op } = require("sequelize");
app.use(bodyParser.json());
var multer = require('multer')
var cors = require('cors');

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
  cb(null, 'public')
},
filename: function (req, file, cb) {
  cb(null, Date.now() + '-' +file.originalname )
}
})
var upload = multer({ storage: storage }).single('file')
var edit = multer({ storage: storage }).single('file')
var product_image=null;
app.post('/upload',  (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
        return res.status(500).json(err)
    } else if (err) {
        return res.status(500).json(err)
    }
 console.log(req.file)
Coupon.create({
  coupon_name:req.file.path,
  coupon_type:req.file.mimetype
 })
   .then(response => {
    return res.status(200).send("File created successfully")
   }).catch(err => {
    console.error(err);
    res.send("not found")
  
  })
})
})
app.post('/edit',  (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
        return res.status(500).json(err)
    } else if (err) {
        return res.status(500).json(err)
    }
 console.log(req.body.editid)
 Coupon.update({
  coupon_name:req.file.path,
  coupon_type:req.file.mimetype
 },
 {
 
  where: {
    coupon_id:req.body.editid
  }})
   .then(response => {
    return res.status(200).send("File edited sucesssfully ")
   }).catch(err => {
    console.error(err);
    res.send("not found")
  
  })
})
})
   
const file_reducer = function (acc, cur) {
  const new_obj = {};
  const prod = cur.dataValues;
  new_obj.name = prod.coupon_name;
  new_obj.type=prod.coupon_type;
  new_obj.id = prod.coupon_id;
  acc.push(new_obj);
  return acc;
}

 
app.get('/lists',(req,res)=>{

  Coupon.findAll()
  .then(users => {
      // console.log(users) 
  const data = users.reduce(file_reducer, []);
 
 res.send(data)
}) .catch(err => {
  console.log(err)
 
})
})
 
app.post('/delete',(req,res)=>{

 console.log(req.body.did)
 Coupon.findOne(
  {
    where: {
      coupon_id: req.body.did
    }
  }
) .then(result => {
 
  result.destroy()
    .then(response => {
      res.send("File Deleted Suceesfully")
    })
})
.catch(err => {
  console.log(err);
  res.send("Error")
 
})
 

})
app.get('/statics',(req,res)=>{
  
  var arr=[];
  Coupon.findAll()
  .then(users => {
       console.log(users) 
  const data = users.reduce(file_reducer, []);
  var img=0;
  var pdf=0;
 data.forEach(element => {
 if(element.type=='image/jpeg'){
   img=img+1;

 }
 else{
   pdf++;
 }
 });
 arr.push(img)
 arr.push(pdf)
 console.log(img)
 res.send(arr)
}) .catch(err => {
  console.log(err)
 
})
})



app.listen(port, () => {
    db.sync().then(() => {
      console.log(`App Started On Port Number: ${port}`);
  }).catch(err => {
    console.error('Unable to connect to the database:', err);
});
});