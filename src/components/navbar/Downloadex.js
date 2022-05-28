import React from 'react'
import '../main.css'
export default function Downloadex() {
  return (
    <div>
         <section className="extension container--pall">
                <div className="container">
                    <div className="extension__info container--px">
                        <h1>Download the extension</h1>
                        <p>
                        A clean and simple interface to load your all coupons. Open a new
                            site and see your coupons load instantly. Try it for free.                        </p>
                    </div>

                    <div className="extension__browsers-cards">
                        <div className="extension__card" style={{ border:'4px',borderStyle:'solid' , borderColor:'#ED6322' }}>
                            <img src="https://k.top4top.io/p_1987t1s2g1.png" alt="Google Chrome Logo"></img>
                            <div className="card__details">
                                <h3>Add to Chrome</h3>
                                <span>Minimum version 62</span>
                            </div>
                            <div className="card__separate"></div>
                            <button type="button" className="card__add-btn">Add & Install Extension</button>
                        </div>

                        <div className="extension__card" style={{ border:'4px',borderStyle:'solid' , borderColor:'#ED6322' }}>
                            <img src="https://l.top4top.io/p_1987w0li62.png" alt="Google Chrome Logo"></img>
                            <div className="card__details">
                                <h3>Add to Firefox</h3>
                                <span>Minimum version 55</span>
                            </div>
                            <div className="card__separate"></div>
                            <button type="button" className="card__add-btn">Add & Install Extension</button>
                        </div>

                        <div className="extension__card" style={{ border:'4px',borderStyle:'solid' , borderColor:'#ED6322' }}>
                            <img src="https://a.top4top.io/p_19874339l3.png" alt="Google Chrome Logo"></img>
                            <div className="card__details">
                                <h3>Add to Opera</h3>
                                <span>Minimum version 46</span>
                            </div>
                            <div className="card__separate"></div>
                            <button type="button" className="card__add-btn">Add & Install Extension</button>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}
