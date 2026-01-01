import Image from 'next/image'
import Link from 'next/link'

export default function Premium() {
  return (
    <section className="py-5">
      <div className="container px-5 my-5">
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-8 col-xl-6">
            <div className="text-center">
              <h2 className="fw-bolder">Premium Products</h2>
              <p className="lead fw-normal text-muted mb-5">
                Unlock advanced features and premium support
              </p>
            </div>
          </div>
        </div>
        <div className="row gx-5">
          <div className="col-lg-4 mb-5">
            <div className="card h-100 shadow border-0">
              <div className="card-body p-4">
                <div className="badge bg-warning bg-gradient rounded-pill mb-2">Premium</div>
                <h5 className="card-title mb-3">Premium Feature 1</h5>
                <p className="card-text mb-0">Advanced features and premium support included.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-5">
            <div className="card h-100 shadow border-0">
              <div className="card-body p-4">
                <div className="badge bg-warning bg-gradient rounded-pill mb-2">Premium</div>
                <h5 className="card-title mb-3">Premium Feature 2</h5>
                <p className="card-text mb-0">Enterprise-grade solutions for your business.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-5">
            <div className="card h-100 shadow border-0">
              <div className="card-body p-4">
                <div className="badge bg-warning bg-gradient rounded-pill mb-2">Premium</div>
                <h5 className="card-title mb-3">Premium Feature 3</h5>
                <p className="card-text mb-0">Custom integrations and dedicated support.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

