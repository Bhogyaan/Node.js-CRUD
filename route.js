
var qry=require ('./qry')
const router=require("express").Router();

router.get('/get',qry.sel)
// view
router.post('/insert',qry.ins)
//insert
router.post('/update',qry.upda)
//update
router.post('/del',qry.del)
//delete
router.post('/img',qry.img)
//image
module.exports=router