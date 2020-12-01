import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'
import userRoute from './routes/userRoute'
import productRoute from './routes/productRoute'
import orderRouter from './routes/orderRoute';

dotenv.config();


const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).catch(error => console.log(error.reason));


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json())
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use('/api/orders', orderRouter);

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
);
// app.get("/api/products/:id", (req, res) => {
//     const productId = req.params.id;
//     const product = data.products.find(x=>x._id === productId);
//     if(product)
//        res.send(product);
//     else
//         res.status(404).send({msg: "Product Not Found"})
// });

// app.get("/api/products", (req, res) => {
//     res.send(data.products);
// });

app.use((err, req, res, next) => {
    res.status(500).send({message: err.message})
})
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
  });
