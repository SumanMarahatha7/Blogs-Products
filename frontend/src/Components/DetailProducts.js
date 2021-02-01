import React,{useState,useEffect} from 'react';
import './Products.css';
import Axios from 'axios';
import {Link} from 'react-router-dom';

function DetailProducts(props){
    const [detail,setDetail] = useState([])
    const id = props.match.params.id;

    async function getData(){
        const data = await Axios.get(`http://localhost:8000/products/${id}`)
        const response = await data.data
        setDetail(response)
    }

    useEffect(() => {
        getData()
    });

    return(

            <div style={{backgroundColor: "#f8fcfe"}}>

                <section className="container-fluid">

                    <center className="row">
                        {
                            detail.map((detail) => (
                                <div className="col-md-6 mb-3 mt-5 mx-auto">
                                    <div className="card" style={{width: "36rem", border:"none"}}>
                                     <img src={detail.featured_image} alt="xaina" />
                                      <div className="card-body">
                                        <h5 className="card-title">{ detail.title }</h5>
                                        <p className="card-text mx-auto">{ detail.summary }</p>
                                        <a href={ detail.demo_url } target="_blank" className="btn btn-primary">View Demo &rarr;</a>
                                      </div>
                                    </div>
                                </div>
                            ))
                        }
                    </center>

                    <center><Link to="/products" className="btn btn text-white mb-5"  style={{backgroundColor:"#3866a1"}}>&#8592; Go Back</Link></center>

                </section>
            </div>
        )
}


export default DetailProducts


