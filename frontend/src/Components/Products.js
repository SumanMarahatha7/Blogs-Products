import React,{useState,useEffect} from 'react';
import './Products.css';
import Axios from 'axios';
import {Link} from 'react-router-dom';

function Products(){

    const [category,setCategory] = useState([])
    const [show,setShow] = useState([])

    async function getData(){
        const data = await Axios.get('http://localhost:8000/products/')
        const response = await data.data
        setCategory(response)
        const data1 = await Axios.get('http://localhost:8000/products/highlight')
        const response1 = await data1.data
        setShow(response1)
    }

    useEffect(() => {
        getData()
    },[]);

    return(
        <section style={{backgroundColor:"#f8fcfe",minHeight:"92vh"}}>
        <section classnName="container-fluid">
            <center className="row mx-auto">
            {
                show.map((show) => (
                        <div className="col-md-3 mb-4 mt-5 mx-auto">
                        <div className="card" style={{width: "18rem", border:"none"}}>
                          <img className="card-img-top" src={ show.featured_image } height="286px" alt="No Photo" />
                          <div className="card-body">
                            <h5 className="card-title">{ show.title }</h5>
                            <p className="card-text mx-auto">{ show.summary }</p>
                            <a href={ show.demo_url } target="_blank" className="btn btn-primary">View Demo &rarr;</a>
                          </div>
                        </div>
                        </div>
                ))
            }
            </center>
        </section>

                <nav>
                <ol className="breadcrumb mt-3" style={{backgroundColor: "#f8fcfe"}}>
                {
                 category.map((category) => (
                        <Link to={`/products/${category.id}`} className="badge mx-auto" style={{fontSize: "20px", color: "#3866a1", textDecoration: "none"}}><li className="breadcrumb-item" aria-current="page">View more from {category.name}</li></Link>
                    ))
                }
                    </ol>
                </nav>


        </section>
        )
}


export default Products








