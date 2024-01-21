import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json({
    hello: "Welcome to the API Route",
  });
}

export async function POST(request) {
  const data = await request.json();
  return NextResponse.json({
    data,
  });
}
