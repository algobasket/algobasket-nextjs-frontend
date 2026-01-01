export default function SubscribeDonate() {
  return (
    <aside className="bg-dark bg-gradient rounded-3 p-4 p-sm-5 mt-5">
      <div className="d-flex align-items-center justify-content-between flex-column flex-xl-row text-center text-xl-start">
        <div className="mb-4 mb-xl-0">
          <div className="fs-3 fw-bold text-white">Building Together, Sharing the Future</div>
          <div className="text-white-50">
            <div className="row">
              <div className="col-md-6">Sponsor or Donate us via Github</div>
              <div className="col-md-6">
                <iframe
                  src="https://github.com/sponsors/algobasket/button"
                  title="Sponsor Algobasket"
                  height="32"
                  width="150"
                  style={{ border: 0, borderRadius: '6px' }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="ms-xl-4">
          <h3 className="text-white">Subscribe for latest updates!</h3>
          <div className="input-group mb-2">
            <input
              className="form-control"
              type="text"
              placeholder="Email address..."
              aria-label="Email address..."
              aria-describedby="button-newsletter"
            />
            <button className="btn btn-outline-light" id="button-newsletter" type="button">
              Sign up
            </button>
          </div>
          <div className="small text-white-50">We care about privacy, and will never share your data.</div>
        </div>
      </div>
    </aside>
  )
}

