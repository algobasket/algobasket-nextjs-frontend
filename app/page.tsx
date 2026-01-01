import Image from 'next/image'
import Link from 'next/link'
import SubscribeDonate from '@/components/SubscribeDonate'

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="bg-dark py-5">
        <div className="container px-5">
          <div className="row gx-5 align-items-center justify-content-center">
            <div className="col-lg-8 col-xl-7 col-xxl-6">
              <div className="my-5 text-center text-xl-start">
                <h1 className="display-5 fw-bolder text-white mb-2">{'{ Code For Humanity }'}</h1>
                <h2 className="lead fw-normal text-white-50 mb-4">
                  A Hub for Open-Source Enthusiasts & Makers
                </h2>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                  <a className="btn btn-info btn-lg px-4 me-sm-3" href="#features">
                    Open Source Products
                  </a>
                  <Link className="btn btn-outline-light btn-lg px-4" href="/premium">
                    Premium Products
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
              <Image
                className="img-fluid rounded-3 my-5"
                src="/assets/_7d292370-0d52-48b9-bd58-125fb4ebea66.jpg"
                alt="..."
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Features section */}
      <section className="py-5 bg-light">
        <div className="container px-5 my-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6 text-center text-lg-start">
              <h2 className="fw-bold mb-3 text-dark">🚀 What You&apos;ll Find Here</h2>
              <p className="text-muted lead">
                Explore tools, resources, and a thriving community built for developers like you.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="list-group">
                <a
                  href="#"
                  className="list-group-item list-group-item-action border-0 rounded-4 mb-3 shadow-sm py-4 px-4 d-flex align-items-center transition"
                >
                  <span className="fs-3 me-3">🚀</span>
                  <div>
                    <h5 className="fw-bold text-dark mb-1">Open-Source Projects</h5>
                    <p className="text-muted small mb-0">
                      Built by devs, for devs. Use them, tweak them, contribute!
                    </p>
                  </div>
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action border-0 rounded-4 mb-3 shadow-sm py-4 px-4 d-flex align-items-center transition"
                >
                  <span className="fs-3 me-3">💎</span>
                  <div>
                    <h5 className="fw-bold text-dark mb-1">Premium Tools</h5>
                    <p className="text-muted small mb-0">
                      Unlock high-performance features and seamless integrations.
                    </p>
                  </div>
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action border-0 rounded-4 mb-3 shadow-sm py-4 px-4 d-flex align-items-center transition"
                >
                  <span className="fs-3 me-3">📖</span>
                  <div>
                    <h5 className="fw-bold text-dark mb-1">Guides & Insights</h5>
                    <p className="text-muted small mb-0">
                      Deep dive into coding tips, best practices, and tech insights.
                    </p>
                  </div>
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action border-0 rounded-4 shadow-sm py-4 px-4 d-flex align-items-center transition"
                >
                  <span className="fs-3 me-3">🤝</span>
                  <div>
                    <h5 className="fw-bold text-dark mb-1">A Passionate Community</h5>
                    <p className="text-muted small mb-0">
                      Coding is more fun when we do it together!
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog preview section */}
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
                    An open-source platform for seamless, real-time document editing, team chat,
                    and file sharing.
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

          {/* Testimonial section */}
          <div className="py-5 bg-light">
            <div className="container px-5 my-5">
              <div className="row gx-5 justify-content-center">
                <div className="col-lg-10 col-xl-7">
                  <div className="text-center">
                    <div className="fs-4 mb-4 fst-italic">
                      &quot;Empowering you to create without limits, share your innovations with the
                      world, and build a future where collaboration drives progress. Join the
                      movement and be part of something bigger!&quot;
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                      <Image
                        className="rounded-circle me-3"
                        src="https://dummyimage.com/40x40/ced4da/6c757d"
                        alt="..."
                        width={40}
                        height={40}
                      />
                      <div className="fw-bold">
                        Collaborate, Contribute, Create
                        <span className="fw-bold text-primary mx-1">|</span>
                        Algobasket
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
    </>
  )
}

