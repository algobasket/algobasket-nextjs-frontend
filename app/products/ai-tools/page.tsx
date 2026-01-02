import Image from 'next/image'
import Link from 'next/link'
import SubscribeDonate from '@/components/SubscribeDonate'

export default function AITools() {
  return (
    <section className="py-5" id="features">
      <div className="container px-5 my-5">
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-8 col-xl-6">
            <div className="text-center">
              <h2 className="fw-bolder">AI Tools & Scripts</h2>
              <p className="lead fw-normal text-muted mb-5">
                Powerful AI-powered tools and automation scripts to enhance your workflow
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
                alt="AI Tool"
                width={400}
                height={250}
              />
              <div className="card-body p-4">
                <div className="badge bg-info bg-gradient rounded-pill mb-2">AI Tool</div>
                <Link className="text-decoration-none link-dark stretched-link" href="#">
                  <h5 className="card-title mb-3">AI Content Generator</h5>
                </Link>
                <p className="card-text mb-0">
                  Generate high-quality content using advanced AI models. Perfect for blogs, articles, and marketing materials.
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
                      <div className="text-muted">Feb 15, 2025</div>
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
                alt="AI Script"
                width={400}
                height={250}
              />
              <div className="card-body p-4">
                <div className="badge bg-info bg-gradient rounded-pill mb-2">Script</div>
                <Link className="text-decoration-none link-dark stretched-link" href="#">
                  <h5 className="card-title mb-3">Automation Scripts</h5>
                </Link>
                <p className="card-text mb-0">
                  Python and JavaScript scripts for automating repetitive tasks with AI assistance.
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
                      <div className="text-muted">Jan 28, 2025</div>
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
                alt="AI Assistant"
                width={400}
                height={250}
              />
              <div className="card-body p-4">
                <div className="badge bg-info bg-gradient rounded-pill mb-2">AI Assistant</div>
                <Link className="text-decoration-none link-dark stretched-link" href="#">
                  <h5 className="card-title mb-3">Code Assistant AI</h5>
                </Link>
                <p className="card-text mb-0">
                  Intelligent code completion and debugging assistant powered by machine learning.
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
                      <div className="text-muted">Feb 5, 2025</div>
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

