const express = require("express");
const Port = 8080;
const app = express();
const cors=require('cors')
const URL = "mongodb://localhost:27017/e-com";
const bodyParser = require("body-parser");
const mongoConnection=require('./src/config/DbConnection');
const adminRoutes=require('./src/routes/adminRoutes');
const productRoutes=require('./src/routes/productRoutes');
const categoryRoutes=require('./src/routes/categoryRoutes');
const userRoutes=require('./src/routes/userRoute');
const orderRoutes=require('./src/routes/orderRoutes');
const cartRoutes=require('./src/routes/cartRoutes');
mongoConnection(URL);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use('/upload', express.static('upload'));

app.use('/api/admin',adminRoutes)
app.use('/api/product',productRoutes)
app.use('/api/category',categoryRoutes)
app.use('/api/cart',cartRoutes)
app.use('/api/users',userRoutes)
app.use('/api/order',orderRoutes)

app.listen(Port, () => {
    console.log("Port is running", Port);
  });