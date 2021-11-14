import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { signin } from '../actions/userAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';



function SigninScreen(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userSignin = useSelector(state =>state.userSignin);
  const {loading, userInfo, error } = userSignin
  const dispatch = useDispatch();
  const redirect = props.location.search? props.location.search.split("=")[1]:'/';

  useEffect(() => {
      if(userInfo){
          props.history.push(redirect);
      }
      return () => {
          //
      };
  }, [props.history,userInfo,redirect]);

  const submitHandler = (e) =>{
      e.preventDefault();
      dispatch(signin(email, password))
  }
  return <>
    {/* <div className="d-flex flex-column flex-root">
			<div className="login login-5 login-signin-on d-flex flex-row-fluid" id="kt_login">
				<div className="d-flex flex-center bgi-size-cover bgi-no-repeat flex-row-fluid" style={{backgroundImage: "url(https://metronic-assets.s3-ap-southeast-1.amazonaws.com/media/bg/bg-2.jpg)"}}>
					<div className="login-form text-center text-white p-7 position-relative overflow-hidden">
						<div className="d-flex flex-center mb-15">
							<a href="#">
								<img src="/metronic/theme/html/demo1/dist/assets/media/logos/logo-letter-13.png" className="max-h-75px" alt=""/>
							</a>
						</div>
						<div className="login-signin">
							<div className="mb-20">
								<h3 className="opacity-40 font-weight-normal">Sign In To Admin</h3>
								<p className="opacity-40">Enter your details to login to your account:</p>
							</div>
							<form className="form fv-plugins-bootstrap fv-plugins-framework" id="kt_login_signin_form" novalidate="novalidate">
								<div className="form-group fv-plugins-icon-container">
									<input className="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8" type="text" placeholder="Email" name="username" autocomplete="off" />
								<div className="fv-plugins-message-container"></div></div>
								<div className="form-group fv-plugins-icon-container">
									<input className="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8" type="password" placeholder="Password" name="password" />
								<div className="fv-plugins-message-container"></div></div>
								<div className="form-group d-flex flex-wrap justify-content-between align-items-center px-8 opacity-60">
									<div className="checkbox-inline">
										<label className="checkbox checkbox-outline checkbox-white text-white m-0">
										<input type="checkbox" name="remember" />
										<span></span>Remember me</label>
									</div>
									<a href="javascript:;" id="kt_login_forgot" className="text-white font-weight-bold">Forget Password ?</a>
								</div>
								<div className="form-group text-center mt-10">
									<button id="kt_login_signin_submit" className="btn btn-pill btn-primary opacity-90 px-15 py-3">Sign In</button>
								</div>
							<input type="hidden" /><div></div></form>
							<div className="mt-10">
								<span className="opacity-40 mr-4">Don't have an account yet?</span>
								<a href="javascript:;" id="kt_login_signup" className="text-white opacity-30 font-weight-normal">Sign Up</a>
							</div>
						</div>
						<div className="login-signup">
							<div className="mb-20">
								<h3 className="opacity-40 font-weight-normal">Sign Up</h3>
								<p className="opacity-40">Enter your details to create your account</p>
							</div>
							<form className="form text-center fv-plugins-bootstrap fv-plugins-framework" id="kt_login_signup_form">
								<div className="form-group fv-plugins-icon-container">
									<input className="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8" type="text" placeholder="Fullname" name="fullname" />
								<div className="fv-plugins-message-container"></div></div>
								<div className="form-group fv-plugins-icon-container">
									<input className="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8" type="text" placeholder="Email" name="email" autocomplete="off" />
								<div className="fv-plugins-message-container"></div></div>
								<div className="form-group fv-plugins-icon-container">
									<input className="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8" type="password" placeholder="Password" name="password" />
								<div className="fv-plugins-message-container"></div></div>
								<div className="form-group fv-plugins-icon-container">
									<input className="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8" type="password" placeholder="Confirm Password" name="cpassword" />
								<div className="fv-plugins-message-container"></div></div>
								<div className="form-group text-left px-8 fv-plugins-icon-container">
									<div className="checkbox-inline">
										<label className="checkbox checkbox-outline checkbox-white opacity-60 text-white m-0">
										<input type="checkbox" name="agree" />
										<span></span>I Agree the 
										<a href="#" className="text-white font-weight-bold ml-1">terms and conditions</a>.</label>
									</div>
									<div className="form-text text-muted text-center"></div>
								<div className="fv-plugins-message-container"></div></div>
								<div className="form-group">
									<button id="kt_login_signup_submit" className="btn btn-pill btn-primary opacity-90 px-15 py-3 m-2">Sign Up</button>
									<button id="kt_login_signup_cancel" className="btn btn-pill btn-outline-white opacity-70 px-15 py-3 m-2">Cancel</button>
								</div>
							<div></div></form>
						</div>
						<div className="login-forgot">
							<div className="mb-20">
								<h3 className="opacity-40 font-weight-normal">Forgotten Password ?</h3>
								<p className="opacity-40">Enter your email to reset your password</p>
							</div>
							<form className="form fv-plugins-bootstrap fv-plugins-framework" id="kt_login_forgot_form">
								<div className="form-group mb-10 fv-plugins-icon-container">
									<input className="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8" type="text" placeholder="Email" name="email" autocomplete="off" />
								<div className="fv-plugins-message-container"></div></div>
								<div className="form-group">
									<button id="kt_login_forgot_submit" class="btn btn-pill btn-primary opacity-90 px-15 py-3 m-2">Request</button>
									<button id="kt_login_forgot_cancel" class="btn btn-pill btn-outline-white opacity-70 px-15 py-3 m-2">Cancel</button>
								</div>
							<div></div></form>
						</div>
					</div>
				</div>
			</div>
		</div> */}
    <div className="form">
      <form onSubmit={submitHandler}>
        <ul className="form-container">
            <li>
                <h2>Sign-in</h2>
            </li>
            <li>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
            </li>
            <li>
                <label htmlFor="email">
                    Email
                </label>
                <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
                </input>
            </li>
            <li>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
                </input>
            </li>
            <li>
                <button type="submit" className="button">Signin</button>
            </li>
            <li>
                New in Tokopaedi?
            </li>
            <li>
            <Link to="/register" className="btn text-center">Create your Tokopaedi Account</Link>
            </li>
        </ul>
      </form>
    </div>
  </>
}

export default SigninScreen;