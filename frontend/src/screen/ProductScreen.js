import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { detailsProduct } from '../actions/productActions'


function ProductScreen(props) {
    const [qty, setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails);
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(detailsProduct(props.match.params.id));
      return () => {
          //
      };
    }, []);

    const handleAddToCart = () => {
      props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)
    }

    return<>
      {loading? <div>Loading...</div>:
        error? <div>{error}</div>: product &&
          (<>
            <div className="subheader py-2 py-lg-6 subheader-solid" id="kt_subheader">
              <div className="container-fluid d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
                <div className="d-flex align-items-center flex-wrap mr-1">
                  <div className="d-flex align-items-baseline flex-wrap mr-5">
                    <h5 className="text-dark font-weight-bold my-1 mr-5">Product Detail</h5>
                    <ul className="breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold p-0 my-2 font-size-sm">
                      <li className="breadcrumb-item text-muted"><a className="text-muted" href="#">{product._id}</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
              <div className="d-flex flex-column-fluid">
                <div className="container">
                  <div className="d-flex flex-row">
                    <div className="flex-row-fluid">
                      <div className="d-flex">
                        <div className="col-md-7 col-lg-12 col-xxl-12">
                          <div className="card card-custom card-stretch gutter-b">
                            <div className="card-body p-15 pb-20">
                              <div className="row mb-17">
                                <div className="col-xxl-5 mb-11 mb-xxl-0">
                                  <div className="card card-custom card-stretch">
                                    <div className="card-body p-0 rounded px-10 py-15 d-flex align-items-center justify-content-center" style={{backgroundColor: "#FFCC69"}}>
                                      <img src={product.img} alt="produk" className="mw-100 w-200px" style={{transform: "scale(1.6)"}} />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xxl-7 pl-xxl-11">
                                  <h2 className="font-weight-bolder text-dark mb-7" style={{fontSize: "32px"}}>{product.name}</h2>
                                  <div className="font-size-h2 mb-7 text-dark-50"> 
                                  <span className="text-info font-weight-boldest ml-2">Rp. {product.price},-</span></div>
                                  <div className="line-height-xl" dangerouslySetInnerHTML={{__html:product.description}}></div>
                                </div>
                              </div>
                              <div className="row mb-6">
                                <div className="col-6 col-md-4">
                                  <div className="mb-8 d-flex flex-column">
                                    <span className="text-dark font-weight-bold mb-4">Brand</span>
                                    <span className="text-muted font-weight-bolder font-size-lg">{product.brand}</span>
                                  </div>
                                </div>
                                <div className="col-6 col-md-4">
                                  <div className="mb-8 d-flex flex-column">
                                    <span className="text-dark font-weight-bold mb-4">SKU</span>
                                    <span className="text-muted font-weight-bolder font-size-lg">TPD{product._id}</span>
                                  </div>
                                </div>
                                <div className="col-6 col-md-4">
                                  <div className="mb-8 d-flex flex-column">
                                    <span className="text-dark font-weight-bold mb-4">Color</span>
                                    <span className="text-muted font-weight-bolder font-size-lg">Pure White</span>
                                  </div>
                                </div>
                                <div className="col-6 col-md-4">
                                  <div className="mb-8 d-flex flex-column">
                                    <span className="text-dark font-weight-bold mb-4">Status</span>
                                    <span className="text-muted font-weight-bolder font-size-lg">{product.countInStock > 0 ? "Ready In Stock" : "Unavailable."}</span>
                                  </div>
                                </div>
                                <div className="col-6 col-md-4">
                                  <div className="mb-8 d-flex flex-column">
                                    <span className="text-dark font-weight-bold mb-4">In Stock</span>
                                    <span className="text-muted font-weight-bolder font-size-lg">{product.countInStock}</span>
                                  </div>
                                </div>
                                <div className="col-6 col-md-4">
                                  <div className="mb-8 d-flex flex-column">
                                    <span className="text-dark font-weight-bold mb-4">Set Quantity </span>
                                    <select value={qty} onChange={(e) => { setQty(e.target.value)}}>
                                      {[...Array(product.countInStock).keys()].map(x =>
                                          <option key={x + 1} value={x + 1}>{x + 1}</option>
                                      )}
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="d-flex">
                                {product.countInStock > 0 && 
                                  <button type="button" onClick={handleAddToCart} className="btn btn-primary font-weight-bolder mr-6 px-6 font-size-sm">
                                    <span className="svg-icon svg-icon-white"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                            <rect x="0" y="0" width="24" height="24"/>
                                            <path d="M18.1446364,11.84388 L17.4471627,16.0287218 C17.4463569,16.0335568 17.4455155,16.0383857 17.4446387,16.0432083 C17.345843,16.5865846 16.8252597,16.9469884 16.2818833,16.8481927 L4.91303792,14.7811299 C4.53842737,14.7130189 4.23500006,14.4380834 4.13039941,14.0719812 L2.30560137,7.68518803 C2.28007524,7.59584656 2.26712532,7.50338343 2.26712532,7.4104669 C2.26712532,6.85818215 2.71484057,6.4104669 3.26712532,6.4104669 L16.9929851,6.4104669 L17.606173,3.78251876 C17.7307772,3.24850086 18.2068633,2.87071314 18.7552257,2.87071314 L20.8200821,2.87071314 C21.4717328,2.87071314 22,3.39898039 22,4.05063106 C22,4.70228173 21.4717328,5.23054898 20.8200821,5.23054898 L19.6915238,5.23054898 L18.1446364,11.84388 Z" fill="#000000" opacity="0.3"/>
                                            <path d="M6.5,21 C5.67157288,21 5,20.3284271 5,19.5 C5,18.6715729 5.67157288,18 6.5,18 C7.32842712,18 8,18.6715729 8,19.5 C8,20.3284271 7.32842712,21 6.5,21 Z M15.5,21 C14.6715729,21 14,20.3284271 14,19.5 C14,18.6715729 14.6715729,18 15.5,18 C16.3284271,18 17,18.6715729 17,19.5 C17,20.3284271 16.3284271,21 15.5,21 Z" fill="#000000"/>
                                        </g>
                                    </svg>
                                    </span>Add to Cart
                                  </button>
                                }
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </>)
        }
    </>
  }


export default ProductScreen;