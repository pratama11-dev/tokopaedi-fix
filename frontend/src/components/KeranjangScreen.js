import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../actions/cartActions';

export default function KeranjangScreen(props) {

	const cart = useSelector(state => state.cart);

  const { cartItems } = cart;

  // const productId = props.match.params.id;
  // const qty = props.location.search? Number(props.location.search.split("=")[1]):1;
  const dispatch = useDispatch();
  const removeFromCartHandler = (productId) => {
		dispatch(removeFromCart(productId))
  }
	
  // useEffect(() => {
	// 	if(productId){
	// 		dispatch(addToCart(productId, qty));
	// 	}
  // }, [dispatch, productId, qty]);

  const checkoutHandler = () =>{
		props.history.push("/signin?redirect=shipping")
  }


  return (
    <div id="kt_quick_cart" className="offcanvas offcanvas-right p-10">
			<div className="offcanvas-header d-flex align-items-center justify-content-between pb-7" kt-hidden-height="46">
				<h4 className="font-weight-bold m-0">Shopping Cart</h4>
				<a href="#" className="btn btn-xs btn-icon btn-light btn-hover-primary" id="kt_quick_cart_close">
					<i className="ki ki-close icon-xs text-muted"></i>
				</a>
			</div>
			<div className="offcanvas-content">
				<div className="offcanvas-wrapper mb-5 scroll-pull scroll" style={{height: "auto", overflow: "hidden"}}>
					{cartItems.length === 0 ?
						<div>
							<h6 class="font-weight-bolder text-dark font-size-h6 m-2">Cart is Empty</h6>
						</div>
						: 
						cartItems.map( item =>
							<div className="d-flex align-items-center justify-content-between py-8" key={item.product}>
								<div className="d-flex flex-column mr-2">
									<a href={"/product/" + item.product} className="font-weight-bold text-dark-75 font-size-lg text-hover-primary text-left">{item.name}</a>
									<span className="text-muted">The best kitchen gadget in 2020</span>
									<div className="d-flex align-items-center mt-2">
										<span className="font-weight-bold mr-1 text-dark-75 font-size-lg">Rp. {item.price},-</span>
										<span className="text-muted mr-1">for</span>
										<span className="font-weight-bold mr-2 text-dark-75 font-size-lg">{item.qty}</span>
										<a href="#" className="btn btn-xs btn-light-success btn-icon mr-2" onClick={() =>removeFromCartHandler(item.product)}>
											<i className="ki ki-close icon-xs"></i>
										</a>
									</div>
								</div>
								<a href="#" className="symbol symbol-70 flex-shrink-0">
									<img src={item.img} title="" alt="" />
								</a>
								<div className="separator separator-solid"></div>
							</div>
						)
					}
					
				</div>
				<div className="offcanvas-footer" kt-hidden-height="112">
					<div className="d-flex align-items-center justify-content-between mb-7">
						<span className="font-weight-bold text-muted font-size-sm mr-2">Sub total</span>
						<span className="font-weight-bolder text-primary text-right">Rp. {cartItems.reduce((a,c) => a + c.price * c.qty, 0)},-</span>
					</div>
					<div className="text-right">
						<button onClick={checkoutHandler} disabled={cartItems.length === 0} type="button" className="btn btn-primary text-weight-bold">Place Order</button>
					</div>
				</div>
			</div>
		</div>
  )
}
