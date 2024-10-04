import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const { counter } = useSelector((state) => state.CartReducer);

  return (
    <header className="d-flex bg-light justify-content-between align-items-center py-2 px-3 px-md-5 sticky-top shadow-sm">
      <div className="d-flex align-items-center gap-2 gap-md-3">
        <img
          src="/Images/logo.jpeg"
          alt="Momentum Logo"
          className="img-fluid"
          style={{ width: "4rem", height: "4rem", objectFit: "contain" }}
        />
        <p
          className="text-uppercase font-weight-bold text-muted mb-0 fs-6 fs-md-4"
          style={{ letterSpacing: "0.1rem" }}
        >
          Momentum Solutions Co.
        </p>
      </div>
      <nav>
        <ul className="list-unstyled d-flex gap-3 gap-md-4 mb-0">
          <li>
            <Link
              to="/"
              className="text-reset text-uppercase text-decoration-none"
            >
              Products
            </Link>
          </li>
          <li className="position-relative">
            <Link
              to="/cart"
              className="text-reset text-uppercase text-decoration-none"
              aria-label="Go to Cart page"
            >
              Cart
            </Link>
            <span
              className="p-1 bg-danger text-white rounded-pill position-absolute translate-middle shadow-sm"
              style={{
                right: "-10px",
                top: "-2px",
                fontSize: "0.75rem",
                lineHeight: "1",
              }}
            >
              {counter}
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
