import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

const API_BASE = process.env.API_BASE_URL || 'http://localhost:3002'

export async function GET() {
  try {
    const res = await fetch(`${API_BASE}/api/settings/frontend`, {
      next: { revalidate: 60 },
    })
    const data = await res.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Failed to fetch frontend settings:', error)
    return NextResponse.json(
      {
        success: false,
        data: {
          enableComingSoon: false,
          comingSoonPage: {
            title: 'Coming Soon',
            subtitle: "We're working on something exciting. Stay tuned!",
            showCountdown: false,
            countdownDate: '',
          },
        },
      },
      { status: 200 }
    )
  }
}
