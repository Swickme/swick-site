import React from 'react'
import '../main.css'

export default function Footer() {
  return (
    <div>
     <footer className="footer">
                <div className="container container--px">
                    <div className="footer__left">
                        <a href="/" className="footer__left--logo logo">
                        <img style={{height:'30px'}} src="https://ekinch-videos.s3.ap-south-1.amazonaws.com/spc.png" alt="Swick-Icon" type="png"/>
                            <span><b>Swick</b></span>
                        </a>

                        <ul className="footer__left--links">
                            <li><a href="#">how it works?</a></li>
                            <li><a href="#">stores</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer__right">
                        <div className="footer__right--icons">
                            <a href="#"><i className='bx bxl-facebook-square'></i></a>
                            <a href="#"><i className='bx bxl-twitter'></i></a>
                        </div>
                    </div>
                </div>
            </footer>
    </div>
  )
}
