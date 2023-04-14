import React from 'react';
import './HomeReview.css';

const HomeReview = (props) => {
    const {name, comment, review, img} = props.item;
    return (
        <div className='item-card'>
            <p>{comment}</p>
            
            <div className='comment-rev'>
            <small>Review: {review}</small>
                <div className='img-name'>
                    <img src={img} alt=""/>
                    <h3>{name}</h3>
                </div>
                
                
            </div>
        </div>
    );
};

export default HomeReview;