import Image from 'next/image'
import Link from 'next/link'
import SubscribeDonate from '@/components/SubscribeDonate'

export default function SAASProducts() {
  return (
    <section className="py-5" id="features">
      <div className="container px-5 my-5">
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-8 col-xl-6">
            <div className="text-center">
              <h2 className="fw-bolder">SAAS Products</h2>
              <p className="lead fw-normal text-muted mb-5">
                Software as a Service solutions for businesses of all sizes
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
                alt="SAAS Product"
                width={400}
                height={250}
              />
              <div className="card-body p-4">
                <div className="badge bg-primary bg-gradient rounded-pill mb-2">SAAS</div>
                <Link className="text-decoration-none link-dark stretched-link" href="#">
                  <h5 className="card-title mb-3">Project Management Suite</h5>
                </Link>
                <p className="card-text mb-0">
                  Complete project management solution with team collaboration, task tracking, and reporting features.
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
                      <div className="text-muted">Feb 12, 2025</div>
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
                alt="SAAS Platform"
                width={400}
                height={250}
              />
              <div className="card-body p-4">
                <div className="badge bg-primary bg-gradient rounded-pill mb-2">SAAS</div>
                <Link className="text-decoration-none link-dark stretched-link" href="#">
                  <h5 className="card-title mb-3">Cloud Analytics Dashboard</h5>
                </Link>
                <p className="card-text mb-0">
                  Real-time analytics and business intelligence platform with customizable dashboards and reports.
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
                      <div className="text-muted">Jan 25, 2025</div>
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
                alt="SAAS Service"
                width={400}
                height={250}
              />
              <div className="card-body p-4">
                <div className="badge bg-primary bg-gradient rounded-pill mb-2">SAAS</div>
                <Link className="text-decoration-none link-dark stretched-link" href="#">
                  <h5 className="card-title mb-3">Customer Support Platform</h5>
                </Link>
                <p className="card-text mb-0">
                  All-in-one customer support solution with ticketing, live chat, and knowledge base management.
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
                      <div className="text-muted">Feb 1, 2025</div>
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

