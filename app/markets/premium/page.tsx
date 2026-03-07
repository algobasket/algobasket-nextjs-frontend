import Image from 'next/image'
import Link from 'next/link'
import { premiumProducts } from './data'

export default function PremiumMarket() {
  return (
    <div className="row gx-5">
      {premiumProducts.map((product) => (
        <div key={product.id} className="col-lg-4 mb-5">
          <Link href={`/markets/premium/${product.id}`} className="text-decoration-none text-dark d-block h-100">
            <div className="card h-100 shadow border-0">
              <div className="card-img-top" style={{ aspectRatio: '1/1', overflow: 'hidden' }}>
                <Image
                  src={product.image}
                  alt=""
                  width={400}
                  height={400}
                  className="w-100 h-100"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="card-body p-4">
                <div className="badge bg-warning bg-gradient text-dark rounded-pill mb-2">Premium</div>
                <h5 className="card-title mb-3">{product.title}</h5>
                <p className="card-text mb-0">{product.description}</p>
              </div>
            <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
              <div className="d-flex align-items-end justify-content-between">
                <div className="d-flex align-items-center">
                  <Image
                    className="rounded-circle me-3"
                    src="https://dummyimage.com/40x40/ced4da/6c757d"
                    alt=""
                    width={40}
                    height={40}
                  />
                  <div className="small">
                    <div className="fw-bold">{product.releaseLabel}</div>
                    <div className="text-muted">{product.releaseDate} &middot; {product.readTime}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </Link>
        </div>
      ))}
    </div>
  )
}
