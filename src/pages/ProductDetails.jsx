import { useParams, Outlet, Link } from "react-router-dom";

function ProductDetails(){

  const { id } = useParams();

  return(
    <div>
      <h2>Product Details</h2>
      <p>Product ID: {id}</p>

      <Link to="reviews">View Reviews</Link>

      <Outlet/>
    </div>
  )
}

export default ProductDetails