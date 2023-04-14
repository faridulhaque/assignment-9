import React from 'react';
import logo from './library.png';
import './Home.css';
import { useReview } from '../hooks/useReviews';
import HomeReview from '../HomeReview/HomeReview';
import { Link } from 'react-router-dom';

const Home = () => {
    const [items] = useReview();
    const halfItems = items.slice(0, 3);
    
    return (
        <section >
            <div className='div-top-home'>
                <div className='div-text'>
                    <h1>Books <span>Garden</span></h1>
                    <p>Books Garden is the best place for you to read books with a peaceful environment, buy books with best qualities or borrow books for long time with low cost!</p>
                </div>
                <div className='div-img'>
                    <img src={logo} alt=""/>
                </div>
            </div>
            {/* the top div contains picture and some text and the bottom div contains the reviews and button*/}
            <h2 className='h2-middle'>Customer Reviews</h2>
            <div className='div-bottom-home'>
                {
                    halfItems.map(item => <HomeReview
                    key={item.id}
                    item={item}
                    >
                    </HomeReview>)
                }
            </div>
            <div className='div-button'>
                <Link to='/review'>See More review</Link>
            </div>
            
            
        </section>
    );
};

export default Home;