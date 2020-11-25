import express from 'express';
import Product from '../models/productModel';
import { isAuth, isAdmin } from '../util';

const router = express.Router();

router.get("/", async (req, res) =>{
  const products = await Product.find({});
  res.send(products);
});

router.get("/:id", async (req, res) =>{
  const product = await Product.findOne({_id: req.params.id});
  if(product){
    res.send(product);
  }else{
    res.status(404).send({message: "Product Not Found"})
  }
});

router.put('/:id', isAuth, isAdmin, async(req, res) =>{
  const productId = req.params.id;
  const product = await Product.findById(productId);
  if(product){
    product.name = req.body.name;
    product.price = req.body.price;
    product.img = req.body.img;
    product.brand = req.body.brand;
    product.categories = req.body.categories;
    product.countInStock = req.body.countInStock;
    product.description = req.body.description;
    const updateProduct = await product.save();
    if(updateProduct){
      return res.status(200).send({ message: "Product Update", data: updateProduct});
    }

  }
  return res.status(500).send({ message: "Error in Updating Product"})

});

router.delete("/:id", isAuth, isAdmin, async (req, res) =>{
  const deletedProduct = await Product.findById(req.params.id)
  if(deletedProduct){
    await deletedProduct.remove();
    res.send({message:"Product Deleted"})
  } else {
  res.send("Error in Delete.")
  }
})

router.post('/', isAuth, isAdmin, async(req, res) =>{
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    img: req.body.img,
    brand: req.body.brand,
    categories: req.body.categories,
    countInStock: req.body.countInStock,
    description: req.body.description,
  });
  const newProduct = await product.save();
  if(newProduct){
    return res.status(201).send({ message: "New Product Created", data: newProduct});
  }
  return res.status(500).send({ message: "Error in Create Product"})
});



export default router; 