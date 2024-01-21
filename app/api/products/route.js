import { NextResponse } from "next/server";

import mongooseConnect from "../../../lib/mongoose";
import Product from "../../../models/Product";

export async function GET() {
  try {
    await mongooseConnect();
    const products = await Product.find().exec();
    return NextResponse.json(products);
  } catch (error) {
    NextResponse.json({ error: "Internal Server Error" });
  }
}
