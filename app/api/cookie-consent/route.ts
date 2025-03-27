import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const data = await request.json()

  // Here you would typically store the consent in a database or cookie

  return NextResponse.json({ success: true })
}

