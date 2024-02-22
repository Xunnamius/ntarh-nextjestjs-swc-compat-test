import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({ test: true }, { status: 200 });
}

export async function POST(request: Request) {
  return NextResponse.json({ test: true }, { status: 200 });
}
