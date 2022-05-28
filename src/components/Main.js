import React from "react";
import Stores from "./stores/Stores";
import './main.css'
import Navbar from "./navbar/Navbar";
import Downloadex from "./navbar/Downloadex";
import Footer from "./footer/Footer";

function Main() {

    const body = document.querySelector('body');
    const header = document.querySelector('.header');
    const overlay = document.querySelector('.overlay')
    const btnHamburger = document.getElementById('btnHamburger');
    const fadesElements = Array.from(document.querySelectorAll('.has-fade'));
    const featurListLis = Array.from(document.querySelectorAll('.features__list li'));
    const featurListLisActives = Array.from(document.querySelectorAll('.features__list li.active'));
    const featurTaps = Array.from(document.querySelectorAll('.features__feature'));
    const featurTapsActives = Array.from(document.querySelectorAll('.features__feature.active'));
    const contactForm = document.querySelector('.contact__form');
    const emailGroup = document.querySelector('.form__input--group');
    const emailInput = document.querySelector('.form__input--email');
    let errorMessage = document.querySelector('.form__input--error--message');

    // btnHamburger.addEventListener('click', openMenu);

    // contactForm.addEventListener('submit', emailValidation);

    // Open Hamburger Menu Function
    function openMenu() {
        if (header.classList.contains('open')) { // Open Hamburger Menu
            header.classList.remove('open');
            body.classList.remove('noscroll');
            fadeState('hidden');
        } else { // Close Hamburger Menu
            header.classList.add('open');
            body.classList.add('noscroll');
            fadeState('visible');
        }
    }

    // Fade State Function
    function fadeState(state) {
        fadesElements.forEach(ele => {
            if (state !== 'visible') {
                ele.classList.add('has-fade');
                ele.classList.remove('fade-in');
            } else {
                ele.classList.remove('has-fade');
                ele.classList.add('fade-in');
            }
        });
    };

    // Features Taps Active
    (function tapsActive() {
        // Active Count
        let activeCount = 0;

        // Loop On All The List Li Of The [ Features Seaction ] Header
        featurListLis.forEach(listLi => {
            // When Click On Any li
            listLi.addEventListener('click', () => {
                // Let the activeCount equle the target clikced li index
                activeCount = featurListLis.indexOf(listLi);

                // Reomve All The Active Classes From Both List Li's And Taps Actives
                removeActiveClass(Array.from(listLi.parentElement.querySelectorAll('li.active')));
                removeActiveClass(Array.from(listLi.parentElement.parentElement.querySelectorAll('.features__feature.active')));

                // Add Class Active On The Target Li
                listLi.classList.add('active');
                // Also Add Class Active On The Target Tap
                // featurTaps[activeCount] mean let us say the [activeCount] is 1 
                // so we have in activeCount 1 the activeCount is the second tap in the array of the taps
                // i hope you understand i hope :)
                featurTaps[activeCount].classList.add('active');
            });
        });
    })();

    // Function Remove Active Class
    function removeActiveClass(actives) {
        actives.forEach(activeEle => {
            activeEle.classList.remove('active');
        });
    };

    // Validation Email Function
    function emailValidation(event) {
        // Preventing Default Behavior
        event.preventDefault();
        // Input Email Value
        const emailValue = emailInput.value.trim();

        if (emailValue === '') { // If Input Is Empty
            emailGroup.classList.add('form__input--group--invalid');
            errorMessage.innerHTML = "Input Can Not Be Empty";
        } else { /* Else */
            let emailValidate = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/.test(emailValue);

            if (emailValidate) { /* If He Is Email */
                contactForm.submit();
            } else {
                emailGroup.classList.add('form__input--group--invalid');
                errorMessage.innerHTML = "Whoops, make sure it's an email";
            }
        }
    };

    return (
        <>
        {/* <div style={{ backgroundColor:'#020841' }}>
       
                          <img style={{height:'65px' , padding:'10px' , marginTop:'10px'}} src="https://ekinch-videos.s3.ap-south-1.amazonaws.com/spc.png" alt="Swick-Icon" type="png"/>
                            
                         <span style={{color:'white' , fontSize:'40px' ,fontFamily:'monospace' }}><b>Swick</b></span>
                         <span style={{color:'white' , fontSize:'20px' ,fontFamily:'monospace' , marginLeft:'60px'  }}><b>a</b></span>
                         <span style={{color:'white' , fontSize:'20px' ,fontFamily:'monospace' , marginLeft:'80'  }}><b>b</b></span>
                         <span style={{color:'white' , fontSize:'20px' ,fontFamily:'monospace' , marginLeft:'600px'  }}><b>c</b></span>
                 
        </div> */}
         <div className="entryClass">
            <section className="hero">
                <div className="container">
                    <div className="hero__image"></div>

                    <div className="hero__text container--pall">
                        <h1>A Simple Coupon Manager</h1>
                        <p>
                            A clean and simple interface to load your all coupons. Open a new
                            site and see your coupons load instantly. Try it for free.
                        </p>
                        <a href="#" className="primary-btn btn-blue">Get it on Chrome</a>
                        <a href="#" className="primary-btn btn-smoke">Get it on Firefox</a>
                    </div>
                </div>
            </section>

            <section className="features">
                <div className="container">
                    <div className="features__text container--pall">
                        <h2>how it works?</h2>
                        <p>
                            Our aim is A clean and simple interface to load your all coupons. Open a new
                            site and see your coupons load instantly. Try it for free.
                        </p>
                    </div>

                    <div className="features__list container--pall">
                        <li className="featureTap active">Simple Bookmarking</li>
                        <li className="featureTap">Speedy Searching</li>
                        <li className="featureTap">Easy Sharing</li>
                    </div>

                    <div className="features__feature featureTap active">
                        <div className="feature__image"></div>

                        <div className="feature__text container--pall">
                            <h3>Bookmark in one click</h3>
                            <p>
                                Organize your A clean and simple interface to load your all coupons. Open a new
                            site and see your coupons load instantly. Try it for free.
                            </p>
                            <a href="#" className="primary-btn btn-blue">More Info</a>
                        </div>
                    </div>

                    <div className="features__feature featureTap speedy--searching">
                        <div className="feature__image"></div>

                        <div className="feature__text container--pall">
                            <h3>Intelligent Search</h3>
                            <p>
                                Our powerful A clean and simple interface to load your all coupons. Open a new
                            site and see your coupons load instantly. Try it for free.
                            </p>
                            <a href="#" className="primary-btn btn-blue">More Info</a>
                        </div>
                    </div>

                    <div className="features__feature featureTap easy--sharing">
                        <div className="feature__image"></div>

                        <div className="feature__text container--pall">
                            <h3>Share your bookmarks</h3>
                            <p>
                                Easily share your bookmarks and collections with others.
                                Create a shareable link that you can send at the click of a button.
                            </p>
                            <a href="#" className="primary-btn btn-blue">More Info</a>
                        </div>
                    </div>
                </div>
            </section>

            <Downloadex/>
            
            <section className="faqs">
               <Stores/>

            </section>
            <section className="faqs">
                <div className="container container--pall">
                    <div className="faqs__info">
                        <h1>Frequently Asked Questions</h1>
                        <p>
                            Here are some of our FAQs. If you have any other questions you’d like
                            answered please feel free to email us.
                        </p>
                    </div>

                    <div className="faqs__questions">
                        <div className="questions__question">
                            <input type="radio" name="InpRadio" className="question__input-radio" id="faqsQuestion1" />

                            <label for="faqsQuestion1" className="question__info">
                                <h3>What is Bookmark?</h3>
                                <span>
                                    <i className='bx bx-chevron-down'></i>
                                </span>
                            </label>

                            <div className="question__text">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt
                                    justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
                                </p>
                            </div>
                        </div>

                        <div className="questions__question">
                            <input type="radio" name="InpRadio" className="question__input-radio" id="faqsQuestion2" />

                            <label for="faqsQuestion2" className="question__info">
                                <h3>How can I request a new browser?</h3>
                                <span>
                                    <i className='bx bx-chevron-down'></i>
                                </span>
                            </label>

                            <div className="question__text">
                                <p>
                                    Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.
                                    Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
                                    ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies.
                                    Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
                                </p>
                            </div>
                        </div>

                        <div className="questions__question">
                            <input type="radio" name="InpRadio" className="question__input-radio" id="faqsQuestion3" />

                            <label for="faqsQuestion3" className="question__info">
                                <h3>Is there a mobile app?</h3>
                                <span>
                                    <i className='bx bx-chevron-down'></i>
                                </span>
                            </label>

                            <div className="question__text">
                                <p>
                                    Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum
                                    urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed
                                    sollicitudin ex et ultricies bibendum.
                                </p>
                            </div>
                        </div>

                        <div className="questions__question">
                            <input type="radio" name="InpRadio" className="question__input-radio" id="faqsQuestion4" />

                            <label for="faqsQuestion4" className="question__info">
                                <h3>What about other Chromium browsers?</h3>
                                <span>
                                    <i className='bx bx-chevron-down'></i>
                                </span>
                            </label>

                            <div className="question__text">
                                <p>
                                    Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam
                                    vitae neque eget nisl gravida pellentesque non ut velit.
                                </p>
                            </div>
                        </div>

                        <a href="#" className="faqs__cta">More Info</a>
                    </div>
                </div>
            </section>

            <section className="contact">
                <div className="container container--pall">
                    <div className="contact__header">
                        <span className="contact__header--subtitle">35,000+ already joined</span>
                        <h1 className="contact__header--title">Stay up-to-date with what we’re doing</h1>
                    </div>

                    <form className="contact__form">
                        <div className="form__input--group form__input--group--email">
                            <input className="form__input form__input--email" type="text" name="email" placeholder="Enter your email address" />
                            <span className="form__input--error--icon"><i className='bx bxs-error-circle'></i></span>
                            <span className="form__input--error--message"></span>
                        </div>

                        <div className="form__input--group form__input--group--submit">
                            <input className="form__input form__input--submit" type="submit" value="Contact Us" />
                        </div>
                    </form>
                </div>
            </section>

           <Footer/>

        </div>
        </>
       
    );
}

export default Main;
