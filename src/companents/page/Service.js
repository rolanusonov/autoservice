import React from 'react';
import img1 from '../img/serImg1.png'

const Service = () => {
    return (
        <div id="service">
            <div className="container">
                <div className="service">
                    <h1>ШИРОКИЙ СПЕКТР УСЛУГ</h1>
                    <div className="cardBlock">
                        <div className="card">
                            <img src={img1} alt="" className="cardImg"/>
                            <h2>ДИАГНОСТИКА авто</h2>
                        </div>
                        <div className="card">
                            <img src={img1} alt="" className="cardImg"/>
                            <h2>ДИАГНОСТИКА авто</h2>
                        </div>
                        <div className="card">
                            <img src={img1} alt="" className="cardImg"/>
                            <h2>ДИАГНОСТИКА авто</h2>
                        </div>
                        <div className="card">
                            <img src={img1} alt="" className="cardImg"/>
                            <h2>ДИАГНОСТИКА авто</h2>
                        </div>
                        <div className="card">
                            <img src={img1} alt="" className="cardImg"/>
                            <h2>ДИАГНОСТИКА авто</h2>
                        </div>
                        <div className="card">
                            <img src={img1} alt="" className="cardImg"/>
                            <h2>ДИАГНОСТИКА авто</h2>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;