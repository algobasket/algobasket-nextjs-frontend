'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MarketsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isProductDetail = pathname?.match(/\/markets\/(niche|premium|ai|crypto)\/\d+$/)

  return (
    <section className="py-5">
      <div className="container px-5 my-5">
        {!isProductDetail && (
          <>
            <div className="row gx-5 justify-content-center">
              <div className="col-lg-8 col-xl-6">
                <div className="text-center">
                  <h2 className="fw-bolder">Markets</h2>
                  <p className="lead fw-normal text-muted mb-5">
                    Explore market solutions and opportunities
                  </p>
                </div>
              </div>
            </div>

            {/* Horizontal Tab Menu - Links */}
            <div className="d-flex justify-content-center mb-5">
              <ul className="nav nav-tabs border-0 gap-2">
                <li className="nav-item">
                  <Link
                    href="/markets/niche"
                    className={`nav-link rounded-pill px-4 py-2 fw-semibold border-0 ${
                      pathname?.startsWith('/markets/niche')
                        ? 'bg-primary text-white'
                        : 'bg-light text-dark'
                    }`}
                  >
                    Niche Market
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/markets/premium"
                    className={`nav-link rounded-pill px-4 py-2 fw-semibold border-0 ${
                      pathname?.startsWith('/markets/premium')
                        ? 'bg-primary text-white'
                        : 'bg-light text-dark'
                    }`}
                  >
                    Premium Market
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/markets/ai"
                    className={`nav-link rounded-pill px-4 py-2 fw-semibold border-0 ${
                      pathname?.startsWith('/markets/ai')
                        ? 'bg-primary text-white'
                        : 'bg-light text-dark'
                    }`}
                  >
                    AI Market
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="/markets/crypto"
                    className={`nav-link rounded-pill px-4 py-2 fw-semibold border-0 ${
                      pathname?.startsWith('/markets/crypto')
                        ? 'bg-primary text-white'
                        : 'bg-light text-dark'
                    }`}
                  >
                    Crypto Market
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}

        {children}
      </div>
    </section>
  )
}
