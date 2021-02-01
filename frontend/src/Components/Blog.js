import React, { useState,useEffect } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import TruncateMarkup from 'react-truncate-markup';
import './Blog.css';
import moment from 'moment';


function Blog(props) {

    const [blog, setBlog] = useState([]);

    
   

    useEffect(() => {
        getData();
    }, [])
    
   async function getData() {
       const data = await Axios.get("http://localhost:8000/blog/")
       const res = await data.data
       setBlog(res);
      
   }

    return (
        <div>
            {
                blog.map((result)=>{
                const date = moment(result.created_on).format('DD MMM, YYYY,  h:mm a');
                    return (
                        <div className="container" style={{backgroundColor: "#f8fcfe"}}>
                            <div className=" card mb-4 mt-4">
                            <div className="row">
                                 <div className="col-md-7">
                             
                                  <div className="card-body">
                                      <h2 className="card-title">{result.title }</h2>
                                      <p className="card-text text-muted h6">{ result.author.username } | {date}</p>
                                      <TruncateMarkup lines={2}><p className="card-text mt-4">{result.description}</p></TruncateMarkup>       
                                      <Link exact to={`/blog/${result.slug}`}className="btn btn-primary mt-3">Read More &rarr;</Link>
                                  </div> 
                                   </div>
                                   <div className="col-md-4 mt-3 mb-3">
                                       <img className="bloglist_img" src={result.featured_image} width="350px" height="230px" alt="noImage"/>
                                   </div>    
                              
                              </div>
                          </div>     
                  </div>
                    )
                   
                })
            }
        </div>
    )
}

export default Blog
