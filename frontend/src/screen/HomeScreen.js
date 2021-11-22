import React, {useEffect}from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { listProductCategories } from '../actions/productActions';
// import LoadingBox from '../components/LoadingBox';
// import MessageBox from '../components/MessageBox';


function HomeScreen(props) {

  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  
  // const productCategoryList = useSelector((state) => state.productCategoryList);
  // const {
  //   loading: loadingCategories,
  //   error: errorCategories,
  //   categories,
  // } = productCategoryList;

  useEffect(() => {
    dispatch(listProducts());
    dispatch(listProductCategories())
    return () => {
      //
    };
  }, [dispatch]);

    return loading ? <div>Loading...</div> :
    error ? <div>{error}</div> : <>
    <div className="subheader py-2 py-lg-6 subheader-solid" id="kt_subheader">
      <div className="container-fluid d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
        <div className="d-flex align-items-center flex-wrap mr-1">
          <div className="d-flex align-items-baseline flex-wrap mr-5">
            <h5 className="text-dark font-weight-bold my-1 mr-5">Product</h5>
            {/* <ul className="breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold p-0 my-2 font-size-sm">
              <li className="breadcrumb-item text-muted"><a className="text-muted" href="">Overall Ship</a></li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
    <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
      <div className="d-flex flex-column-fluid">
        <div className="container-fluid">
          <div className="d-flex flex-row">
            {/* <div className="flex-column offcanvas-mobile w-300px w-xl-325px" id="kt_profile_aside">
              <div className="card card-custom gutter-b">
                <div className="card-body">
                  <form>
                    <div className="form-group mb-11">
                      <label className="font-size-h3 font-weight-bolder text-dark mb-7">Categories</label>
                      <div className="checkbox-list">
                        <label className="checkbox checkbox-lg mb-7">
                          <input type="checkbox" name="electronics"></input>
                          <span></span>
                          <div className="font-size-lg text-dark-75 font-weight-bold">Electronics</div>
                          <div className="ml-auto text-muted font-weight-bold">28</div>
                        </label>
                        <label className="checkbox checkbox-lg mb-7">
                          <input type="checkbox" name="sportsequipment"></input>
                          <span></span>
                          <div className="font-size-lg text-dark-75 font-weight-bold">Sports Equipments</div>
                          <div className="ml-auto text-muted font-weight-bold">307</div>
                        </label>
                        <label className="checkbox checkbox-lg mb-7">
                          <input type="checkbox" name="appliances"></input>
                          <span></span>
                          <div className="font-size-lg text-dark-75 font-weight-bold">Appliances</div>
                          <div className="ml-auto text-muted font-weight-bold">54</div>
                        </label>
                        <label className="checkbox checkbox-lg mb-7">
                          <input type="checkbox" name="appliances"></input>
                          <span></span>
                          <div className="font-size-lg text-dark-75 font-weight-bold">Software Solutions</div>
                          <div className="ml-auto text-muted font-weight-bold">762</div>
                        </label>
                        <label className="checkbox checkbox-lg">
                          <input type="checkbox" name="appliances"></input>
                          <span></span>
                          <div className="font-size-lg text-dark-75 font-weight-bold">Food &amp; Groceries</div>
                          <div className="ml-auto text-muted font-weight-bold">95</div>
                        </label>
                      </div>
                    </div>
                    <div className="form-group mb-7">
                      <label className="font-size-h3 font-weight-bolder text-dark mb-7">Price</label>
                      <div className="radio-list">
                        <label className="radio radio-lg mb-7">
                          <input type="radio" name="price"></input>
                          <span></span>
                          <div className="font-size-lg text-dark-75 font-weight-bold">All</div>
                          <div className="ml-auto text-muted font-weight-bold">2047</div>
                        </label>
                        <label className="radio radio-lg mb-7">
                          <input type="radio" name="price"></input>
                          <span></span>
                          <div className="font-size-lg text-dark-75 font-weight-bold">0$ - 99$</div>
                          <div className="ml-auto text-muted font-weight-bold">1403</div>
                        </label>
                        <label className="radio radio-lg mb-7">
                          <input type="radio" name="price"></input>
                          <span></span>
                          <div className="font-size-lg text-dark-75 font-weight-bold">100$ - 999$</div>
                          <div className="ml-auto text-muted font-weight-bold">570</div>
                        </label>
                        <label className="radio radio-lg">
                          <input type="radio" name="price"></input>
                          <span></span>
                          <div className="font-size-lg text-dark-75 font-weight-bold">1000$ &amp; Above</div>
                          <div className="ml-auto text-muted font-weight-bold">38</div>
                        </label>
                      </div>
                    </div>
                    <div className="form-group mb-13">
                      <div className="text-muted font-weight-bolder font-size-lg mb-5">Pricing Slider</div>
                      <div id="kt_price_slider" className="nouislider nouislider-light nouislider-handle-primary nouislider-bg-light-primary nouislider-shadowless nouislider-borderless noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr"><div className="noUi-base"><div className="noUi-connects"><div className="noUi-connect" style={{transform: "translate(20%, 0px) scale(0.4, 1)"}}></div></div><div className="noUi-origin" style={{transform: "translate(-800%, 0px)", zIndex: "5;"}}><div className="noUi-handle noUi-handle-lower" data-handle="0" tabIndex="0" role="slider" aria-orientation="horizontal" aria-valuemin="0.0" aria-valuemax="60.0" aria-valuenow="20.0" aria-valuetext="20.00"><div className="noUi-touch-area"></div></div></div><div className="noUi-origin" style={{transform: "translate(-400%, 0px)", zIndex: "4"}}><div className="noUi-handle noUi-handle-upper" data-handle="1" tabIndex="0" role="slider" aria-orientation="horizontal" aria-valuemin="20.0" aria-valuemax="100.0" aria-valuenow="60.0" aria-valuetext="60.00"><div className="noUi-touch-area"></div></div></div></div></div>
                    </div>
                    <div className="form-group">
                      <label className="font-size-h3 font-weight-bolder text-dark mb-7">Color</label>
                      <div className="radio-inline mb-11">
                        <label className="radio radio-accent radio-danger mr-0">
                          <input type="radio" name="color-selector" checked="checked"></input>
                          <span></span>
                        </label>
                        <label className="radio radio-accent radio-primary mr-0">
                          <input type="radio" name="color-selector"></input>
                          <span></span>
                        </label>
                        <label className="radio radio-accent radio-success mr-0">
                          <input type="radio" name="color-selector"></input>
                          <span></span>
                        </label>
                        <label className="radio radio-accent radio-info mr-0">
                          <input type="radio" name="color-selector"></input>
                          <span></span>
                        </label>
                        <label className="radio radio-accent radio-dark mr-0">
                          <input type="radio" name="color-selector"></input>
                          <span></span>
                        </label>
                        <label className="radio radio-accent radio-secondary mr-0">
                          <input type="radio" name="color-selector"></input>
                          <span></span>
                        </label>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary font-weight-bolder mr-2 px-8">Reset</button>
                    <button type="reset" className="btn btn-clear font-weight-bolder text-muted px-8">Setup</button>
                  </form>
                </div>
              </div>
              <div className="card card-custom gutter-b">
                <div className="card-header border-0 pt-5">
                  <h3 className="card-title align-items-start flex-column mb-5">
                    <span className="card-label font-weight-bolder text-dark mb-1">Recent Products</span>
                    <span className="text-muted mt-2 font-weight-bold font-size-sm">New Arrivals</span>
                  </h3>
                  <div className="card-toolbar">
                    <div className="dropdown dropdown-inline">
                      <a href="#" className="btn btn-clean btn-sm btn-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="ki ki-bold-more-hor"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-md dropdown-menu-right">
                        <ul className="navi navi-hover">
                          <li className="navi-header font-weight-bold py-4">
                            <span className="font-size-lg">Choose Label:</span>
                            <i className="flaticon2-information icon-md text-muted" data-toggle="tooltip" data-placement="right" title="" data-original-title="Click to learn more..."></i>
                          </li>
                          <li className="navi-separator mb-3 opacity-70"></li>
                          <li className="navi-item">
                            <a href="#" className="navi-link">
                              <span className="navi-text">
                                <span className="label label-xl label-inline label-light-success">Customer</span>
                              </span>
                            </a>
                          </li>
                          <li className="navi-item">
                            <a href="#" className="navi-link">
                              <span className="navi-text">
                                <span className="label label-xl label-inline label-light-danger">Partner</span>
                              </span>
                            </a>
                          </li>
                          <li className="navi-item">
                            <a href="#" className="navi-link">
                              <span className="navi-text">
                                <span className="label label-xl label-inline label-light-warning">Suplier</span>
                              </span>
                            </a>
                          </li>
                          <li className="navi-item">
                            <a href="#" className="navi-link">
                              <span className="navi-text">
                                <span className="label label-xl label-inline label-light-primary">Member</span>
                              </span>
                            </a>
                          </li>
                          <li className="navi-item">
                            <a href="#" className="navi-link">
                              <span className="navi-text">
                                <span className="label label-xl label-inline label-light-dark">Staff</span>
                              </span>
                            </a>
                          </li>
                          <li className="navi-separator mt-3 opacity-70"></li>
                          <li className="navi-footer py-4">
                            <a className="btn btn-clean font-weight-bold btn-sm" href="#">
                            <i className="ki ki-plus icon-sm"></i>Add new</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body pt-2">
                  <div className="d-flex mb-8">
                    <div className="symbol symbol-50 symbol-2by3 flex-shrink-0 mr-4">
                      <div className="d-flex flex-column">
                        <div className="symbol-label mb-3" style={{backgroundImage: "url('https://metronic-assets.s3-ap-southeast-1.amazonaws.com/media/stock-600x400/img-23.jpg')"}}></div>
                        <a href="#" className="btn btn-light-primary font-weight-bolder py-2 font-size-sm">Edit</a>
                      </div>
                    </div>
                    <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pr-3">
                      <a href="#" className="text-dark-75 font-weight-bolder text-hover-primary font-size-lg mb-2">Darius the Great</a>
                      <span className="text-muted font-weight-bold font-size-sm mb-3">All it takes tank credibility is one glaring error</span>
                      <span className="text-muted font-weight-bold font-size-lg">Price: 
                      <span className="text-dark-75 font-weight-bolder">99.00$</span></span>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="symbol symbol-50 symbol-2by3 flex-shrink-0 mr-4">
                      <div className="d-flex flex-column">
                        <div className="symbol-label mb-3" style={{backgroundImage: "url('https://metronic-assets.s3-ap-southeast-1.amazonaws.com/media/stock-600x400/img-25.jpg')"}}></div>
                        <a href="#" className="btn btn-light-primary font-weight-bolder py-2 font-size-sm">Edit</a>
                      </div>
                    </div>
                    <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pr-3">
                      <a href="#" className="text-dark-75 font-weight-bolder text-hover-primary font-size-lg mb-2">Nike Airmax</a>
                      <span className="text-muted font-weight-bold font-size-sm mb-3">All it takes tank credibility is one glaring error</span>
                      <span className="text-muted font-weight-bold font-size-lg">Price: 
                      <span className="text-dark-75 font-weight-bolder">99.00$</span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="flex-row-fluid ml-lg-8">
              <div className="card card-custom card-stretch gutter-b">
                <div className="card-body">
                  <div className="card card-custom gutter-b">
                    <div className="card-body rounded p-0 d-flex bg-light">
                      <div className="d-flex flex-column flex-lg-row-auto w-auto w-lg-350px w-xl-450px w-xxl-650px py-10 py-md-14 px-10 px-md-20 pr-lg-0">
                        <h1 className="font-weight-bolder text-dark mb-0">Search Goods</h1>
                        <div className="font-size-h4 mb-8">Get Amazing Stuff</div>
                        <form className="d-flex flex-center py-2 px-6 bg-white rounded">
                          <span className="svg-icon svg-icon-lg svg-icon-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <rect x="0" y="0" width="24" height="24"></rect>
                                <path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" fillRule="nonzero" opacity="0.3"></path>
                                <path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#000000" fillRule="nonzero"></path>
                              </g>
                            </svg>
                          </span>
                          <input type="text" className="form-control border-0 font-weight-bold pl-2" placeholder="Search Goods"></input>
                        </form>
                      </div>
                      <div className="d-none d-md-flex flex-row-fluid bgi-no-repeat bgi-position-y-center bgi-position-x-left bgi-size-cover" style={{backgroundImage: "url(https://metronic-assets.s3-ap-southeast-1.amazonaws.com/media/svg/illustrations/copy.svg)"}}></div>
                    </div>
                  </div>
                  <div className="d-flex flex-row">
                    {products.slice(4,6).map((product) => (<>
                      <div className="col-md-6 col-lg-6 col-xxl-6" key={product._id}>
                        <Link to={'/product/' + product._id}>
                          <div className="card card-custom card-stretch gutter-b overflow-hidden">
                            <div className="card-body p-0 d-flex rounded bg-light-success">
                              <div className="py-25 px-12 d-flex align-items-center flex-column flex-grow-1">
                                <h3 className="font-size-h1">
                                  <a href={`/product/${product._id}`} className="text-dark font-weight-bolder text-left">{product.name}</a>
                                </h3>
                                <div className="font-size-h4 text-success text-left" dangerouslySetInnerHTML={{__html:product.description}}></div>
                              </div>
                              <div className="d-flex align-items-center">
                                <a href={`/product/${product._id}`}>
                                  <img src={product.img} alt={product.name} className="d-none d-md-flex flex-row-fluid bgi-no-repeat bgi-position-y-center bgi-position-x-left mw-50 w-200px" style={{transform: "rotate(26deg)"}}/>
                                </a>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </>))}
                  </div>
                  <div className="row">
                    {products.map((product) => (
                      <div className="col-md-4 col-lg-12 col-xxl-4" key={product._id} >
                        <div className="card card-custom gutter-b card-stretch">
                          <div className="card-body d-flex flex-column rounded bg-light justify-content-between">
                            <div className="text-center rounded mb-7">
                              <a href={`/product/${product._id}`}>
                                <img src={product.img} alt={product.name} className="mw-100 w-200px"/>
                              </a>
                            </div>
                            <div>
                              <h4 className="font-size-h5">
                                <a href={`/product/${product._id}`} className="text-dark-75 font-weight-bolder">{product.name}</a>
                              </h4>
                              <div className="font-size-h6 text-muted font-weight-bolder">{product.price}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default HomeScreen;