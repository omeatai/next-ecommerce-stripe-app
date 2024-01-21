import { NextResponse } from "next/server";
import { mongoose } from "mongoose";

import mongooseConnect from "../../../../lib/mongoose";
import Product from "../../../../models/Product";

export async function GET(request, { params }) {
  await mongooseConnect();
  if (!mongoose.Types.ObjectId.isValid(params.productId)) {
    return NextResponse.json({
      Error: `Invalid Product id: ${params.productId}.`,
    });
  }
  const product = await Product.findOne({
    _id: params.productId,
  });
  if (!product) {
    return NextResponse.json({
      Error: `No Product with Product id: ${params.productId}.`,
    });
  }
  return NextResponse.json({
    hello: `Welcome to the API Route for Product ${params.productId}.`,
    productDetails: product,
  });
}

export async function POST(request) {
  const data = await request.json();
  return NextResponse.json({
    data,
  });
}
