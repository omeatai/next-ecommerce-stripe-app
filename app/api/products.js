import mongooseConnect from "../../lib/mongoose";
// import Product from "../models/Product";

const handleRequest = async (req, res) => {
  try {
    await mongooseConnect();
    // const products = await Product.find();
    // res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default handleRequest;
