import React from 'react'
import '../main.css'
export default function Navbar() {
  return (
    <div>
          <header className="header" style={{color:'white' , width:'100%'}}>
                <div className="overlay has-fade hide-for-desktop"  style={{color:'white' , width:'100%'}}></div>

                <nav className="flex flex-jc-sb flex-ai-c container container--pall"  style={{color:'white' , width:'100%'}}>
                    <a href="/" className="header__logo logo">
                          <img style={{height:'30px'}} src="https://ekinch-videos.s3.ap-south-1.amazonaws.com/spc.png" alt="Swick-Icon" type="png"/>
                            
                            <span style={{color:'white' , fontFamily:'Primus-Script'}}><b>swick</b></span>
                    </a>

                    <a href="#" id="btnHamburger" className="header__hamburger hide-for-desktop">
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>

                    <div className="header__links hide-for-mobile">
                        <a style={{color:'white'}} href="#">how it works?</a>
                        <a style={{color:'white'}} href="#">stores</a>
                        <a style={{color:'white'}} href="#">Contact</a>
                        <a style={{color:'white'}} href="#" className="btn-red">Login</a>
                    </div>
                </nav>

                <div className="header__menu container--px has-fade hide-for-desktop">
                    <a href="#">how it works?</a>
                    <a href="#">stores</a>
                    <a href="#">Contact</a>
                    <a href="#">Login</a>
                </div>

                <div className="header__social-icons has-fade hide-for-desktop">
                    <a href="#">
                        <i className='bx bxl-facebook-square'></i>
                    </a>
                    <a href="#">
                        <i className='bx bxl-twitter'></i>
                    </a>
                </div>
            </header>
    </div>
  )
}
