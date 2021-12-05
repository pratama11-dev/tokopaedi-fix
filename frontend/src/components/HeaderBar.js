import React from 'react'
import { Link } from 'react-router-dom';
// import { logout } from './actions/userAction';
import { useSelector,useDispatch } from 'react-redux';

export default function HeaderBar() {
  const cart = useSelector(state => state.cart);

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
  const { cartItems } = cart;
  const dispatch = useDispatch();
  // const signoutHandler = () => {
  //   dispatch(logout());
  // };

  return (
    <div id="kt_header" className="header header-fixed">
      <div className="container-fluid d-flex align-items-stretch justify-content-between">
        <div className="header-menu-wrapper header-menu-wrapper-left" id="kt_header_menu_wrapper">
          <div id="kt_header_menu" className="header-menu header-menu-mobile header-menu-layout-default">
            <ul className="menu-nav">
              <li className="menu-item">
                <a href="/" className="brand-logo">
                  <img className="w-150px" alt="Logo" src="../img/paedyputih.png" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="topbar">
          <div className="dropdown" id="kt_quick_search_toggle">
            <div className="topbar-item" data-toggle="dropdown" data-offset="10px,0px">
              <div className="btn btn-icon btn-clean btn-lg btn-dropdown mr-1">
                <span className="svg-icon svg-icon-xl svg-icon-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <rect x="0" y="0" width="24" height="24"></rect>
                      <path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" fillRule="nonzero" opacity="0.3"></path>
                      <path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#000000" fillRule="nonzero"></path>
                    </g>
                  </svg>
                </span>
              </div>
            </div>
            <div className="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-anim-up dropdown-menu-lg">
              <div className="quick-search quick-search-dropdown" id="kt_quick_search_dropdown">
                <form method="get" className="quick-search-form">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <span className="svg-icon svg-icon-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                              <rect x="0" y="0" width="24" height="24"></rect>
                              <path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" fillRule="nonzero" opacity="0.3"></path>
                              <path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#000000" fillRule="nonzero"></path>
                            </g>
                          </svg>
                        </span>
                      </span>
                    </div>
                    <input type="text" className="form-control" placeholder="Search..." />
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="quick-search-close ki ki-close icon-sm text-muted"></i>
                      </span>
                    </div>
                  </div>
                </form>
                <div className="quick-search-wrapper scroll ps" data-scroll="true" data-height="325" data-mobile-height="200" style={{height: "325px", overflow: "hidden"}}><div className="ps__rail-x" style={{left: "0px", bottom: "0px"}}><div className="ps__thumb-x" tabIndex="0" style={{left: "0px", width: "0px"}}></div></div><div className="ps__rail-y" style={{top: "0px",right: "0px;"}}><div className="ps__thumb-y" tabIndex="0" style={{top: "0px", height: "0px"}}></div></div></div>
              </div>
            </div>
          </div>
          <div className="dropdown">
            <div className="topbar-item" data-toggle="dropdown" data-offset="10px,0px">
              <div className="btn btn-icon btn-clean btn-dropdown btn-lg mr-1 pulse pulse-primary">
                <span className="svg-icon svg-icon-xl svg-icon-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <rect x="0" y="0" width="24" height="24"></rect>
                      <path d="M2.56066017,10.6819805 L4.68198052,8.56066017 C5.26776695,7.97487373 6.21751442,7.97487373 6.80330086,8.56066017 L8.9246212,10.6819805 C9.51040764,11.267767 9.51040764,12.2175144 8.9246212,12.8033009 L6.80330086,14.9246212 C6.21751442,15.5104076 5.26776695,15.5104076 4.68198052,14.9246212 L2.56066017,12.8033009 C1.97487373,12.2175144 1.97487373,11.267767 2.56066017,10.6819805 Z M14.5606602,10.6819805 L16.6819805,8.56066017 C17.267767,7.97487373 18.2175144,7.97487373 18.8033009,8.56066017 L20.9246212,10.6819805 C21.5104076,11.267767 21.5104076,12.2175144 20.9246212,12.8033009 L18.8033009,14.9246212 C18.2175144,15.5104076 17.267767,15.5104076 16.6819805,14.9246212 L14.5606602,12.8033009 C13.9748737,12.2175144 13.9748737,11.267767 14.5606602,10.6819805 Z" fill="#000000" opacity="0.3"></path>
                      <path d="M8.56066017,16.6819805 L10.6819805,14.5606602 C11.267767,13.9748737 12.2175144,13.9748737 12.8033009,14.5606602 L14.9246212,16.6819805 C15.5104076,17.267767 15.5104076,18.2175144 14.9246212,18.8033009 L12.8033009,20.9246212 C12.2175144,21.5104076 11.267767,21.5104076 10.6819805,20.9246212 L8.56066017,18.8033009 C7.97487373,18.2175144 7.97487373,17.267767 8.56066017,16.6819805 Z M8.56066017,4.68198052 L10.6819805,2.56066017 C11.267767,1.97487373 12.2175144,1.97487373 12.8033009,2.56066017 L14.9246212,4.68198052 C15.5104076,5.26776695 15.5104076,6.21751442 14.9246212,6.80330086 L12.8033009,8.9246212 C12.2175144,9.51040764 11.267767,9.51040764 10.6819805,8.9246212 L8.56066017,6.80330086 C7.97487373,6.21751442 7.97487373,5.26776695 8.56066017,4.68198052 Z" fill="#000000"></path>
                    </g>
                  </svg>
                </span>
                <span className="pulse-ring"></span>
              </div>
            </div>
            <div className="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-anim-up dropdown-menu-lg">
              <form>
                <div className="d-flex flex-column pt-12 bgi-size-cover bgi-no-repeat rounded-top" style={{backgroundImage: 'url(https://metronic-assets.s3-ap-southeast-1.amazonaws.com/media/misc/bg-1.jpg)'}}>
                  <h4 className="d-flex flex-center rounded-top">
                    <span className="text-white">User Notifications</span>
                    <span className="btn btn-text btn-success btn-sm font-weight-bold btn-font-md ml-2">23 new</span>
                  </h4>
                  <ul className="nav nav-bold nav-tabs nav-tabs-line nav-tabs-line-3x nav-tabs-line-transparent-white nav-tabs-line-active-border-success mt-3 px-8" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active show" data-toggle="tab" href="#topbar_notifications_notifications">Alerts</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#topbar_notifications_events">Events</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#topbar_notifications_logs">Logs</a>
                    </li>
                  </ul>
                </div>
                  <div className="tab-content">
                    <div className="tab-pane active show p-8" id="topbar_notifications_notifications" role="tabpanel">
                      <div className="scroll pr-7 mr-n7 ps" data-scroll="true" data-height="300" data-mobile-height="200" style={{height: "300px", overflow: "hidden"}}>
                        <div className="d-flex align-items-center mb-6">
                          <div className="symbol symbol-40 symbol-light-primary mr-5">
                            <span className="symbol-label">
                              <span className="svg-icon svg-icon-lg svg-icon-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                  <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <rect x="0" y="0" width="24" height="24"></rect>
                                    <path d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z" fill="#000000"></path>
                                    <rect fill="#000000" opacity="0.3" transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519)" x="16.3255682" y="2.94551858" width="3" height="18" rx="1"></rect>
                                  </g>
                                </svg>
                              </span>
                            </span>
                          </div>
                          <div className="d-flex flex-column font-weight-bold">
                            <a href="#" className="text-dark text-hover-primary mb-1 font-size-lg">Cool App</a>
                            <span className="text-muted">Marketing campaign planning</span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center mb-6">
                          <div className="symbol symbol-40 symbol-light-warning mr-5">
                            <span className="symbol-label">
                              <span className="svg-icon svg-icon-lg svg-icon-warning">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                  <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <rect x="0" y="0" width="24" height="24"></rect>
                                    <path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fillRule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)"></path>
                                    <path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fillRule="nonzero" opacity="0.3"></path>
                                  </g>
                                </svg>
                              </span>
                            </span>
                          </div>
                          <div className="d-flex flex-column font-weight-bold">
                            <a href="#" className="text-dark-75 text-hover-primary mb-1 font-size-lg">Awesome SAAS</a>
                            <span className="text-muted">Project status update meeting</span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center mb-6">
                          <div className="symbol symbol-40 symbol-light-success mr-5">
                            <span className="symbol-label">
                              <span className="svg-icon svg-icon-lg svg-icon-success">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                  <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <rect x="0" y="0" width="24" height="24"></rect>
                                    <path d="M16,15.6315789 L16,12 C16,10.3431458 14.6568542,9 13,9 L6.16183229,9 L6.16183229,5.52631579 C6.16183229,4.13107011 7.29290239,3 8.68814808,3 L20.4776218,3 C21.8728674,3 23.0039375,4.13107011 23.0039375,5.52631579 L23.0039375,13.1052632 L23.0206157,17.786793 C23.0215995,18.0629336 22.7985408,18.2875874 22.5224001,18.2885711 C22.3891754,18.2890457 22.2612702,18.2363324 22.1670655,18.1421277 L19.6565168,15.6315789 L16,15.6315789 Z" fill="#000000"></path>
                                    <path d="M1.98505595,18 L1.98505595,13 C1.98505595,11.8954305 2.88048645,11 3.98505595,11 L11.9850559,11 C13.0896254,11 13.9850559,11.8954305 13.9850559,13 L13.9850559,18 C13.9850559,19.1045695 13.0896254,20 11.9850559,20 L4.10078614,20 L2.85693427,21.1905292 C2.65744295,21.3814685 2.34093638,21.3745358 2.14999706,21.1750444 C2.06092565,21.0819836 2.01120804,20.958136 2.01120804,20.8293182 L2.01120804,18.32426 C1.99400175,18.2187196 1.98505595,18.1104045 1.98505595,18 Z M6.5,14 C6.22385763,14 6,14.2238576 6,14.5 C6,14.7761424 6.22385763,15 6.5,15 L11.5,15 C11.7761424,15 12,14.7761424 12,14.5 C12,14.2238576 11.7761424,14 11.5,14 L6.5,14 Z M9.5,16 C9.22385763,16 9,16.2238576 9,16.5 C9,16.7761424 9.22385763,17 9.5,17 L11.5,17 C11.7761424,17 12,16.7761424 12,16.5 C12,16.2238576 11.7761424,16 11.5,16 L9.5,16 Z" fill="#000000" opacity="0.3"></path>
                                  </g>
                                </svg>
                              </span>
                            </span>
                          </div>
                          <div className="d-flex flex-column font-weight-bold">
                            <a href="#" className="text-dark text-hover-primary mb-1 font-size-lg">Claudy Sys</a>
                            <span className="text-muted">Project Deployment &amp; Launch</span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center mb-6">
                          <div className="symbol symbol-40 symbol-light-danger mr-5">
                            <span className="symbol-label">
                              <span className="svg-icon svg-icon-lg svg-icon-danger">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                  <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <rect x="0" y="0" width="24" height="24"></rect>
                                    <path d="M11.7573593,15.2426407 L8.75735931,15.2426407 C8.20507456,15.2426407 7.75735931,15.6903559 7.75735931,16.2426407 C7.75735931,16.7949254 8.20507456,17.2426407 8.75735931,17.2426407 L11.7573593,17.2426407 L11.7573593,18.2426407 C11.7573593,19.3472102 10.8619288,20.2426407 9.75735931,20.2426407 L5.75735931,20.2426407 C4.65278981,20.2426407 3.75735931,19.3472102 3.75735931,18.2426407 L3.75735931,14.2426407 C3.75735931,13.1380712 4.65278981,12.2426407 5.75735931,12.2426407 L9.75735931,12.2426407 C10.8619288,12.2426407 11.7573593,13.1380712 11.7573593,14.2426407 L11.7573593,15.2426407 Z" fill="#000000" opacity="0.3" transform="translate(7.757359, 16.242641) rotate(-45.000000) translate(-7.757359, -16.242641)"></path>
                                    <path d="M12.2426407,8.75735931 L15.2426407,8.75735931 C15.7949254,8.75735931 16.2426407,8.30964406 16.2426407,7.75735931 C16.2426407,7.20507456 15.7949254,6.75735931 15.2426407,6.75735931 L12.2426407,6.75735931 L12.2426407,5.75735931 C12.2426407,4.65278981 13.1380712,3.75735931 14.2426407,3.75735931 L18.2426407,3.75735931 C19.3472102,3.75735931 20.2426407,4.65278981 20.2426407,5.75735931 L20.2426407,9.75735931 C20.2426407,10.8619288 19.3472102,11.7573593 18.2426407,11.7573593 L14.2426407,11.7573593 C13.1380712,11.7573593 12.2426407,10.8619288 12.2426407,9.75735931 L12.2426407,8.75735931 Z" fill="#000000" transform="translate(16.242641, 7.757359) rotate(-45.000000) translate(-16.242641, -7.757359)"></path>
                                    <path d="M5.89339828,3.42893219 C6.44568303,3.42893219 6.89339828,3.87664744 6.89339828,4.42893219 L6.89339828,6.42893219 C6.89339828,6.98121694 6.44568303,7.42893219 5.89339828,7.42893219 C5.34111353,7.42893219 4.89339828,6.98121694 4.89339828,6.42893219 L4.89339828,4.42893219 C4.89339828,3.87664744 5.34111353,3.42893219 5.89339828,3.42893219 Z M11.4289322,5.13603897 C11.8194565,5.52656326 11.8194565,6.15972824 11.4289322,6.55025253 L10.0147186,7.96446609 C9.62419433,8.35499039 8.99102936,8.35499039 8.60050506,7.96446609 C8.20998077,7.5739418 8.20998077,6.94077682 8.60050506,6.55025253 L10.0147186,5.13603897 C10.4052429,4.74551468 11.0384079,4.74551468 11.4289322,5.13603897 Z M0.600505063,5.13603897 C0.991029355,4.74551468 1.62419433,4.74551468 2.01471863,5.13603897 L3.42893219,6.55025253 C3.81945648,6.94077682 3.81945648,7.5739418 3.42893219,7.96446609 C3.0384079,8.35499039 2.40524292,8.35499039 2.01471863,7.96446609 L0.600505063,6.55025253 C0.209980772,6.15972824 0.209980772,5.52656326 0.600505063,5.13603897 Z" fill="#000000" opacity="0.3" transform="translate(6.014719, 5.843146) rotate(-45.000000) translate(-6.014719, -5.843146)"></path>
                                    <path d="M17.9142136,15.4497475 C18.4664983,15.4497475 18.9142136,15.8974627 18.9142136,16.4497475 L18.9142136,18.4497475 C18.9142136,19.0020322 18.4664983,19.4497475 17.9142136,19.4497475 C17.3619288,19.4497475 16.9142136,19.0020322 16.9142136,18.4497475 L16.9142136,16.4497475 C16.9142136,15.8974627 17.3619288,15.4497475 17.9142136,15.4497475 Z M23.4497475,17.1568542 C23.8402718,17.5473785 23.8402718,18.1805435 23.4497475,18.5710678 L22.0355339,19.9852814 C21.6450096,20.3758057 21.0118446,20.3758057 20.6213203,19.9852814 C20.2307961,19.5947571 20.2307961,18.9615921 20.6213203,18.5710678 L22.0355339,17.1568542 C22.4260582,16.76633 23.0592232,16.76633 23.4497475,17.1568542 Z M12.6213203,17.1568542 C13.0118446,16.76633 13.6450096,16.76633 14.0355339,17.1568542 L15.4497475,18.5710678 C15.8402718,18.9615921 15.8402718,19.5947571 15.4497475,19.9852814 C15.0592232,20.3758057 14.4260582,20.3758057 14.0355339,19.9852814 L12.6213203,18.5710678 C12.2307961,18.1805435 12.2307961,17.5473785 12.6213203,17.1568542 Z" fill="#000000" opacity="0.3" transform="translate(18.035534, 17.863961) scale(1, -1) rotate(45.000000) translate(-18.035534, -17.863961)"></path>
                                  </g>
                                </svg>
                              </span>
                            </span>
                          </div>
                          <div className="d-flex flex-column font-weight-bold">
                            <a href="#" className="text-dark text-hover-primary mb-1 font-size-lg">Trilo Service</a>
                            <span className="text-muted">Analytics &amp; Requirement Study</span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center mb-6">
                          <div className="symbol symbol-40 symbol-light-info mr-5">
                            <span className="symbol-label">
                              <span className="svg-icon svg-icon-lg svg-icon-info">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                  <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <rect x="0" y="0" width="24" height="24"></rect>
                                    <path d="M4,4 L11.6314229,2.5691082 C11.8750185,2.52343403 12.1249815,2.52343403 12.3685771,2.5691082 L20,4 L20,13.2830094 C20,16.2173861 18.4883464,18.9447835 16,20.5 L12.5299989,22.6687507 C12.2057287,22.8714196 11.7942713,22.8714196 11.4700011,22.6687507 L8,20.5 C5.51165358,18.9447835 4,16.2173861 4,13.2830094 L4,4 Z" fill="#000000" opacity="0.3"></path>
                                    <path d="M12,11 C10.8954305,11 10,10.1045695 10,9 C10,7.8954305 10.8954305,7 12,7 C13.1045695,7 14,7.8954305 14,9 C14,10.1045695 13.1045695,11 12,11 Z" fill="#000000" opacity="0.3"></path>
                                    <path d="M7.00036205,16.4995035 C7.21569918,13.5165724 9.36772908,12 11.9907452,12 C14.6506758,12 16.8360465,13.4332455 16.9988413,16.5 C17.0053266,16.6221713 16.9988413,17 16.5815,17 C14.5228466,17 11.463736,17 7.4041679,17 C7.26484009,17 6.98863236,16.6619875 7.00036205,16.4995035 Z" fill="#000000" opacity="0.3"></path>
                                  </g>
                                </svg>
                              </span>
                            </span>
                          </div>
                          <div className="d-flex flex-column font-weight-bold">
                            <a href="#" className="text-dark text-hover-primary mb-1 font-size-lg">Bravia SAAS</a>
                            <span className="text-muted">Reporting Application</span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center mb-6">
                          <div className="symbol symbol-40 symbol-light-danger mr-5">
                            <span className="symbol-label">
                              <span className="svg-icon svg-icon-lg svg-icon-danger">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                  <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <rect x="0" y="0" width="24" height="24"></rect>
                                    <path d="M21,12.0829584 C20.6747915,12.0283988 20.3407122,12 20,12 C16.6862915,12 14,14.6862915 14,18 C14,18.3407122 14.0283988,18.6747915 14.0829584,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,8 C3,6.8954305 3.8954305,6 5,6 L19,6 C20.1045695,6 21,6.8954305 21,8 L21,12.0829584 Z M18.1444251,7.83964668 L12,11.1481833 L5.85557487,7.83964668 C5.4908718,7.6432681 5.03602525,7.77972206 4.83964668,8.14442513 C4.6432681,8.5091282 4.77972206,8.96397475 5.14442513,9.16035332 L11.6444251,12.6603533 C11.8664074,12.7798822 12.1335926,12.7798822 12.3555749,12.6603533 L18.8555749,9.16035332 C19.2202779,8.96397475 19.3567319,8.5091282 19.1603533,8.14442513 C18.9639747,7.77972206 18.5091282,7.6432681 18.1444251,7.83964668 Z" fill="#000000"></path>
                                    <circle fill="#000000" opacity="0.3" cx="19.5" cy="17.5" r="2.5"></circle>
                                  </g>
                                </svg>
                              </span>
                            </span>
                          </div>
                          <div className="d-flex flex-column font-weight-bold">
                            <a href="#" className="text-dark text-hover-primary mb-1 font-size-lg">Express Wind</a>
                            <span className="text-muted">Software Analytics &amp; Design</span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center mb-6">
                          <div className="symbol symbol-40 symbol-light-success mr-5">
                            <span className="symbol-label">
                              <span className="svg-icon svg-icon-lg svg-icon-success">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                  <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <rect x="0" y="0" width="24" height="24"></rect>
                                    <path d="M5,5 L5,15 C5,15.5948613 5.25970314,16.1290656 5.6719139,16.4954176 C5.71978107,16.5379595 5.76682388,16.5788906 5.81365532,16.6178662 C5.82524933,16.6294602 15,7.45470952 15,7.45470952 C15,6.9962515 15,6.17801499 15,5 L5,5 Z M5,3 L15,3 C16.1045695,3 17,3.8954305 17,5 L17,15 C17,17.209139 15.209139,19 13,19 L7,19 C4.790861,19 3,17.209139 3,15 L3,5 C3,3.8954305 3.8954305,3 5,3 Z" fill="#000000" fillRule="nonzero" transform="translate(10.000000, 11.000000) rotate(-315.000000) translate(-10.000000, -11.000000)"></path>
                                    <path d="M20,22 C21.6568542,22 23,20.6568542 23,19 C23,17.8954305 22,16.2287638 20,14 C18,16.2287638 17,17.8954305 17,19 C17,20.6568542 18.3431458,22 20,22 Z" fill="#000000" opacity="0.3"></path>
                                  </g>
                                </svg>
                              </span>
                            </span>
                          </div>
                          <div className="d-flex flex-column font-weight-bold">
                            <a href="#" className="text-dark text-hover-primary mb-1 font-size-lg">Bruk Fitness</a>
                            <span className="text-muted">Web Design &amp; Development</span>
                          </div>
                        </div>
                      <div className="ps__rail-x" style={{left: "0px", bottom: "0px"}}><div className="ps__thumb-x" tabIndex="0" style={{left: "0px", width: "0px"}}></div></div><div className="ps__rail-y" style={{top: "0px", right: "0px"}}><div className="ps__thumb-y" tabIndex="0" style={{top: "0px", height: "0px;"}}></div></div></div>
                      <div className="d-flex flex-center pt-7">
                        <a href="#" className="btn btn-light-primary font-weight-bold text-center">See All</a>
                      </div>
                    </div>
                    <div className="tab-pane" id="topbar_notifications_events" role="tabpanel">
                      <div className="navi navi-hover scroll my-4 ps" data-scroll="true" data-height="300" data-mobile-height="200" style={{height: "300px", overflow: "hidden"}}>
                        <a href="#" className="navi-item">
                          <div className="navi-link">
                            <div className="navi-icon mr-2">
                              <i className="flaticon2-line-chart text-success"></i>
                            </div>
                            <div className="navi-text">
                              <div className="font-weight-bold">New report has been received</div>
                              <div className="text-muted">23 hrs ago</div>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="navi-item">
                          <div className="navi-link">
                            <div className="navi-icon mr-2">
                              <i className="flaticon2-paper-plane text-danger"></i>
                            </div>
                            <div className="navi-text">
                              <div className="font-weight-bold">Finance report has been generated</div>
                              <div className="text-muted">25 hrs ago</div>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="navi-item">
                          <div className="navi-link">
                            <div className="navi-icon mr-2">
                              <i className="flaticon2-user flaticon2-line- text-success"></i>
                            </div>
                            <div className="navi-text">
                              <div className="font-weight-bold">New order has been received</div>
                              <div className="text-muted">2 hrs ago</div>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="navi-item">
                          <div className="navi-link">
                            <div className="navi-icon mr-2">
                              <i className="flaticon2-pin text-primary"></i>
                            </div>
                            <div className="navi-text">
                              <div className="font-weight-bold">New customer is registered</div>
                              <div className="text-muted">3 hrs ago</div>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="navi-item">
                          <div className="navi-link">
                            <div className="navi-icon mr-2">
                              <i className="flaticon2-sms text-danger"></i>
                            </div>
                            <div className="navi-text">
                              <div className="font-weight-bold">Application has been approved</div>
                              <div className="text-muted">3 hrs ago</div>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="navi-item">
                          <div className="navi-link">
                            <div className="navi-icon mr-2">
                              <i className="flaticon2-pie-chart-3 text-warning"></i>
                            </div>
                            <div className="navinavinavi-text">
                              <div className="font-weight-bold">New file has been uploaded</div>
                              <div className="text-muted">5 hrs ago</div>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="navi-item">
                          <div className="navi-link">
                            <div className="navi-icon mr-2">
                              <i className="flaticon-pie-chart-1 text-info"></i>
                            </div>
                            <div className="navi-text">
                              <div className="font-weight-bold">New user feedback received</div>
                              <div className="text-muted">8 hrs ago</div>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="navi-item">
                          <div className="navi-link">
                            <div className="navi-icon mr-2">
                              <i className="flaticon2-settings text-success"></i>
                            </div>
                            <div className="navi-text">
                              <div className="font-weight-bold">System reboot has been successfully completed</div>
                              <div className="text-muted">12 hrs ago</div>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="navi-item">
                          <div className="navi-link">
                            <div className="navi-icon mr-2">
                              <i className="flaticon-safe-shield-protection text-primary"></i>
                            </div>
                            <div className="navi-text">
                              <div className="font-weight-bold">New order has been placed</div>
                              <div className="text-muted">15 hrs ago</div>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="navi-item">
                          <div className="navi-link">
                            <div className="navi-icon mr-2">
                              <i className="flaticon2-notification text-primary"></i>
                            </div>
                            <div className="navi-text">
                              <div className="font-weight-bold">Company meeting canceled</div>
                              <div className="text-muted">19 hrs ago</div>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="navi-item">
                          <div className="navi-link">
                            <div className="navi-icon mr-2">
                              <i className="flaticon2-fax text-success"></i>
                            </div>
                            <div className="navi-text">
                              <div className="font-weight-bold">New report has been received</div>
                              <div className="text-muted">23 hrs ago</div>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="navi-item">
                          <div className="navi-link">
                            <div className="navi-icon mr-2">
                              <i className="flaticon-download-1 text-danger"></i>
                            </div>
                            <div className="navi-text">
                              <div className="font-weight-bold">Finance report has been generated</div>
                              <div className="text-muted">25 hrs ago</div>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="navi-item">
                          <div className="navi-link">
                            <div className="navi-icon mr-2">
                              <i className="flaticon-security text-warning"></i>
                            </div>
                            <div className="navi-text">
                              <div className="font-weight-bold">New customer comment recieved</div>
                              <div className="text-muted">2 days ago</div>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="navi-item">
                          <div className="navi-link">
                            <div className="navi-icon mr-2">
                              <i className="flaticon2-analytics-1 text-success"></i>
                            </div>
                            <div className="navi-text">
                              <div className="font-weight-bold">New customer is registered</div>
                              <div className="text-muted">3 days ago</div>
                            </div>
                          </div>
                        </a>
                      <div className="ps__rail-x" style={{left: "0px", bottom: "0px;"}}><div className="ps__thumb-x" tabIndex="0" style={{left: "0px", width: "0px"}}></div></div><div className="ps__rail-y" style={{top: "0px", right: "0px;"}}><div className="ps__thumb-y" tabIndex="0" style={{top: "0px", height: "0px"}}></div></div></div>
                    </div>
                    <div className="tab-pane" id="topbar_notifications_logs" role="tabpanel">
                      <div className="d-flex flex-center text-center text-muted min-h-200px">All caught up! 
                      <p>No new notifications.</p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="topbar-item">
            {/* <div className="btn btn-icon btn-clean btn-dropdown btn-lg mr-1" id="kt_quick_cart_toggle"> */}
            <div className="btn btn-icon btn-clean btn-dropdown btn-lg mr-1" id="kt_quick_cart_toggle">
              <span className="svg-icon svg-icon-xl svg-icon-primary">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                  <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <rect x="0" y="0" width="24" height="24"></rect>
                    <path d="M12,4.56204994 L7.76822128,9.6401844 C7.4146572,10.0644613 6.7840925,10.1217854 6.3598156,9.76822128 C5.9355387,9.4146572 5.87821464,8.7840925 6.23177872,8.3598156 L11.2317787,2.3598156 C11.6315738,1.88006147 12.3684262,1.88006147 12.7682213,2.3598156 L17.7682213,8.3598156 C18.1217854,8.7840925 18.0644613,9.4146572 17.6401844,9.76822128 C17.2159075,10.1217854 16.5853428,10.0644613 16.2317787,9.6401844 L12,4.56204994 Z" fill="#000000" fillRule="nonzero" opacity="0.3"></path>
                    <path d="M3.5,9 L20.5,9 C21.0522847,9 21.5,9.44771525 21.5,10 C21.5,10.132026 21.4738562,10.2627452 21.4230769,10.3846154 L17.7692308,19.1538462 C17.3034221,20.271787 16.2111026,21 15,21 L9,21 C7.78889745,21 6.6965779,20.271787 6.23076923,19.1538462 L2.57692308,10.3846154 C2.36450587,9.87481408 2.60558331,9.28934029 3.11538462,9.07692308 C3.23725479,9.02614384 3.36797398,9 3.5,9 Z M12,17 C13.1045695,17 14,16.1045695 14,15 C14,13.8954305 13.1045695,13 12,13 C10.8954305,13 10,13.8954305 10,15 C10,16.1045695 10.8954305,17 12,17 Z" fill="#000000"></path>
                  </g>
                </svg>
              </span>
            </div>
          </div>
          <div className="topbar-item">
            {userInfo ? (
              <div className="btn btn-icon btn-icon-mobile w-auto btn-clean d-flex align-items-center btn-lg px-2" id="kt_quick_user_toggle">
                <span className="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1">Hi,</span>
                <span className="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3">{userInfo.name}</span>
                <span className="symbol symbol-lg-35 symbol-25 symbol-light-success">
                  <span className="symbol-label font-size-h5 font-weight-bold">{userInfo.name.substring(0,1)}</span>
                </span>
              </div>
            ) :(
              <Link to="/signin">
                <div className="btn btn-icon btn-icon-mobile w-auto btn-clean d-flex align-items-center btn-lg px-2">
                  <span className="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1">Sign In</span>
                </div>
              </Link>
            )}
          </div>
          {/* <nav className="menu">
            {userInfo ? (
            <div className="dropdown">
              <Link to="#">
                <UserOutlined /><p>Hi, {userInfo.name}</p>{' '}
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
                  <UserOutlined /><p>Only Admin </p><i className="fa fa-caret-down"></i>
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
            <Link to="/cart">
              <ShoppingCartOutlined /> 
              {cartItems.length > 0 && (
              <span className="badge">{cartItems.length}</span>
            )}
            </Link>
          </nav> */}
        </div>
      </div>
    </div>
  )
}
