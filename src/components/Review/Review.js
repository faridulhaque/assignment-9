import React from 'react';
import { useReview } from '../hooks/useReviews';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Review.css';

const Review = () => {
    const [items, setItems] = useReview();
    
    return (
        <section>
            <h1 style={{textAlign: 'center', marginTop: 25}}>What Our Customers Say About Us</h1>
            <div className="items">
            {
                items.map(item => <ReviewItem
                    item={item}
                    key={item.id}
                ></ReviewItem>)
            }
             </div>
        </section>
        
    );
};

export default Review;