import mongooseConnect from "../../../lib/mongoose";
import Product from "../../../models/Product";

export default async function handle(req, res) {
  try {
    await mongooseConnect();
    const products = await Product.find().exec();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
