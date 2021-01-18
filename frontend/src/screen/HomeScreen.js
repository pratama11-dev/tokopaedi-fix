import React, {useEffect}from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import {
  ShoppingCartOutlined,
} from '@ant-design/icons';
// import { listProductCategories } from '../actions/productActions';
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
    // dispatch(listProductCategories())
    return () => {
      //
    };
  }, [dispatch]);

    return loading ? <div>Loading...</div> :
    error ? <div>{error}</div> : <>
    <div className="heading">
          <div className="container">
            <div className="row">
              <div className="col-2">
                <h1>Steelseries Arctis 5 White</h1>
                <p>The Best USB Gaming Headset 
                  <br />- ClearCast , the Best Mic in Gaming
                  <br />- DTS Headphone:X 7.1 Surround Sound
                  <br />- AirWeave Ear Cushions</p>
                <Link to={'/product/5fb7d8c3bbd69c13346c4345'} className="btn">Detail → </Link>
              </div>
              <div className="col-2">
                <img src="../img/Audio/STEELSERIES-Arctis-7-White-Merchant--3315985644-2017314145443.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/*Featured Product*/}
        <div className="featuredProduct">
          <div className="small-container">
            <div className="tittle">
              <h1>Featured Product</h1>
            </div>
            <div className="row">
              
                {
                  products.slice(0,4).map(product =>
                    <>
                      <div className="col-4">
                        <div className="new">
                          <h5>NEW!</h5>
                        </div>
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
                    </>)
                }
              
            </div>
          </div>
        </div>
        {/*category*/}
        <div className="container">
          <div className="tittle">
            <h1>Categories</h1>
          </div>
          <div className="categories">
            <div className="small-container">
              <div className="row">
              {/* {loadingCategories ? (
              <LoadingBox></LoadingBox>
                ) : errorCategories ? (
                  <MessageBox variant="danger">{errorCategories}</MessageBox>
                ) : (
                  categories.map((c) => (
                    <li key={c}>
                      <Link
                        to={`/search/categories/${c}`}
                      >
                        {c}
                      </Link>
                    </li>
                  ))
                )} */}
                <div className="col-3">
                  <img src="../img/Monitor/OPTIXMAG322CQR.png" alt="" />
                  <div className="btn">
                  <Link to={'/Allscreen'}>Monitor →</Link>
                </div>
                </div>
                <div className="col-3">
                  <img src="../img/Audio/g635.png" alt="" />
                  <div className="btn">
                  <Link to={'/Allscreen'}>Audio →</Link></div>
                </div>
                <div className="col-3">
                  <img src="../img/MousePad/g240.png" alt="" />
                  <div className="btn">
                  <Link to={'/Allscreen/'}>MousePad →</Link></div>
                </div>
                <div className="col-3">
                  <img src="../img/Mouse/Ominblack.png" alt="" />
                  <div className="btn">
                  <Link to={'/Allscreen'}>Mouse →</Link></div>
              </div>
                <div className="col-3">
                  <img src="../img/GamePad/f310-gallery-1.png" alt="" />
                  <div className="btn">
                  <Link to={'/Allscreen'}>GamePad →</Link></div>
              </div>
                <div className="col-3">
                  <img src="../img/Keyboard/pro-x-keyboard.png" alt="" />
                  <div className="btn">
                  <Link to={'/Allscreen'}>Keyboard →</Link></div>
              </div>
              </div>
            </div>
          </div>
        </div>
        {/*Spesial*/}
        <div className="offer">
          <div className="small-container">
            <div className="row">
              <div className="col-2">
                <img src="../img/Mouse/glorious_gaming_mouse_model_o_17.png" alt="" />
              </div>
              <div className="col-2">
                <p>Exclusively Available on Tokopaedi</p>
                <h3>Glorious</h3>
                <small>Envisioned by a community of passionate gamers, 
                  <br />and developed by a team who accepts nothing less than 
                  <br />perfection - Model O will elevate your play to 
                  <br />unimaginable heights
                </small>
                <h1>MODEL O</h1>
                <a href className="btn">
                  <Link to={'/product/5fc6488a7275f30004b73508'} ><ShoppingCartOutlined /> Buy Now</Link>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*Lasted Product*/}
        <div className="lastedProduct">
          <div className="small-container">
            <div className="tittle">
              <h1>Recommend Product</h1>
            </div>
            <div className="row">
              {
                products.slice(4,8).map(product =>
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
            <div className="container">
              <div className="btn">
                <Link to={'/Allscreen'}>Show All Product →</Link>
              </div>
            </div>
          </div>
        </div>   
        </>
}

export default HomeScreen;