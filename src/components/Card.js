import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const Card = (props) => {
    let value = props.data?props.data:[];
    console.log(value);
    return (
        // data.map(()=>{
        <div className="card" style={{width: "200px", position: "relative", display:"flex"}}>
        <button style={{position: "absolute", top: "2px", right: "0px", marginRight: "-10"}}><CloseIcon style={{width: "10px", height: "10px"}}/></button>
            <img src="https://images.unsplash.com/photo-1687184688387-bdacfcf7c9f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." style={{width:"200px", padding: "0"}}/>
            <div className="card-body">
                <h3 className="card-title">Title</h3>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        // })
    )
}

export default Card;
