export default function BlogHome() {
  return (
    <section className="py-5">
      <div className="container px-5 my-5">
        <div className="text-center mb-5">
          <h1 className="fw-bolder">New Releases & Fixes</h1>
          <p className="lead fw-normal text-muted">Stay updated with our latest releases</p>
        </div>
        <div className="row gx-5">
          <div className="col-lg-6 mb-5">
            <div className="card h-100 shadow border-0">
              <div className="card-body p-4">
                <h5 className="card-title mb-3">Release Update 1</h5>
                <p className="card-text">Latest updates and fixes</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-5">
            <div className="card h-100 shadow border-0">
              <div className="card-body p-4">
                <h5 className="card-title mb-3">Release Update 2</h5>
                <p className="card-text">New features and improvements</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

