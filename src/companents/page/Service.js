import React from 'react';
import img1 from '../img/serImg1.png'
import img2Shino from '../img/img2shino.png'
import img3 from '../img/1991f52s-960.jpg'
import img4 from '../img/img3.png'

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
                            <img src={img2Shino} alt="" className="cardImg"/>
                            <h2>ШИНОМОНТАЖ</h2>
                        </div>
                        <div className="card">
                            <img src={img3} alt="" className="cardImg"/>
                            <h2>3D развал схождение</h2>
                        </div>
                        <div className="card">
                            <img src={img4} alt="" className="cardImg"/>
                            <h2>ремонт ходовой</h2>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;