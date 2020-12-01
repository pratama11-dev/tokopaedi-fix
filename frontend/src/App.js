import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { logout } from './actions/userAction';
import AdminRoute from './components/AdminRoute';
import PrivateRoute from './components/PrivateRoute';
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
import { useSelector,useDispatch } from 'react-redux';
import SigninScreen from './screen/SigninScreen';
import RegisterScreen from './screen/RegisterScreen';
import ProductsScreen from './screen/ProductsScreen'
import ProductListScreen from './screen/ProductListScreen'
import ShippingScreen from './screen/ShippingScreen';
import PaymentScreen from './screen/PaymentScreen';
import PlaceOrderScreen from './screen/PlaceOrderScreen';
import SearchScreen from './screen/SearchScreen';
import OrderHistoryScreen from './screen/OrderHistoryScreen';
import ProfileScreen from './screen/ProfileScreen';
import OrderListScreen from './screen/OrderListScreen';
import UserListScreen from './screen/UserListScreen';
import UserEditScreen from './screen/UserEditScreen';
import OrderScreen from './screen/OrderScreen';

function App() {

  const cart = useSelector(state => state.cart);

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
  const { cartItems } = cart;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(logout());
  };


  return (
    <BrowserRouter>
        <header>
          <div className="container">
            <div className="logo">
              <Link to="/">
                <img src="../img/paedyputih.png" alt="" />
              </Link>
            </div>
            <nav className="menu">
                {userInfo ? (
                <div className="dropdown">
                  <Link to="#">
                    <UserOutlined /><p>Hi, {userInfo.name}</p><i className="fa fa-caret-down"></i>{' '}
                  </Link>
                  <ul className="dropdown-content">
                    <li>
                      <Link to="/profile"><p>User Profile |</p></Link>
                    </li>
                    <li>
                      <Link to="/orderhistory"><p>Order History |</p></Link>
                    </li>
                    <li>
                      <Link to="#signout" onClick={signoutHandler}>
                        <p>Sign Out |</p>
                      </Link>
                    </li>
                  </ul>
                </div>
                ) : (
                  <Link to="/signin"><UserOutlined /><p>Sign In</p></Link>
                )}
                {userInfo && userInfo.isAdmin && (
                  <div className="dropdown">
                    <Link to="#admin">
                      <UserOutlined /><p>Hi,{userInfo.name} </p><i className="fa fa-caret-down"></i>
                    </Link>
                    <ul className="dropdown-content">
                      <li>
                        <Link to="/dashboard"><p>Dashboard  |</p></Link>
                      </li>
                      <li>
                        <Link to="/products"><p>Products  |</p></Link>
                      </li>
                      <li>
                        <Link to="/orderlist"><p>Orders |</p></Link>
                      </li>
                      <li>
                        <Link to="/userlist"><p>Users</p></Link>
                      </li>
                    </ul>
                  </div>
                )}
              <Link to="/placeorder">
                <ProfileOutlined />
              </Link>                
              <Link to="/cart">
                <ShoppingCartOutlined /> 
                {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
              </Link>
              {/* <a href="/#">
                <SearchOutlined />
              </a> */}
            </nav>
          </div>
        </header>

        <main>
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

            
          <Route path="/order/:id" component={OrderScreen}></Route>
          <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
          <Route
            path="/search/name/:name?"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category/name/:name"
            component={SearchScreen}
            exact
          ></Route>
          <PrivateRoute
            path="/profile"
            component={ProfileScreen}
          ></PrivateRoute>
          <AdminRoute
            path="/productlist"
            component={ProductListScreen}
            exact
          ></AdminRoute>
          <AdminRoute
            path="/orderlist"
            component={OrderListScreen}
            exact
          ></AdminRoute>
          <AdminRoute path="/userlist" component={UserListScreen}></AdminRoute>
          <AdminRoute
            path="/user/:id/edit"
            component={UserEditScreen}
          ></AdminRoute>
        </main>

        <footer>
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
        </footer>
    </BrowserRouter>
  );
}

export default App;
