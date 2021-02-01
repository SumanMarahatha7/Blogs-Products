import React, {useState,useEffect} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import moment from 'moment';

function BlogDetail(props) {

    const [blogDetail, SetBlogDetail] = useState([]);
    var slug = props.match.params.slug

    useEffect(() => {
        loadData();
       
    }, [])

    async function loadData(){
        const data2 = await Axios.get(`http://localhost:8000/blog/${slug}/`)
        const res = await data2.data
        SetBlogDetail(res)

    }
    return (
        <div>
           {
               blogDetail.map((answer)=>{
                const date = moment(answer.created_on).format('DD MMM, YYYY,  h:mm a');
                return (
                   <div>
                         <div className="col-md-12 card mb-4  mt-3 left  top">
                                 <div className="card-body">
		                            <h1> { answer.title } </h1>
		                             <p className=" text-muted"> { answer.author.username } | { date }</p>
		                             <center> <img className="detailImage mb-4 mt-3" src={answer.featured_image} width="500px" height="300px" alt="noImage"/></center>
		                             <p className="card-text ">{answer.description}</p>
		                             <Link exact to="/blog" className="btn btn-primary">&#8592; Back</Link>
                               </div>
                          </div>
                   </div>
                   )
               })
           }
        </div> 
    )
}

export default BlogDetail
