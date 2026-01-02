import Image from 'next/image'
import Link from 'next/link'
import SubscribeDonate from '@/components/SubscribeDonate'

export default function CryptoProducts() {
  return (
    <section className="py-5" id="features">
      <div className="container px-5 my-5">
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-8 col-xl-6">
            <div className="text-center">
              <h2 className="fw-bolder">Crypto Products</h2>
              <p className="lead fw-normal text-muted mb-5">
                Blockchain solutions, crypto tools, and DeFi applications
              </p>
            </div>
          </div>
        </div>
        <div className="row gx-5">
          <div className="col-lg-4 mb-5">
            <div className="card h-100 shadow border-0">
              <Image
                className="card-img-top"
                src="/assets/_7d292370-0d52-48b9-bd58-125fb4ebea66.jpg"
                alt="Crypto Tool"
                width={400}
                height={250}
              />
              <div className="card-body p-4">
                <div className="badge bg-success bg-gradient rounded-pill mb-2">Crypto</div>
                <Link className="text-decoration-none link-dark stretched-link" href="#">
                  <h5 className="card-title mb-3">Crypto Portfolio Tracker</h5>
                </Link>
                <p className="card-text mb-0">
                  Track your cryptocurrency investments across multiple exchanges and wallets in real-time.
                </p>
              </div>
              <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                <div className="d-flex align-items-end justify-content-between">
                  <div className="d-flex align-items-center">
                    <Image
                      className="rounded-circle me-3"
                      src="https://dummyimage.com/40x40/ced4da/6c757d"
                      alt="..."
                      width={40}
                      height={40}
                    />
                    <div className="small">
                      <div className="fw-bold">Latest Version</div>
                      <div className="text-muted">Feb 10, 2025</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-5">
            <div className="card h-100 shadow border-0">
              <Image
                className="card-img-top"
                src="/assets/_ac27c117-f4ce-4fe1-b2fd-d55b3c7f790f.jpg"
                alt="Blockchain"
                width={400}
                height={250}
              />
              <div className="card-body p-4">
                <div className="badge bg-success bg-gradient rounded-pill mb-2">Blockchain</div>
                <Link className="text-decoration-none link-dark stretched-link" href="#">
                  <h5 className="card-title mb-3">DeFi Analytics Platform</h5>
                </Link>
                <p className="card-text mb-0">
                  Comprehensive analytics and insights for decentralized finance protocols and yield farming.
                </p>
              </div>
              <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                <div className="d-flex align-items-end justify-content-between">
                  <div className="d-flex align-items-center">
                    <Image
                      className="rounded-circle me-3"
                      src="https://dummyimage.com/40x40/ced4da/6c757d"
                      alt="..."
                      width={40}
                      height={40}
                    />
                    <div className="small">
                      <div className="fw-bold">Latest Version</div>
                      <div className="text-muted">Jan 30, 2025</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-5">
            <div className="card h-100 shadow border-0">
              <Image
                className="card-img-top"
                src="/assets/_845d11f3-6f93-45dc-85c9-f4a4469afe79.jpg"
                alt="NFT"
                width={400}
                height={250}
              />
              <div className="card-body p-4">
                <div className="badge bg-success bg-gradient rounded-pill mb-2">NFT</div>
                <Link className="text-decoration-none link-dark stretched-link" href="#">
                  <h5 className="card-title mb-3">NFT Marketplace Tools</h5>
                </Link>
                <p className="card-text mb-0">
                  Tools for creating, managing, and trading NFTs with smart contract integration.
                </p>
              </div>
              <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                <div className="d-flex align-items-end justify-content-between">
                  <div className="d-flex align-items-center">
                    <Image
                      className="rounded-circle me-3"
                      src="https://dummyimage.com/40x40/ced4da/6c757d"
                      alt="..."
                      width={40}
                      height={40}
                    />
                    <div className="small">
                      <div className="fw-bold">Latest Version</div>
                      <div className="text-muted">Feb 8, 2025</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <SubscribeDonate />
      </div>
    </section>
  )
}

