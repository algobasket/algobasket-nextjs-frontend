'use client'

import { useState, useEffect } from 'react'

interface ComingSoonPageData {
  title?: string
  subtitle?: string
  showCountdown?: boolean
  countdownDate?: string
  imageUrl?: string
  backgroundColor?: string
}

export default function ComingSoonPage({ data }: { data: ComingSoonPageData }) {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null)

  useEffect(() => {
    if (!data?.showCountdown || !data?.countdownDate) return

    const target = new Date(data.countdownDate).getTime()

    const update = () => {
      const now = Date.now()
      const diff = Math.max(0, target - now)

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      })
    }

    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [data?.showCountdown, data?.countdownDate])

  const bgColor = data?.backgroundColor || '#020a12'

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center text-white py-5 position-relative overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-center g-4">
          {data?.imageUrl && (
            <div className="col-lg-5 col-md-6 text-center text-lg-end order-lg-1 order-2">
              <img
                src={data.imageUrl}
                alt=""
                className="img-fluid rounded-3"
                style={{ maxHeight: '550px', maxWidth: '100%', objectFit: 'contain' }}
              />
            </div>
          )}
          <div className={`text-center px-4 ${data?.imageUrl ? 'col-lg-7 col-md-6' : 'col-12'} order-lg-2 order-1`}>
        <h1 className="display-4 fw-bolder mb-4">
          {data?.title || 'Coming Soon'}
        </h1>
        <p className="lead text-white-50 mb-5">
          {data?.subtitle || "We're working on something exciting. Stay tuned!"}
        </p>

        {data?.showCountdown && timeLeft && (
          <div className="d-flex justify-content-center gap-3 gap-md-4 flex-wrap mb-5">
            <div className="bg-white bg-opacity-10 rounded-3 p-4" style={{ minWidth: '80px' }}>
              <div className="display-4 fw-bold">{timeLeft.days}</div>
              <div className="text-white-50 small">Days</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-3 p-4" style={{ minWidth: '80px' }}>
              <div className="display-4 fw-bold">{timeLeft.hours}</div>
              <div className="text-white-50 small">Hours</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-3 p-4" style={{ minWidth: '80px' }}>
              <div className="display-4 fw-bold">{timeLeft.minutes}</div>
              <div className="text-white-50 small">Minutes</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-3 p-4" style={{ minWidth: '80px' }}>
              <div className="display-4 fw-bold">{timeLeft.seconds}</div>
              <div className="text-white-50 small">Seconds</div>
            </div>
          </div>
        )}

        <p className="text-white-50 small">Thank you for your patience.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
