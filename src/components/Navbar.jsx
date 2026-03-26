import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{display:"flex",gap:"20px",padding:"20px"}}>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;