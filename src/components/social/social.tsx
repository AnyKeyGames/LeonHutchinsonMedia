import React from 'react';
import '../../core/css/core.css';
import socialImage from './assets/3.jpg'

export function Social(): JSX.Element {

  return (
    <>
        <section className="page-section bg-light" id="social">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Follow me online</h2>
                    {/* <!-- <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3> --> */}
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="team-member">
                        <img className="mx-auto rounded-circle" src={socialImage} alt="..." />
                            <h4>Leon Hutchinson</h4>
                            <p className="text-muted">Sunderland based photographer / Videographer</p>
                            <a className="btn btn-dark btn-social mx-2" href="https://www.facebook.com/LHMedia21/about" aria-label="Leon Hutchinson Twitter Profile"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="https://www.youtube.com/channel/UCMzZ7oaE1evmNYng56CbyQQ" aria-label="Leon Hutchinson Youtube Profile"><i className="fab fa-youtube"></i></a>
                            <a className="btn btn-dark btn-social mx-2" href="https://www.instagram.com/leon_hutchinson_media/" aria-label="Leon Hutchinson Instagram Profile"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Feel free to contact me via e-mail or through my social media platforms</p></div>
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Alternatively email me: lhmedia2021@outlook.com</p></div>
                </div>
            </div>
        </section>
    </>
  )
  
}
