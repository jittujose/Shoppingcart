var express = require('express');
const productHelpers = require('../helpers/product-helpers');
var router = express.Router();
var productHelper=require('../helpers/product-helpers')

/* GET users listing. */
router.get('/', function(req, res, next) {

  let products=[
    {
      name:"IPHONE 11 ",
      category:'Mobile',
      description:"This is a good phone",
      image:"https://kddi-h.assetsadobe3.com/is/image/content/dam/au-com/mobile/mb_img_25.jpg?scl=1"

    },
    {
      name:"IPHONE 10 ",
      category:'Mobile',
      description:"This is a Pwolli phone",
      image:"https://m.media-amazon.com/images/I/61nPiOOv9BL._SL1500_.jpg"

    },
    {
      name:"IPHONE 8 ",
      category:'Mobile',
      description:"It helps you well",
      image:"https://m.media-amazon.com/images/I/71w3oJ7aWyL._SX466_.jpg"

    },
    {
      name:"IPHONE 10 ",
      category:'Mobile',
      description:"This is a Pwolli phone",
      image:"https://m.media-amazon.com/images/I/61nPiOOv9BL._SL1500_.jpg"

    }
    
  ]

  res.render('admin/view-products',{admin:true,products})
});
router.get('/add-product',function(req,res)
{
  res.render('admin/add-product')
})
router.post('/add-product',(req,res)=>{
  console.log(req.body);
  console.log(req.files.Image);

  productHelpers.addProduct(req.body,(id)=>{
    let image=req.files.Image
    image.mv('./public/product-images/'+id+'.jpg',(err,done)=>{
      if(!err){
        res.render("admin/add-product")
      }
    })
    
  })

})
module.exports = router;
