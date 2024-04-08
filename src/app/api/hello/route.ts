import { NextResponse } from "next/server";

// request: Request
export async function GET() {
  return NextResponse.json({ message: "Hello Word " }, { status: 500 });
}
