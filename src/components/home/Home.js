import React from 'react';
import './home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="categories">
                <div className="price">
                    <div className="price-title">
                        <h2 className="title">Price</h2>
                    </div>
                    <div className="choose-price">

                    </div>
                </div>
                <div className="brand">
                    <div className="brand-title">
                        <h2 className="title">Brand</h2>
                    </div>
                    <div className="choose-brand">
                        
                    </div>
                </div>
            </div>
            <div className="items">
            </div>
        </div>
    )
}

export default Home