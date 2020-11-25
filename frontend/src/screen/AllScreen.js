import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';


function Allscreen(props) {

  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(listProducts());

    return () => {
      //
    };
  }, [dispatch]);

    return loading ? <div>Loading...</div> :
    error ? <div>{error}</div> : 
    <>
        <div className="tittle">
              <h1>All Product</h1>
        </div>

        <div className="featuredProduct">
          <div className="small-container">
            <div className="row">
                {
                  products.map(product =>
                    <div className="col-4" key={product._id}>
                      <div className="col-4">
                        <Link to={'/product/' + product._id}>
                            <img className="product-img" src={product.img} alt="" />
                        </Link>
                        <div className="product-name"><Link to={'/product/' + product._id}>
                          <h4>{product.name}</h4></Link>
                        </div>
                        <div className="product-brand">
                          <h4>{product.brand}</h4>
                        </div>
                        <div className="price">
                          <p>Rp.{product.price}</p>
                        </div>
                      </div>
                    </div>)
                }
              
            </div>
          </div>
        </div>
        <div className="container">
          <div className="btn">
            <Link to={'/'}>To HomeScreen →</Link>
          </div>
        </div>
    </>
}

export default Allscreen;