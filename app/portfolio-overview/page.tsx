export default function PortfolioOverview() {
  return (
    <section className="py-5">
      <div className="container px-5 my-5">
        <div className="text-center mb-5">
          <h1 className="fw-bolder">Portfolio Overview</h1>
          <p className="lead fw-normal text-muted">Explore our collection of projects</p>
        </div>
        <div className="row gx-5">
          <div className="col-lg-4 mb-5">
            <div className="card h-100 shadow border-0">
              <div className="card-body p-4">
                <h5 className="card-title mb-3">Project 1</h5>
                <p className="card-text">Description of project 1</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-5">
            <div className="card h-100 shadow border-0">
              <div className="card-body p-4">
                <h5 className="card-title mb-3">Project 2</h5>
                <p className="card-text">Description of project 2</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-5">
            <div className="card h-100 shadow border-0">
              <div className="card-body p-4">
                <h5 className="card-title mb-3">Project 3</h5>
                <p className="card-text">Description of project 3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

