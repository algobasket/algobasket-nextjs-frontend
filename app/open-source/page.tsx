import Image from 'next/image'
import Link from 'next/link'
import SubscribeDonate from '@/components/SubscribeDonate'

export default function OpenSource() {
  return (
    <section className="py-5" id="features">
      <div className="container px-5 my-5">
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-8 col-xl-6">
            <div className="text-center">
              <h2 className="fw-bolder">We Love Building Open-Source</h2>
              <p className="lead fw-normal text-muted mb-5">We love to build and innovate</p>
            </div>
          </div>
        </div>
        <div className="row gx-5">
          <div className="col-lg-4 mb-5">
            <div className="card h-100 shadow border-0">
              <Image
                className="card-img-top"
                src="/assets/_7d292370-0d52-48b9-bd58-125fb4ebea66.jpg"
                alt="..."
                width={400}
                height={250}
              />
              <div className="card-body p-4">
                <div className="badge bg-primary bg-gradient rounded-pill mb-2">Free</div>
                <Link className="text-decoration-none link-dark stretched-link" href="/open-source">
                  <h5 className="card-title mb-3">AlgoSeek CRM</h5>
                </Link>
                <p className="card-text mb-0">
                  A Smart, Open-Source, AI-Powered CRM for Modern Businesses
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
                      <div className="fw-bold">Last Release - Feb 12, 2025</div>
                      <div className="text-muted">Feb 12, 2025 &middot; 6 min read</div>
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
                alt="..."
                width={400}
                height={250}
              />
              <div className="card-body p-4">
                <div className="badge bg-primary bg-gradient rounded-pill mb-2">Free</div>
                <a className="text-decoration-none link-dark stretched-link" href="#!">
                  <h5 className="card-title mb-3">No-Code API Generator</h5>
                </a>
                <p className="card-text mb-0">
                  An open-source tool that lets users create custom APIs without coding, using an
                  intuitive drag-and-drop interface.
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
                      <div className="fw-bold">Last Release</div>
                      <div className="text-muted">Jan 23, 2025 &middot; 4 min read</div>
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
                alt="..."
                width={400}
                height={250}
              />
              <div className="card-body p-4">
                <div className="badge bg-primary bg-gradient rounded-pill mb-2">Free</div>
                <a className="text-decoration-none link-dark stretched-link" href="#!">
                  <h5 className="card-title mb-3">Real-Time Collaboration Suite</h5>
                </a>
                <p className="card-text mb-0">
                  An open-source platform for seamless, real-time document editing, team chat, and
                  file sharing.
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
                      <div className="fw-bold">Last Release</div>
                      <div className="text-muted">Feb 2, 2025 &middot; 10 min read</div>
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

