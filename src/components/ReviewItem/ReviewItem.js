import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const {name, comment, review, img} = props.item;
    return (
        <div className='item-card'>
            
            {/* <h3>Opinion</h3> */}
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

export default ReviewItem;