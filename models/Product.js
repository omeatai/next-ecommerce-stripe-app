// const mongoose = require("mongoose");
import { model, models, Schema } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: false,
  },
  //   createdAt: {
  //     type: Date,
  //     default: Date.now,
  //   },
});

// const Product = mongoose.model("Product", productSchema);
const Product = models?.Product || model("Product", productSchema);

export default Product;
