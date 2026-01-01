import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const userQuery = body.query || ''

    // Set default response
    let responseText = "I'm not sure how to respond to that."

    // Define responses based on user query
    if (userQuery.toLowerCase().includes('hello')) {
      responseText = 'Hello! How can I assist you today?'
    } else if (userQuery.toLowerCase().includes('price')) {
      responseText = 'Our premium products price as mentioned'
    }

    // Return JSON response
    return NextResponse.json({ reply: responseText })
  } catch (error) {
    return NextResponse.json(
      { reply: "I'm not sure how to respond to that." },
      { status: 500 }
    )
  }
}

