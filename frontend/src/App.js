import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import HomeScreen from './screen/HomeScreen'
import ProductScreen from './screen/ProductScreen'
import Allscreen from './screen/AllScreen'
import CartScreen from './screen/CartScreen';
import {
  UserOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
  InstagramOutlined,
  ProfileOutlined
} from '@ant-design/icons';
import SigninScreen from './screen/SigninScreen';
import RegisterScreen from './screen/RegisterScreen';
import ProductsScreen from './screen/ProductsScreen'
import { useSelector } from 'react-redux';
import ShippingScreen from './screen/ShippingScreen';
import PaymentScreen from './screen/PaymentScreen';
import PlaceOrderScreen from './screen/PlaceOrderScreen';

function App() {

  const userSignin = useSelector(state => state.userSignin);
  const {userInfo} = userSignin;

  return (
    <BrowserRouter>
      <div>
        <header>
          <div className="container">
            <div className="logo">
              <Link to="/">
                <img src="../img/paedyputih.png" alt="" />
              </Link>
            </div>
            <nav className="menu">
              <p>
                {
                  userInfo ? <Link to="/profile"><UserOutlined /><p>Hi, {userInfo.name}</p></Link>:
                  <Link to="/signin/:name">
                    <UserOutlined /><p>Sign-In</p>
                  </Link>
                }
              </p>
              <Link to="/placeorder">
                <ProfileOutlined />
              </Link>                
              <Link to="/cart">
                <ShoppingCartOutlined />
              </Link>
              <a href="/#">
                <SearchOutlined />
              </a>
            </nav>
          </div>
        </header>

        <Route path="/products" component={ProductsScreen} />
        <Route path="/shipping" component={ShippingScreen} />
        <Route path="/payment" component={PaymentScreen} />
        <Route path="/placeorder" component={PlaceOrderScreen} />
        <Route path="/signin" component={SigninScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/cart/:id?" component={CartScreen} />
        <Route path="/Allscreen" component={Allscreen} />
        <Route path="/" exact={true} component={HomeScreen} />

        
        {/*Brand*/}
        <div className="brands">
          <div className="small-container">
            <div className="row">
              <div className="col-5">
                <a href="https://www.pcgamingrace.com/">
                  <img src="../img/logo/logo_blue.png" alt="" />
                </a>
              </div>
              <div className="col-5">
                <a href="https://www.lg.com/id/gaming-monitors-ultragear">
                  <img src="../img/logo/logo-b2c.png" alt="" />
                </a>
              </div>
              <div className="col-5">
              <a href="https://id.msi.com/">
                <img src="../img/logo/msi_logo.png" alt="" />
              </a>
              </div>
              <div className="col-5">
                <a href="https://www.duckychannel.com.tw/en">
                  <img src="../img/logo/logo.png" alt="" />
                </a>
              </div>
              <div className="col-5">
                <a href="https://www.logitech.com/id-id">
                  <img src="../img/logo/logitechg-overlay.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*Footer*/}
        <div className="footer">
          <div className="small-container">
            <div className="row">
              <div className="footer-col-1">
                <Link to="/">
                  <img src="../img/paedyputih.png" alt="" />
                </Link>
              </div>
              <div className="footer-col-2">
                <h3>Developed By</h3>
                <div className="follow">
                  <a href="https://www.instagram.com/diat.08/">
                    <InstagramOutlined /> diat.08
                    <br />
                  </a>
                  <a href="https://www.instagram.com/adithyanuzpratama/">
                    <InstagramOutlined /> adithyanuzpratama
                    <br />
                  </a>
                  <a href="https://www.instagram.com/farid_maken/">
                    <InstagramOutlined /> farid_maken
                    <br />
                  </a>
                  <a href="https://www.instagram.com/diat.08/">
                    <InstagramOutlined /> fakriaziz
                    <br />
                  </a>
                  <a href="https://www.instagram.com/mivhiii/">
                    <InstagramOutlined /> mivhiii
                    <br />
                  </a>
                </div>
              </div>
            </div>
            <hr />
            <p className="copyright">Copyright 2020 - Tokopaedi</p>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
