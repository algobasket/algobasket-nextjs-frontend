import ComingSoonPage from '@/app/coming-soon/page'

async function getFrontendSettings() {
  try {
    const apiBase = process.env.API_BASE_URL || 'http://localhost:3002'
    const res = await fetch(`${apiBase}/api/settings/frontend`, {
      cache: 'no-store',
    })
    const json = await res.json()
    return json?.success ? json.data : null
  } catch {
    return null
  }
}

export default async function ComingSoonGuard({
  children,
}: {
  children: React.ReactNode
}) {
  const settings = await getFrontendSettings()

  if (settings?.enableComingSoon) {
    return (
      <ComingSoonPage data={settings.comingSoonPage || {}} />
    )
  }

  return <>{children}</>
}
