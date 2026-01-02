import Image from 'next/image'
import Link from 'next/link'
import SubscribeDonate from '@/components/SubscribeDonate'

export default function AllProducts() {
  return (
    <section className="py-5">
      <div className="container px-5 my-5">
        <div className="text-center mb-5">
          <h1 className="fw-bolder">All Products</h1>
          <p className="lead fw-normal text-muted">Explore our complete collection of products and solutions</p>
        </div>
        <div className="row gx-5">
          <div className="col-lg-3 col-md-6 mb-5">
            <Link href="/open-source" className="text-decoration-none">
              <div className="card h-100 shadow border-0 hover-shadow-lg transition">
                <div className="card-body p-4 text-center">
                  <div className="badge bg-primary bg-gradient rounded-pill mb-3">Open Source</div>
                  <h5 className="card-title mb-3">Open Source Products</h5>
                  <p className="card-text text-muted">Free and open-source solutions built by the community</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <Link href="/products/ai-tools" className="text-decoration-none">
              <div className="card h-100 shadow border-0 hover-shadow-lg transition">
                <div className="card-body p-4 text-center">
                  <div className="badge bg-info bg-gradient rounded-pill mb-3">AI</div>
                  <h5 className="card-title mb-3">AI Tools & Scripts</h5>
                  <p className="card-text text-muted">Powerful AI-powered tools and automation scripts</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <Link href="/products/crypto" className="text-decoration-none">
              <div className="card h-100 shadow border-0 hover-shadow-lg transition">
                <div className="card-body p-4 text-center">
                  <div className="badge bg-success bg-gradient rounded-pill mb-3">Crypto</div>
                  <h5 className="card-title mb-3">Crypto Products</h5>
                  <p className="card-text text-muted">Blockchain solutions and DeFi applications</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <Link href="/products/saas" className="text-decoration-none">
              <div className="card h-100 shadow border-0 hover-shadow-lg transition">
                <div className="card-body p-4 text-center">
                  <div className="badge bg-warning bg-gradient rounded-pill mb-3">SAAS</div>
                  <h5 className="card-title mb-3">SAAS Products</h5>
                  <p className="card-text text-muted">Software as a Service solutions for businesses</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Call to action */}
        <SubscribeDonate />
      </div>
    </section>
  )
}

