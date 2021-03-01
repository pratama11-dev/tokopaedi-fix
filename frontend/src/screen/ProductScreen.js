import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
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

    return <div>
        <div className="tittle">
              <h1>Product Detail</h1>
        </div>
        <div className="btn">
            <Link to="/Allscreen">Back to All Screen</Link>
        </div>
        {loading? <div>Loading...</div>:
            error? <div>{error}</div>: product &&
            (
            <div className="details" >
                <div className="details-img">
                    <img src={product.img} alt="produk"></img>
                </div>
                <div className="details-info">
                    <h2><u>{product.name}</u></h2>
                    <h2>{product.brand}</h2>
                    <p>Description:</p>
                    <p dangerouslySetInnerHTML={{__html:product.description}}></p>
                </div>
                <div className="details-action">
                    <h2>Price: Rp. {product.price},-</h2>
                    <h3>Status: {product.countInStock > 0 ? "Ready In Stock" : "Unavailable."}</h3>
                    <p>
                        Qty: <select value={qty} onChange={(e) => { setQty(e.target.value)}}>
                            {[...Array(product.countInStock).keys()].map(x =>
                                <option key={x + 1} value={x + 1}>{x + 1}</option>
                            )}
                        </select>
                    </p>
                    <li>
                        {product.countInStock > 0 && <button onClick={handleAddToCart} className="tombol">Add to Cart</button>}
                    </li>
                </div>
            </div>
            )
        }
        
        

    </div>
}

export default ProductScreen;