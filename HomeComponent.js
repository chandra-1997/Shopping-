import React from 'react'
import Products from './Products';

const HomeComponent = () => {
    return (
        <div className='hero'>
            <div className="card bg-dark text-white border-0">
                <img src="images/s5.webp" class="card-img" alt="Background" height="580px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className='container'>
                        <h5 className="card-title display-4 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                        <p className="card-text lead display-5 fs-2">
                            CHECK OUT ALL THE TRENDS
                        </p>
                    </div>
                </div>
            </div>
            <Products />
        </div>
    );
};

export default HomeComponent;
