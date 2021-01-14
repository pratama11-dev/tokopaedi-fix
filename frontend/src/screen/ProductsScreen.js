import Axios from 'axios';
import { set } from 'mongoose';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, listProducts, saveProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';



function ProductsScreen(props) {
    const [modalVisible, setModalVisible] = useState(false);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [img, setImg] = useState('');
    const [brand, setBrand] = useState('');
    const [categories, setCategories] = useState('');
    const [countInStock, setCountInStock] = useState('');
    const [description, setDescription] = useState('');
    
    const productList = useSelector(state =>state.productList);
    const {loading, products, error} = productList;
    
    const productSave = useSelector(state =>state.productSave);
    const {loading: loadingSave, success: successSave, errorSave } = productSave;
    
    const productDelete = useSelector(state =>state.productDelete);
    const {loading: loadingDelete, success: successDelete, errorDelete } = productDelete;
    
    const dispatch = useDispatch();

    useEffect(() => {
        if(successSave){
            setModalVisible(false);
        }
        dispatch(listProducts())
        return () => {
            //
        };
    }, [successSave, successDelete]);

    const openModal = (product) => {
        setModalVisible(true);
        setId(product._id);
        setName(product.name);
        setPrice(product.price);
        setImg(product.img);
        setBrand(product.brand);
        setCategories(product.categories);
        setCountInStock(product.countInStock);
        setDescription(product.description);
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(saveProduct({
            _id:id,
            name, price, img, brand, 
            categories, countInStock, description
        }));
    }

    const deleteHandler = (product) => {
        if (window.confirm('Are you sure to delete?')) {
            dispatch(deleteProduct(product._id));
        }
    }

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const [loadingUpload, setLoadingUpload] = useState(false);
    const [errorUpload, setErrorUpload] = useState('');
    const uploadFileHandler = async(e) => {
        const file = e.target.files[0];
        const bodyFormData = new FormData();
        bodyFormData.append('image', file);
        setLoadingUpload(true);
        try {
            const {data} = await Axios.post('/api/uploads', bodyFormData, {
                headers: { 'Content-Type':'multipart/form-data',
                Authorization: `Bearer ${userInfo.token}`,
            },
            });
            setImg(data);
            setLoadingUpload(false);
        } catch (error) {
            setErrorUpload(error.message);
            setLoadingUpload(false);
        }
    }

    return <div className="content content-margined">
        <div className="product-header">
            <h3>Product List</h3>
            <button className="btn" onClick={()=>openModal({})}>Create Product</button>
        </div>

        {modalVisible &&
            <div className="form">
                <form onSubmit={submitHandler}>
                    <ul className="form-container">
                        <li>
                            <h2>Create Product</h2>
                        </li>
                        <li>
                            {loadingSave && <div>Loading...</div>}
                            {errorSave && <div>{errorSave}</div>}
                        </li>
                        <li>
                            <label htmlFor="Name">
                                Name Product
                            </label>
                            <input type="text" name="name" value={name} id="name" onChange={(e) => setName(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <label htmlFor="price">
                                Price
                            </label>
                            <input type="text" name="price" value={price} id="price" onChange={(e) => setPrice(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <label htmlFor="image">
                                Image
                            </label>
                            <input type="text" name="image" value={img} id="image" onChange={(e) => setImg(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <label htmlFor="imageFile">Image File</label>
                            <input type="file" id="imageFile" label="Choose Image" onChange={uploadFileHandler}></input>
                            {loadingUpload && <LoadingBox></LoadingBox>}
                            {errorUpload && (
                            <MessageBox variant="danger">{errorUpload}</MessageBox>
                            )}
                        </li>
                        <li>
                            <label htmlFor="brand">
                                Brand
                            </label>
                            <input type="text" name="brand" value={brand} id="brand" onChange={(e) => setBrand(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <label htmlFor="category">
                                Category
                            </label>
                            <input type="text" name="category" value={categories} id="category" onChange={(e) => setCategories(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <label htmlFor="description">
                                Description
                            </label>
                                <textarea name="description" value={description} id="description" onChange={(e) => setDescription(e.target.value)}>
                            </textarea>
                        </li>
                        <li>
                            <label htmlFor="countInStock">
                                Count In Stock
                            </label>
                                <input name="countInStock" value={countInStock} id="description" onChange={(e) => setCountInStock(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <button type="submit" className="button">{id ? "Update" : "Create"}</button>
                            <button type="button" onClick={()=>setModalVisible(false)} className="button">Back</button>
                        </li>
                    </ul>
                </form>
            </div>
        }

        

        <div className="product-list">
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Categories</th>
                        <th>Brand</th>
                        <th>Count In Stock</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product._id}>
                            <td> {product._id}</td>
                            <td> {product.name}</td>
                            <td> {product.price}</td>
                            <td> {product.categories}</td>
                            <td> {product.brand}</td>
                            <td> {product.countInStock}</td>
                            <td>
                                <button className="buttontbl" onClick={()=>openModal(product)}>Edit</button>
                                <button className="buttontbl" onClick={()=>deleteHandler(product)}>Delete</button>
                            </td>
                        </tr>    
                    ))}
                </tbody>
            </table>
        </div>
    </div>
}

export default ProductsScreen;