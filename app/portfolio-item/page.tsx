export default function PortfolioItem() {
  return (
    <section className="py-5">
      <div className="container px-5 my-5">
        <div className="text-center mb-5">
          <h1 className="fw-bolder">Portfolio Item</h1>
          <p className="lead fw-normal text-muted">Detailed view of a portfolio item</p>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="card shadow border-0">
              <div className="card-body p-5">
                <h2 className="card-title mb-4">Project Title</h2>
                <p className="card-text">Detailed project description goes here.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

