import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  img: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, default: 0, required: true },
  categories: { type: String, required: true },
  countInStock: { type: Number, default: 0, required: true },
  description: { type: String, required: true }
 
},{
  timestamps: true
});

const productModel = mongoose.model("Product", productSchema);

export default productModel; 