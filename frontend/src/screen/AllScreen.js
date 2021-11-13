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
    <div className="subheader py-2 py-lg-6 subheader-solid" id="kt_subheader">
      <div className="container-fluid d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
        <div className="d-flex align-items-center flex-wrap mr-1">
          <div className="d-flex align-items-baseline flex-wrap mr-5">
            <h5 className="text-dark font-weight-bold my-1 mr-5">All Product</h5>
            {/* <ul className="breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold p-0 my-2 font-size-sm">
              <li className="breadcrumb-item text-muted"><a className="text-muted" href="">Overall Ship</a></li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row">
        {products.map(product =>
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6" key={product._id}>
            <div className="card card-custom gutter-b card-stretch">
              <div className="card-body text-center pt-4">
                <div className="mt-7">
                  <Link to={'/product/' + product._id}>
                    <img className="w-150px" src={product.img} alt="image"/>
                  </Link>
                </div>
                <div className="my-4">
                  <a href="#" className="text-dark font-weight-bold text-hover-primary font-size-h4">{product.name}</a>
                </div>
                <span className="btn btn-text btn-light-warning btn-sm font-weight-bold">{product.brand}</span>
                <div className="mt-9">
                  <a href="#" className="btn btn-light-primary font-weight-bolder btn-sm py-3 px-6 text-uppercase">Rp.{product.price}</a>
                </div>
              </div>
            </div>
          </div>
        )}
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