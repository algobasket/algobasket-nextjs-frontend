import Image from 'next/image'
import Link from 'next/link'
import SubscribeDonate from '@/components/SubscribeDonate'

export default function AllProducts() {
  return (
    <section className="py-5" id="features">
      <div className="container px-5 my-5">
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-8 col-xl-6">
            <div className="text-center">
              <h2 className="fw-bolder">All Products</h2>
              <p className="lead fw-normal text-muted mb-5">
                Explore our complete collection of products across all categories
              </p>
            </div>
          </div>
        </div>
        
        {/* Open Source Products Section */}
        <div className="mb-5">
          <h3 className="fw-bold mb-4">🚀 Open Source Products</h3>
          <div className="row gx-5">
            <div className="col-lg-4 mb-5">
              <div className="card h-100 shadow border-0">
                <Image
                  className="card-img-top"
                  src="/assets/_7d292370-0d52-48b9-bd58-125fb4ebea66.jpg"
                  alt="AlgoSeek CRM"
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
                  alt="No-Code API Generator"
                  width={400}
                  height={250}
                />
                <div className="card-body p-4">
                  <div className="badge bg-primary bg-gradient rounded-pill mb-2">Free</div>
                  <Link className="text-decoration-none link-dark stretched-link" href="/open-source">
                    <h5 className="card-title mb-3">No-Code API Generator</h5>
                  </Link>
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
                  alt="Real-Time Collaboration Suite"
                  width={400}
                  height={250}
                />
                <div className="card-body p-4">
                  <div className="badge bg-primary bg-gradient rounded-pill mb-2">Free</div>
                  <Link className="text-decoration-none link-dark stretched-link" href="/open-source">
                    <h5 className="card-title mb-3">Real-Time Collaboration Suite</h5>
                  </Link>
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
        </div>

        {/* AI Tools & Scripts Section */}
        <div className="mb-5">
          <h3 className="fw-bold mb-4">🤖 AI Tools & Scripts</h3>
          <div className="row gx-5">
            <div className="col-lg-4 mb-5">
              <div className="card h-100 shadow border-0">
                <Image
                  className="card-img-top"
                  src="/assets/_7d292370-0d52-48b9-bd58-125fb4ebea66.jpg"
                  alt="AI Content Generator"
                  width={400}
                  height={250}
                />
                <div className="card-body p-4">
                  <div className="badge bg-info bg-gradient rounded-pill mb-2">AI Tool</div>
                  <Link className="text-decoration-none link-dark stretched-link" href="/products/ai-tools">
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
                  alt="Automation Scripts"
                  width={400}
                  height={250}
                />
                <div className="card-body p-4">
                  <div className="badge bg-info bg-gradient rounded-pill mb-2">Script</div>
                  <Link className="text-decoration-none link-dark stretched-link" href="/products/ai-tools">
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
                  alt="Code Assistant AI"
                  width={400}
                  height={250}
                />
                <div className="card-body p-4">
                  <div className="badge bg-info bg-gradient rounded-pill mb-2">AI Assistant</div>
                  <Link className="text-decoration-none link-dark stretched-link" href="/products/ai-tools">
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
        </div>

        {/* Crypto Products Section */}
        <div className="mb-5">
          <h3 className="fw-bold mb-4">₿ Crypto Products</h3>
          <div className="row gx-5">
            <div className="col-lg-4 mb-5">
              <div className="card h-100 shadow border-0">
                <Image
                  className="card-img-top"
                  src="/assets/_7d292370-0d52-48b9-bd58-125fb4ebea66.jpg"
                  alt="Crypto Portfolio Tracker"
                  width={400}
                  height={250}
                />
                <div className="card-body p-4">
                  <div className="badge bg-success bg-gradient rounded-pill mb-2">Crypto</div>
                  <Link className="text-decoration-none link-dark stretched-link" href="/products/crypto">
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
                  alt="DeFi Analytics Platform"
                  width={400}
                  height={250}
                />
                <div className="card-body p-4">
                  <div className="badge bg-success bg-gradient rounded-pill mb-2">Blockchain</div>
                  <Link className="text-decoration-none link-dark stretched-link" href="/products/crypto">
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
                  alt="NFT Marketplace Tools"
                  width={400}
                  height={250}
                />
                <div className="card-body p-4">
                  <div className="badge bg-success bg-gradient rounded-pill mb-2">NFT</div>
                  <Link className="text-decoration-none link-dark stretched-link" href="/products/crypto">
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
        </div>

        {/* SAAS Products Section */}
        <div className="mb-5">
          <h3 className="fw-bold mb-4">☁️ SAAS Products</h3>
          <div className="row gx-5">
            <div className="col-lg-4 mb-5">
              <div className="card h-100 shadow border-0">
                <Image
                  className="card-img-top"
                  src="/assets/_7d292370-0d52-48b9-bd58-125fb4ebea66.jpg"
                  alt="Project Management Suite"
                  width={400}
                  height={250}
                />
                <div className="card-body p-4">
                  <div className="badge bg-warning bg-gradient rounded-pill mb-2">SAAS</div>
                  <Link className="text-decoration-none link-dark stretched-link" href="/products/saas">
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
                  alt="Cloud Analytics Dashboard"
                  width={400}
                  height={250}
                />
                <div className="card-body p-4">
                  <div className="badge bg-warning bg-gradient rounded-pill mb-2">SAAS</div>
                  <Link className="text-decoration-none link-dark stretched-link" href="/products/saas">
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
                  alt="Customer Support Platform"
                  width={400}
                  height={250}
                />
                <div className="card-body p-4">
                  <div className="badge bg-warning bg-gradient rounded-pill mb-2">SAAS</div>
                  <Link className="text-decoration-none link-dark stretched-link" href="/products/saas">
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
        </div>

        {/* Call to action */}
        <SubscribeDonate />
      </div>
    </section>
  )
}

