import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../actions/userAction';

export default function UserPanel() {

	const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
	const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(logout());
  }

  return (
		<div id="kt_quick_user" className="offcanvas offcanvas-right p-10">
			{userInfo ? (<>
				<div className="offcanvas-header d-flex align-items-center justify-content-between pb-5" kt-hidden-height="40">
					<h3 className="font-weight-bold m-0">User Profile 
						<small className="text-muted font-size-sm ml-2">12 messages</small>
					</h3>
					<a href="#" className="btn btn-xs btn-icon btn-light btn-hover-primary" id="kt_quick_user_close">
						<i className="ki ki-close icon-xs text-muted"></i>
					</a>
				</div>
				<div className="offcanvas-content pr-5 mr-n5 scroll ps ps--active-y" style={{height: "821px", overflow: "hidden"}}>
					<div className="d-flex align-items-center mt-5">
						<div className="symbol symbol-100 mr-5">
							<div className="symbol-label" style={{backgroundImage:"url('https://metronic-assets.s3-ap-southeast-1.amazonaws.com/media/users/blank.png')"}}></div>
							<i className="symbol-badge bg-success"></i>
						</div>
						<div className="d-flex flex-column">
							<a href="#" className="font-weight-bold font-size-h5 text-dark-75 text-hover-primary">{userInfo.name}</a>
							<div className="navi mt-2">
								<a href="#" className="navi-item">
									<span className="navi-link p-0 pb-2">
										<span className="navi-icon mr-1">
											<span className="svg-icon svg-icon-lg svg-icon-primary">
												<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
													<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
														<rect x="0" y="0" width="24" height="24"></rect>
														<path d="M21,12.0829584 C20.6747915,12.0283988 20.3407122,12 20,12 C16.6862915,12 14,14.6862915 14,18 C14,18.3407122 14.0283988,18.6747915 14.0829584,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,8 C3,6.8954305 3.8954305,6 5,6 L19,6 C20.1045695,6 21,6.8954305 21,8 L21,12.0829584 Z M18.1444251,7.83964668 L12,11.1481833 L5.85557487,7.83964668 C5.4908718,7.6432681 5.03602525,7.77972206 4.83964668,8.14442513 C4.6432681,8.5091282 4.77972206,8.96397475 5.14442513,9.16035332 L11.6444251,12.6603533 C11.8664074,12.7798822 12.1335926,12.7798822 12.3555749,12.6603533 L18.8555749,9.16035332 C19.2202779,8.96397475 19.3567319,8.5091282 19.1603533,8.14442513 C18.9639747,7.77972206 18.5091282,7.6432681 18.1444251,7.83964668 Z" fill="#000000"></path>
														<circle fill="#000000" opacity="0.3" cx="19.5" cy="17.5" r="2.5"></circle>
													</g>
												</svg>
											</span>
										</span>
										<span className="navi-text text-muted text-hover-primary">{userInfo.email}</span>
									</span>
								</a>
								<Link to="#signout" onClick={signoutHandler} className="btn btn-sm btn-light-primary font-weight-bolder py-2 px-5">Sign Out</Link>
								{/* <a className="btn btn-sm btn-light-primary font-weight-bolder py-2 px-5">Sign Out</a> */}
							</div>
						</div>
					</div>
					<div className="separator separator-dashed mt-8 mb-5"></div>
					<div className="navi navi-spacer-x-0 p-0">
						<a href="/profile" className="navi-item">
							<div className="navi-link">
								<div className="symbol symbol-40 bg-light mr-3">
									<div className="symbol-label">
										<span className="svg-icon svg-icon-md svg-icon-success">
											<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
												<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
													<rect x="0" y="0" width="24" height="24"></rect>
													<path d="M13.2070325,4 C13.0721672,4.47683179 13,4.97998812 13,5.5 C13,8.53756612 15.4624339,11 18.5,11 C19.0200119,11 19.5231682,10.9278328 20,10.7929675 L20,17 C20,18.6568542 18.6568542,20 17,20 L7,20 C5.34314575,20 4,18.6568542 4,17 L4,7 C4,5.34314575 5.34314575,4 7,4 L13.2070325,4 Z" fill="#000000"></path>
													<circle fill="#000000" opacity="0.3" cx="18.5" cy="5.5" r="2.5"></circle>
												</g>
											</svg>
										</span>
									</div>
								</div>
								<div className="navi-text">
									<a href="/profile" className="font-weight-bold">My Profile</a>
									<div className="text-muted">Account settings and more 
									<span className="label label-light-danger label-inline font-weight-bold">update</span></div>
								</div>
							</div>
						</a>
						<a href="/orderhistory" className="navi-item">
							<div className="navi-link">
								<div className="symbol symbol-40 bg-light mr-3">
									<div className="symbol-label">
										<span className="svg-icon svg-icon-md svg-icon-warning">
											<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
												<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
													<rect x="0" y="0" width="24" height="24"></rect>
													<rect fill="#000000" opacity="0.3" x="12" y="4" width="3" height="13" rx="1.5"></rect>
													<rect fill="#000000" opacity="0.3" x="7" y="9" width="3" height="8" rx="1.5"></rect>
													<path d="M5,19 L20,19 C20.5522847,19 21,19.4477153 21,20 C21,20.5522847 20.5522847,21 20,21 L4,21 C3.44771525,21 3,20.5522847 3,20 L3,4 C3,3.44771525 3.44771525,3 4,3 C4.55228475,3 5,3.44771525 5,4 L5,19 Z" fill="#000000" fillRule="nonzero"></path>
													<rect fill="#000000" opacity="0.3" x="17" y="11" width="3" height="6" rx="1.5"></rect>
												</g>
											</svg>
										</span>
									</div>
								</div>
								<div className="navi-text">
									<a href="/orderhistory" className="font-weight-bold">Order History</a>
									<div className="text-muted">List your order</div>
								</div>
							</div>
						</a>
						<div className="separator separator-dashed mt-8 mb-5"></div>
						{userInfo && userInfo.isAdmin && (<>
							<a href="/products" className="navi-item">
								<div className="navi-link">
									<div className="symbol symbol-40 bg-light mr-3">
										<div className="symbol-label">
											<span className="svg-icon svg-icon-md svg-icon-danger">
												<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
													<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
														<polygon points="0 0 24 0 24 24 0 24"></polygon>
														<path d="M4.85714286,1 L11.7364114,1 C12.0910962,1 12.4343066,1.12568431 12.7051108,1.35473959 L17.4686994,5.3839416 C17.8056532,5.66894833 18,6.08787823 18,6.52920201 L18,19.0833333 C18,20.8738751 17.9795521,21 16.1428571,21 L4.85714286,21 C3.02044787,21 3,20.8738751 3,19.0833333 L3,2.91666667 C3,1.12612489 3.02044787,1 4.85714286,1 Z M8,12 C7.44771525,12 7,12.4477153 7,13 C7,13.5522847 7.44771525,14 8,14 L15,14 C15.5522847,14 16,13.5522847 16,13 C16,12.4477153 15.5522847,12 15,12 L8,12 Z M8,16 C7.44771525,16 7,16.4477153 7,17 C7,17.5522847 7.44771525,18 8,18 L11,18 C11.5522847,18 12,17.5522847 12,17 C12,16.4477153 11.5522847,16 11,16 L8,16 Z" fill="#000000" fillRule="nonzero" opacity="0.3"></path>
														<path d="M6.85714286,3 L14.7364114,3 C15.0910962,3 15.4343066,3.12568431 15.7051108,3.35473959 L20.4686994,7.3839416 C20.8056532,7.66894833 21,8.08787823 21,8.52920201 L21,21.0833333 C21,22.8738751 20.9795521,23 19.1428571,23 L6.85714286,23 C5.02044787,23 5,22.8738751 5,21.0833333 L5,4.91666667 C5,3.12612489 5.02044787,3 6.85714286,3 Z M8,12 C7.44771525,12 7,12.4477153 7,13 C7,13.5522847 7.44771525,14 8,14 L15,14 C15.5522847,14 16,13.5522847 16,13 C16,12.4477153 15.5522847,12 15,12 L8,12 Z M8,16 C7.44771525,16 7,16.4477153 7,17 C7,17.5522847 7.44771525,18 8,18 L11,18 C11.5522847,18 12,17.5522847 12,17 C12,16.4477153 11.5522847,16 11,16 L8,16 Z" fill="#000000" fillRule="nonzero"></path>
													</g>
												</svg>
											</span>
										</div>
									</div>
									<div className="navi-text">
										<div className="font-weight-bold">Product List</div>
										<div className="text-muted">Logs and notifications</div>
									</div>
								</div>
							</a>
							<a href="/orderlist" className="navi-item">
								<div className="navi-link">
									<div className="symbol symbol-40 bg-light mr-3">
										<div className="symbol-label">
											<span className="svg-icon svg-icon-md svg-icon-primary">
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
									<div className="navi-text">
										<div className="font-weight-bold">Order List</div>
										<div className="text-muted">latest tasks and projects</div>
									</div>
								</div>
							</a>
							<a href="/userlist" className="navi-item">
								<div className="navi-link">
									<div className="symbol symbol-40 bg-light mr-3">
										<div className="symbol-label">
											<span className="svg-icon svg-icon-md svg-icon-primary">
												<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
													<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
														<rect x="0" y="0" width="24" height="24"></rect>
														<path d="M6,2 L18,2 C18.5522847,2 19,2.44771525 19,3 L19,12 C19,12.5522847 18.5522847,13 18,13 L6,13 C5.44771525,13 5,12.5522847 5,12 L5,3 C5,2.44771525 5.44771525,2 6,2 Z M7.5,5 C7.22385763,5 7,5.22385763 7,5.5 C7,5.77614237 7.22385763,6 7.5,6 L13.5,6 C13.7761424,6 14,5.77614237 14,5.5 C14,5.22385763 13.7761424,5 13.5,5 L7.5,5 Z M7.5,7 C7.22385763,7 7,7.22385763 7,7.5 C7,7.77614237 7.22385763,8 7.5,8 L10.5,8 C10.7761424,8 11,7.77614237 11,7.5 C11,7.22385763 10.7761424,7 10.5,7 L7.5,7 Z" fill="#000000" opacity="0.3"></path>
														<path d="M3.79274528,6.57253826 L12,12.5 L20.2072547,6.57253826 C20.4311176,6.4108595 20.7436609,6.46126971 20.9053396,6.68513259 C20.9668779,6.77033951 21,6.87277228 21,6.97787787 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,6.97787787 C3,6.70173549 3.22385763,6.47787787 3.5,6.47787787 C3.60510559,6.47787787 3.70753836,6.51099993 3.79274528,6.57253826 Z" fill="#000000"></path>
													</g>
												</svg>
											</span>
										</div>
									</div>
									<div className="navi-text">
										<div className="font-weight-bold">User List</div>
										<div className="text-muted">latest tasks and projects</div>
									</div>
								</div>
							</a>
						</>)}
					</div>
					<div className="separator separator-dashed my-7"></div>
				<div className="ps__rail-x" style={{left: "0px",bottom: "0px"}}><div className="ps__thumb-x" tabIndex="0" style={{left: "0px", width: "0px"}}></div></div><div className="ps__rail-y" style={{top: "0px", height: "821px", right: "0px"}}><div className="ps__thumb-y" tabIndex="0" style={{top: "0px", height: "300px"}}></div></div></div>
				</>) : (
				<Link to="/signin">
					<div className="btn btn-icon btn-icon-mobile w-auto btn-clean d-flex align-items-center btn-lg px-2" id="kt_quick_user_toggle">
						<span className="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1">Sign In</span>
					</div>
				</Link>
			)}
		</div>
  )
}
