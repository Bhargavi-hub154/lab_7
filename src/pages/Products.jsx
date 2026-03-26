import { Link } from "react-router-dom";

function Products(){

  const products = [
    {id:1,name:"Phone"},
    {id:2,name:"Laptop"},
    {id:3,name:"Headphones"}
  ];

  return(
    <div>

      <h2>Products</h2>

      {products.map(p=>(
        <div key={p.id}>
          <Link to={`/products/${p.id}`}>
            {p.name}
          </Link>
        </div>
      ))}

    </div>
  )
}

export default Products