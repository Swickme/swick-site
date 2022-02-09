import React from "react";

import './main.css'



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
        <div>
            <header className="header">
                <div className="overlay has-fade hide-for-desktop"></div>

                <nav className="flex flex-jc-sb flex-ai-c container container--pall">
                    <a href="/" className="header__logo logo">
                        <i className='bx bxs-bookmark'></i>
                        <span>Swick</span>
                    </a>

                    <a href="#" id="btnHamburger" className="header__hamburger hide-for-desktop">
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>

                    <div className="header__links hide-for-mobile">
                        <a href="#">Features</a>
                        <a href="#">Pricing</a>
                        <a href="#">Contact</a>
                        <a href="#" className="btn-red">Login</a>
                    </div>
                </nav>

                <div className="header__menu container--px has-fade hide-for-desktop">
                    <a href="#">Features</a>
                    <a href="#">Pricing</a>
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

            <section className="hero">
                <div className="container">
                    <div className="hero__image"></div>

                    <div className="hero__text container--pall">
                        <h1>A Simple Coupon Manager</h1>
                        <p>
                            A clean and simple interface to organize your favourite websites. Open a new
                            browser tab and see your sites load instantly. Try it for free.
                        </p>
                        <a href="#" className="primary-btn btn-blue">Get it on Chrome</a>
                        <a href="#" className="primary-btn btn-smoke">Get it on Firefox</a>
                    </div>
                </div>
            </section>

            <section className="features">
                <div className="container">
                    <div className="features__text container--pall">
                        <h2>Features</h2>
                        <p>
                            Our aim is to make it quick and easy for you to access your favourite websites.
                            Your bookmarks sync between your devices so you can access them on the go.
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
                                Organize your bookmarks however you like. Our simple drag-and-drop interface
                                gives you complete control over how you manage your favourite sites.
                            </p>
                            <a href="#" className="primary-btn btn-blue">More Info</a>
                        </div>
                    </div>

                    <div className="features__feature featureTap speedy--searching">
                        <div className="feature__image"></div>

                        <div className="feature__text container--pall">
                            <h3>Intelligent Search</h3>
                            <p>
                                Our powerful search feature will help you find saved sites
                                in no time at all. No need to trawl through all of your bookmarks.
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

            <section className="extension container--pall">
                <div className="container">
                    <div className="extension__info container--px">
                        <h1>Download the extension</h1>
                        <p>
                            We’ve got more browsers in the pipeline.
                            Please do let us know if you’ve
                            got a favourite you’d like us to prioritize.
                        </p>
                    </div>

                    <div className="extension__browsers-cards">
                        <div className="extension__card">
                            <img src="https://k.top4top.io/p_1987t1s2g1.png" alt="Google Chrome Logo"></img>
                            <div className="card__details">
                                <h3>Add to Chrome</h3>
                                <span>Minimum version 62</span>
                            </div>
                            <div className="card__separate"></div>
                            <button type="button" className="card__add-btn">Add & Install Extension</button>
                        </div>

                        <div className="extension__card">
                            <img src="https://l.top4top.io/p_1987w0li62.png" alt="Google Chrome Logo"></img>
                            <div className="card__details">
                                <h3>Add to Firefox</h3>
                                <span>Minimum version 55</span>
                            </div>
                            <div className="card__separate"></div>
                            <button type="button" className="card__add-btn">Add & Install Extension</button>
                        </div>

                        <div className="extension__card">
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

            <footer className="footer">
                <div className="container container--px">
                    <div className="footer__left">
                        <a href="/" className="footer__left--logo logo">
                            <i className='bx bxs-bookmark'></i>
                            <span>bookmark</span>
                        </a>

                        <ul className="footer__left--links">
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Pricing</a></li>
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
    );
}

export default Main;
