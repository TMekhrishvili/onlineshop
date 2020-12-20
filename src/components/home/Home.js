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
                <div className="item-number-container">
                    <p className="item-number">201 პროდუქტი</p>
                </div>
                <div className="items-container">
                    <div className="items-row">
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                    </div>
                    <div className="items-row">
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                    </div>
                </div>
                <div className="paging"></div>
            </div>
        </div>
    )
}

export default Home