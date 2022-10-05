import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import {useEffect, useState, useRef} from 'react';
import logo from '../img/logo.png';
import banner from '../img/banner.png';
import Group2 from '../img/Group 2.png';
import web_ui_1_min from '../img/protfolio/web_ui/web-ui-1-min.jpg';
import web_ui_2_min from '../img/protfolio/web_ui/web-ui-2-min.jpg';
import web_ui_3_min from '../img/protfolio/web_ui/web-ui-3-min.jpg';
import web_ui_4_min from '../img/protfolio/web_ui/web-ui-4-min.jpg';
import web_ui_5_min from '../img/protfolio/web_ui/web-ui-5-min.jpg';
import web_ui_6_min from '../img/protfolio/web_ui/web-ui-6-min.jpg';
import web_ui_7_min from '../img/protfolio/web_ui/web-ui-7-min.jpg';
import web_ui_8_min from '../img/protfolio/web_ui/web-ui-8-min.jpg';
import web_ui_9_min from '../img/protfolio/web_ui/web-ui-9-min.jpg';
import web_ui_10_min from '../img/protfolio/web_ui/web-ui-10-min.jpg';
import Mobile_Portfolio_1 from '../img/protfolio/Mobile_Portfolio_2/1-min.jpg';
import Mobile_Portfolio_2 from '../img/protfolio/Mobile_Portfolio_2/2-min.jpg';
import Mobile_Portfolio_3 from '../img/protfolio/Mobile_Portfolio_2/3-min.jpg';
import Mobile_Portfolio_4 from '../img/protfolio/Mobile_Portfolio_2/4-min.jpg';
import Mobile_Portfolio_5 from '../img/protfolio/Mobile_Portfolio_2/5-min.jpg';
import Mobile_Portfolio_6 from '../img/protfolio/Mobile_Portfolio_2/6-min.jpg';
import Mobile_Portfolio_7 from '../img/protfolio/Mobile_Portfolio_2/7-min.jpg';
import Mobile_Portfolio_8 from '../img/protfolio/Mobile_Portfolio_2/8-min.jpg';
import logo_1 from '../img/protfolio/logomockups/1-min.webp';
import logo_2 from '../img/protfolio/logomockups/2-min.jpg';
import logo_3 from '../img/protfolio/logomockups/3-min.webp';
import logo_4 from '../img/protfolio/logomockups/4-min.webp';
import logo_5 from '../img/protfolio/logomockups/5-min.webp';
import logo_6 from '../img/protfolio/logomockups/6-min.jpg';
import logo_7 from '../img/protfolio/logomockups/7-min.webp';
import logo_8 from '../img/protfolio/logomockups/8-min.webp';
import logo_9 from '../img/protfolio/logomockups/9-min.webp';
import logo_10 from '../img/protfolio/logomockups/10-min.jpg';
import branding_1 from '../img/protfolio/branding-mockup/1-min.webp';
import branding_2 from '../img/protfolio/branding-mockup/2-min.jpg';
import branding_3 from '../img/protfolio/branding-mockup/3-min.webp';
import branding_4 from '../img/protfolio/branding-mockup/4-min.webp';
import branding_5 from '../img/protfolio/branding-mockup/5-min.webp';
import branding_6 from '../img/protfolio/branding-mockup/6-min.jpg';
import branding_7 from '../img/protfolio/branding-mockup/7-min.webp';
import profile_1 from '../img/1.webp';
import profile_2 from '../img/2.webp';
import profile_3 from '../img/3.webp';
import Tab from '../img/Tab.png';
import particles from '../img/particles.webp';
import emailjs from '@emailjs/browser';


export default function Home() {


  // Mailing Function

    const form = useRef();
  
    function sendEmail(e) {
      e.preventDefault();
      var firstName = document.querySelector('#validationCustom01').value;
      var firstEmail = document.querySelector('#validationCustom02').value;
      var firstSubject = document.querySelector('#validationCustom03').value;
      var firstMessage = document.querySelector('#validationCustom04').value;
     if(firstName != "" && firstName != " " && firstEmail != "" && firstEmail != " " && firstName != "" && firstSubject != " " && firstMessage != "" && firstMessage != " ")
     {
      emailjs.sendForm('service_p0op1zm', 'template_n3qih5v', e.target, 'LTg0QPyuGiWeZ1LBU')
      .then((result) => {
      // console.log(result.text);
      document.querySelector(".mail_pop").setAttribute('style', 'display: block;');
      document.querySelector("#tick_logo").setAttribute('style', 'background-image: url("/_next/static/media/Tick.9a469fd4.gif");');
      document.querySelector("#mail_msg").innerHTML = "Note: Your mail has been send successfully!";
      }, (error) => {
      // console.log(error.text);
      document.querySelector(".mail_pop").setAttribute('style', 'display: block;');
      document.querySelector("#tick_logo").setAttribute('style', 'background-image: url("/_next/static/media/Error.618c57dd.gif");');
      document.querySelector("#mail_msg").innerHTML = "Note: Your mail has not been send, please try again later!";
      });
      e.target.reset()
     }
     else {
        document.querySelector(".mail_pop").setAttribute('style', 'display: block;');
        document.querySelector("#tick_logo").setAttribute('style', 'background-image: url("/_next/static/media/Error.618c57dd.gif");');
        document.querySelector("#mail_msg").innerHTML = "Note: Please fill out all fields!";
     }
    }

    function closePOP()
    {
      document.querySelector(".mail_pop").setAttribute('style', 'display: none;');
      document.querySelector("#tick_logo").setAttribute('style', '');
      document.querySelector("#mail_msg").innerHTML = "";
    }


  return (
    <>
   
    <Head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <title>Proton Technologies</title>
    <link rel="stylesheet" href="https://protontechnologies.pk/style.css"></link>
    <link rel = "icon" href ={Tab.src} type = "image/x-icon"></link>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous" async ></script>
  </Head>

    
    <div className="part" style={{background: `url(${particles.src})`}} />
    <div className="preloader">
      <div className="logo_pre" style={{background: `url(${logo.src}) no-repeat 100%`}} />
      <div className="loading_bar">
        <div className="loading" />
      </div>
    </div>
    <div id='mail' className="mail_pop">
      <button className="exit2" onClick={closePOP}>X</button>
      <div id="tick_logo"></div>
      <p id="mail_msg"></p>
    </div>
    <header>
      {/* Scripts */}
    <Script src="https://protontechnologies.pk/Proton.js" defer />
    {/* <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></s> */}
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"  defer />
      
      <div id="one" className="one">
        {/*------------------ nav start --------------------*/}
        <div className="one1">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Image src={logo} alt="Img not found" />
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span
                className="menu_bar fa fa-bars"
                style={{ color: "#fff", fontSize: "1.5rem" }}
              />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarNavDropdown"
              style={{ justifyContent: "right" }}
            >
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#one">
                    HOME <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#About">
                    ABOUT
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#portfolio">
                    PROJECT
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#testimonial">
                    TESTIMONIAL
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#validationCustom01">
                    CONTACT
                  </a>
                </li>
                <li className="nav-item dropdown">
                  {/* <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                EN
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">link 1</a>
                <a class="dropdown-item" href="#">link 2</a>
                <a class="dropdown-item" href="#">link 3</a>
              </div> */}
                </li>
                <li className="nav-item button1">
                  <a className="nav-link" href="#">
                    LET&apos;S TALK
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        {/*------------------ nav end --------------------*/}
        {/*------------------ banner start --------------------*/}
        <div className="two">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-1"></div>
              <div className="col-sm-5 ab">
                <p className="two2">We are design &amp; build brands</p>
                <h2 className="two2">
                  Hi, i Am Andarson, This Is
                  <br />
                  My Favorite Work !
                </h2>
                <p className="two2 para">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry&apos;s standard dummy
                  text ever since the 1500s, when an unknown printer took a galley
                  of type and scrambled.
                </p>
                <button className="twoa">START PROJECT</button>
              </div>
              <div className="col-sm-5">
                <Image className="two3" src={banner} alt="Img not found"/>
              </div>
              <div className="col-sm-1"></div>
            </div>
          </div>
        </div>
        {/*-------------------- banner end --------------------*/}
      </div>
    </header>
    {/* Mian Section Start */}
    {/* <div class="main-section" id=""> */}
    {/* Section 1 Start */}
    <div className="row row-cols-1 row-cols-md-2 sec_div_1">
      <div className="col" style={{ padding: "3vw" }}>
        <Image className="img-fluid sec_img_1" src={Group2} alt="img not found" />
      </div>
      <div className="col-lg-6 col-sm-12" style={{ padding: "3vw" }}>
        <h1 className="text-white">Hi there! i&apos;m andarson</h1>
        <p className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quinostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat npariatur. Excepteur sint occaecat
          cupidatat non proident,
        </p>
        <div className="callout callout-default">
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiustempor incididunt ut labore et dolore
          </p>
        </div>
        <div className="row">
          <button className="btn-section-1">START NOW</button>
          <ul className="icon-1">
            <i className="fa fa-facebook" style={{ cursor: "pointer" }} />
            <i className="fa fa-twitter" style={{ cursor: "pointer" }} />
            <i className="fa fa-vimeo" style={{ cursor: "pointer" }} />
          </ul>
        </div>
      </div>
    </div>
    {/* Section 1 Close */}
    {/* Section 2 Start */}
    <div
      id="About"
      className="row row-cols-1 row-cols-md-2 row-cols-lg-3"
      style={{ marginTop: "8vh", width: "67%" }}
    >
      <div
        className="col-12 col-md-6 col-lg-4"
        style={{ marginLeft: "auto", marginRight: "auto", marginTop: "3vh" }}
      >
        <div className="card text-left card-1">
          <div className="card-body">
            <div className="d-flex px-1 px-md-3">
              <div>
                <div className="icon icon-primary">
                  <span className="fa fa-facebook" />
                </div>
              </div>
              <div className="pl-2 pl-md-3">
                <h5>Branding Identity</h5>
                <p>
                  Lorem ipsum dolor sit amet, pisicing elit, sed do eiusmod tempor
                  labor is et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-12 col-md-6 col-lg-4"
        style={{ marginLeft: "auto", marginRight: "auto", marginTop: "3vh" }}
      >
        <div className="card text-left card-1">
          <div className="card-body">
            <div className="d-flex px-1 px-md-3">
              <div>
                <div className="icon icon-primary">
                  <span className="fa fa-facebook" />
                </div>
              </div>
              <div className="pl-2 pl-md-3">
                <h5>Branding Identity</h5>
                <p>
                  Lorem ipsum dolor sit amet, pisicing elit, sed do eiusmod tempor
                  labor is et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-12 col-md-6 col-lg-4"
        style={{ marginLeft: "auto", marginRight: "auto", marginTop: "3vh" }}
      >
        <div className="card text-left card-1">
          <div className="card-body">
            <div className="d-flex px-1 px-md-3">
              <div>
                <div className="icon icon-primary">
                  <span className="fa fa-facebook" />
                </div>
              </div>
              <div className="pl-2 pl-md-3">
                <h5>Branding Identity</h5>
                <p>
                  Lorem ipsum dolor sit amet, pisicing elit, sed do eiusmod tempor
                  labor is et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Section 2 Close */}
    {/* --------Portfolio--------- */}
    {/* Section 3 Start*/}
    <div className="row sec_div_3">
      <div className="col-12">
        <h4 className="text-center text-white">our service</h4>
      </div>
      <div className="col-12">
        <h1 className="text-center text-white">What We do ?</h1>
      </div>
      <div className="col-12">
        <p className="text-center text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt <br /> ut labore et dolore magna aliqua enim ad minim
          veniam,
        </p>
      </div>
      <div className="row box-2">
        <div className="col-lg-4 col-sm-12 sec_spacing_3">
          <div className="box">
            <div className="icon">
              <div className="image">
                <i className="fa fa-thumbs-o-up" />
              </div>
              <div className="info">
                <h3 className="title">Made with Bootstrap</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
                  lobortis nisl, vitae iaculis sapien. Phasellus ultrices gravida
                  massa luctus ornare. Suspendisse blandit quam elit, eu imperdiet
                  neque semper.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12 sec_spacing_3">
          <div className="box">
            <div className="icon">
              <div className="image">
                <i className="fa fa-flag" />
              </div>
              <div className="info">
                <h3 className="title">Icons by Font Awesome</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
                  lobortis nisl, vitae iaculis sapien. Phasellus ultrices gravida
                  massa luctus ornare. Suspendisse blandit quam elit, eu imperdiet
                  neque semper.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12 sec_spacing_3">
          <div className="box">
            <div className="icon">
              <div className="image">
                <i className="fa fa-desktop" />
              </div>
              <div className="info">
                <h3 className="title">Desktop Friendly</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
                  lobortis nisl, vitae iaculis sapien. Phasellus ultrices gravida
                  massa luctus ornare. Suspendisse blandit quam elit, eu imperdiet
                  neque semper.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12 sec_spacing_3">
          <div className="box">
            <div className="icon">
              <div className="image">
                <i className="fa fa-thumbs-o-up" />
              </div>
              <div className="info">
                <h3 className="title">Made with Bootstrap</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
                  lobortis nisl, vitae iaculis sapien. Phasellus ultrices gravida
                  massa luctus ornare. Suspendisse blandit quam elit, eu imperdiet
                  neque semper.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12 sec_spacing_3">
          <div className="box">
            <div className="icon">
              <div className="image">
                <i className="fa fa-flag" />
              </div>
              <div className="info">
                <h3 className="title">Icons by Font Awesome</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
                  lobortis nisl, vitae iaculis sapien. Phasellus ultrices gravida
                  massa luctus ornare. Suspendisse blandit quam elit, eu imperdiet
                  neque semper.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12 sec_spacing_3">
          <div className="box">
            <div className="icon">
              <div className="image">
                <i className="fa fa-desktop" />
              </div>
              <div className="info">
                <h3 className="title">Desktop Friendly</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
                  lobortis nisl, vitae iaculis sapien. Phasellus ultrices gravida
                  massa luctus ornare. Suspendisse blandit quam elit, eu imperdiet
                  neque semper.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* section 3 close*/}
    {/* ======= Portfolio Section ======= */}
    <section
      id="portfolio"
      className="portfolio section-bg"
      style={{ marginTop: "5rem" }}
    >
      <div className="container" data-aos="fade-up" style={{ opacity: 1 }}>
        <div className="row">
          <div className="col-lg-4 col-sm-12">
            <h2 className="text-white">OUR PROJECT</h2>
          </div>
          <div className="col-lg-8 col-sm-12">
            <div className="row side-menu">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li className="filter_out" data-filter="all">
                    All
                  </li>
                  <li className="filter_out" data-filter="web">
                    Web
                  </li>
                  <li className="filter_out" data-filter="app">
                    App
                  </li>
                  <li className="filter_out" data-filter="logo">
                    Logo{" "}
                  </li>
                  <li className="filter_out my_active" data-filter="branding">
                    Branding
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row portfolio-container">
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <Image
                src={web_ui_1_min}
                className="img-fluid"
                alt="img not found"
              />
              <div className="portfolio-info">
                <div className="portfolio-links">
                  <a
                    href={web_ui_1_min}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  {/* <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <Image
                src={web_ui_2_min}
                className="img-fluid"
                alt="img not found"
              />
              <div className="portfolio-info">
                <div className="portfolio-links">
                  <a
                    href={web_ui_2_min}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  {/* <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <Image
                src={web_ui_3_min}
                className="img-fluid"
                alt="img not found"
              />
              <div className="portfolio-info">
                <div className="portfolio-links">
                  <a
                    href={web_ui_3_min}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  {/* <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <Image
                src={web_ui_4_min}
                className="img-fluid"
                alt="img not found"
              />
              <div className="portfolio-info">
                <div className="portfolio-links">
                  <a
                    href={web_ui_4_min}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  {/* <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <Image
                src={web_ui_5_min}
                className="img-fluid"
                alt="img not found"
              />
              <div className="portfolio-info">
                <div className="portfolio-links">
                  <a
                    href={web_ui_5_min}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  {/* <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <Image
                src={web_ui_6_min}
                className="img-fluid"
                alt="img not found"
              />
              <div className="portfolio-info">
                <div className="portfolio-links">
                  <a
                    href={web_ui_6_min}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  {/* <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <Image
                src={web_ui_7_min}
                className="img-fluid"
                alt="img not found"
              />
              <div className="portfolio-info">
                <div className="portfolio-links">
                  <a
                    href={web_ui_7_min}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  {/* <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <Image
                src={web_ui_8_min}
                className="img-fluid"
                alt="img not found"
              />
              <div className="portfolio-info">
                <div className="portfolio-links">
                  <a
                    href={web_ui_8_min}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  {/* <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <Image
                src={web_ui_9_min}
                className="img-fluid"
                alt="img not found"
              />
              <div className="portfolio-info">
                <div className="portfolio-links">
                  <a
                    href={web_ui_9_min}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  {/* <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <Image
                src={web_ui_10_min}
                className="img-fluid"
                alt="img not found"
              />
              <div className="portfolio-info">
                <div className="portfolio-links">
                  <a
                    href={web_ui_10_min}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  {/* <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <Image
                src={Mobile_Portfolio_1}
                className="img-fluid"
                alt="img not found"
              />
              <div className="portfolio-info">
                <div className="portfolio-links">
                  <a
                    href={Mobile_Portfolio_1}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  {/* <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <Image
                src={Mobile_Portfolio_2}
                className="img-fluid"
                alt="img not found"
              />
              <div className="portfolio-info">
                <div className="portfolio-links">
                  <a
                    href={Mobile_Portfolio_2}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  {/* <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <Image
                src={Mobile_Portfolio_3}
                className="img-fluid"
                alt="img not found"
              />
              <div className="portfolio-info">
                <div className="portfolio-links">
                  <a
                    href={Mobile_Portfolio_3}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  {/* <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <Image
                src={Mobile_Portfolio_4}
                className="img-fluid"
                alt="img not found"
              />
              <div className="portfolio-info">
                <div className="portfolio-links">
                  <a
                    href={Mobile_Portfolio_4}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  {/* <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <Image
                src={Mobile_Portfolio_5}
                className="img-fluid"
                alt="img not found"
              />
              <div className="portfolio-info">
                <div className="portfolio-links">
                  <a
                    href={Mobile_Portfolio_5}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  {/* <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <Image
                src={Mobile_Portfolio_6}
                className="img-fluid"
                alt="img not found"
              />
              <div className="portfolio-info">
                <div className="portfolio-links">
                  <a
                    href={Mobile_Portfolio_6}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  {/* <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <Image
                src={Mobile_Portfolio_7}
                className="img-fluid"
                alt="img not found"
              />
              <div className="portfolio-info">
                <div className="portfolio-links">
                  <a
                    href={Mobile_Portfolio_7}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  {/* <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <Image
                src={Mobile_Portfolio_8}
                className="img-fluid"
                alt="img not found"
              />
              <div className="portfolio-info">
                <div className="portfolio-links">
                  <a
                    href={Mobile_Portfolio_7}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  {/* <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-logo">
            <div className="portfolio-wrap">
              <Image
                src={logo_1}
                className="img-fluid"
                alt="img not found"
              />
              <div className="portfolio-info">
                <div className="portfolio-links">
                  <a
                    href={logo_1}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Card 2"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  {/* <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-logo">
            <div className="portfolio-wrap">
              <Image
                src={logo_2}
                className="img-fluid"
                alt="img not found"
              />
              <div className="portfolio-info">
                <div className="portfolio-links">
                  <a
                    href={logo_2}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Card 2"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  {/* <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-logo">
            <div className="portfolio-wrap">
              <Image
                src={logo_3}
                className="img-fluid"
                alt="img not found"
              />
              <div className="portfolio-info">
                <div className="portfolio-links">
                  <a
                    href={logo_3}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Card 2"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  {/* <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-logo">
            <div className="portfolio-wrap">
              <Image
                src={logo_4}
                className="img-fluid"
                alt="img not found"
              />
              <div className="portfolio-info">
                <div className="portfolio-links">
                  <a
                    href={logo_4}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Card 2"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  {/* <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-logo">
            <div className="portfolio-wrap">
              <Image
                src={logo_5}
                className="img-fluid"
                alt="img not found"
              />
              <div className="portfolio-info">
                <div className="portfolio-links">
                  <a
                    href={logo_5}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Card 2"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  {/* <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-logo">
            <div className="portfolio-wrap">
              <Image
                src={logo_6}
                className="img-fluid"
                alt="img not found"
              />
              <div className="portfolio-info">
                <div className="portfolio-links">
                  <a
                    href={logo_6}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Card 2"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  {/* <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-logo">
            <div className="portfolio-wrap">
              <Image
                src={logo_7}
                className="img-fluid"
                alt="img not found"
              />
              <div className="portfolio-info">
                <div className="portfolio-links">
                  <a
                    href={logo_7}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Card 2"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  {/* <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-logo">
            <div className="portfolio-wrap">
              <Image
                src={logo_8}
                className="img-fluid"
                alt="img not found"
              />
              <div className="portfolio-info">
                <div className="portfolio-links">
                  <a
                    href={logo_8}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Card 2"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  {/* <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-logo">
            <div className="portfolio-wrap">
              <Image
                src={logo_9}
                className="img-fluid"
                alt="img not found"
              />
              <div className="portfolio-info">
                <div className="portfolio-links">
                  <a
                    href={logo_9}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Card 2"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  {/* <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-logo">
            <div className="portfolio-wrap">
              <Image
                src={logo_10}
                className="img-fluid"
                alt="img not found"
              />
              <div className="portfolio-info">
                <div className="portfolio-links">
                  <a
                    href={logo_10}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Card 2"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  {/* <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-branding">
            <div className="portfolio-wrap">
              <Image
                src={branding_1}
                className="img-fluid"
                alt="img not found"
              />
              <div className="portfolio-info">
                <div className="portfolio-links">
                  <a
                    href={branding_1}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Card 2"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  {/* <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-branding">
            <div className="portfolio-wrap">
              <Image
                src={branding_2}
                className="img-fluid"
                alt="img not found"
              />
              <div className="portfolio-info">
                <div className="portfolio-links">
                  <a
                    href={branding_2}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Card 2"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  {/* <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-branding">
            <div className="portfolio-wrap">
              <Image
                src={branding_3}
                className="img-fluid"
                alt="img not found"
              />
              <div className="portfolio-info">
                <div className="portfolio-links">
                  <a
                    href={branding_3}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Card 2"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  {/* <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-branding">
            <div className="portfolio-wrap">
              <Image
                src={branding_4}
                className="img-fluid"
                alt="img not found"
              />
              <div className="portfolio-info">
                <div className="portfolio-links">
                  <a
                    href={branding_4}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Card 2"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  {/* <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-branding">
            <div className="portfolio-wrap">
              <Image
                src={branding_5}
                className="img-fluid"
                alt="img not found"
              />
              <div className="portfolio-info">
                <div className="portfolio-links">
                  <a
                    href={branding_5}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Card 2"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  {/* <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-branding">
            <div className="portfolio-wrap">
              <Image
                src={branding_6}
                className="img-fluid"
                alt="img not found"
              />
              <div className="portfolio-info">
                <div className="portfolio-links">
                  <a
                    href={branding_6}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Card 2"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  {/* <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-branding">
            <div className="portfolio-wrap">
              <Image
                src={branding_7}
                className="img-fluid"
                alt="img not found"
              />
              <div className="portfolio-info">
                <div className="portfolio-links">
                  <a
                    href={branding_7}
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Card 2"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  {/* <a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Portfolio Section */}
    {/* section 4 start*/}
    <div
      id="testimonial"
      className="container-fluid"
      style={{ marginTop: "5vh" }}
    >
      <div className="">
        <h6 className="text-center text-white">OUR HAPPY CLIENT</h6>
      </div>
      <div className="">
        <h3 className="text-center text-white my_heading">
          We’ve got the chances to work with clients
          <br />
          all over the world.Let’s see what the
          <br />
          talk about us!
        </h3>
      </div>
    </div>
    <div className="slideshow-container">
      <div className="mySlides fade">
        {" "}
        {/*-Slide 1 --*/}
        <div className="container">
          <div className="row" style={{ padding: "5% 0px 5% 0px" }}>
            <div className="col-sm-12 col-lg-4 my_cus">
              <Image className="img-fluid my_cus" src={profile_1} objectFit="contain" layout='fill' alt="Img not found"/>
            </div>
            <div className="col-sm-12 col-lg-8 my_text">
              <h3
                className="textai"
                style={{ fontFamily: '"Advent Pro", sans-serif' }}
              >
                <i>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry printing and typesetting industry.
                </i>
              </h3>
              <p className="textai">
                <b style={{ fontSize: 18 }}>Jon Maxwall 1</b>{" "}
                <span style={{ fontSize: 13 }}>- Web Designer</span>{" "}
              </p>
              <div className="textai">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mySlides fade">
        {" "}
        {/*-Slide 2 --*/}
        <div className="container">
          <div className="row" style={{ padding: "5% 0px 5% 0px" }}>
            <div className="col-sm-12 col-lg-4 my_cus">
              <Image className="img-fluid my_cus" src={profile_2}  objectFit="contain" layout='fill' alt="Img not found"/>
            </div>
            <div className="col-sm-12 col-lg-8 my_text">
              <h3
                className="textai"
                style={{ fontFamily: '"Advent Pro", sans-serif' }}
              >
                <i>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry printing and typesetting industry.
                </i>
              </h3>
              <p className="textai">
                <b style={{ fontSize: 18 }}>Jon Maxwall 2</b>{" "}
                <span style={{ fontSize: 13 }}>- Web Designer</span>{" "}
              </p>
              <div className="textai">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mySlides fade">
        {" "}
        {/*-Slide 3 --*/}
        <div className="container">
          <div className="row" style={{ padding: "5% 0px 5% 0px" }}>
            <div className="col-sm-12 col-lg-4 my_cus">
              <Image className="img-fluid my_cus" src={profile_3} objectFit="contain" layout='fill' alt="Img not found"/>
            </div>
            <div className="col-sm-12 col-lg-8 my_text">
              <h3
                className="textai"
                style={{ fontFamily: '"Advent Pro", sans-serif' }}
              >
                <i>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry printing and typesetting industry.
                </i>
              </h3>
              <p className="textai">
                <b style={{ fontSize: 18 }}>Jon Maxwall 3</b>{" "}
                <span style={{ fontSize: 13 }}>- Web Designer</span>{" "}
              </p>
              <div className="textai">
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
                <i className="fa fa-star" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="slider_btn">
      <div className="prev_btn" >
        <i className="fa fa-arrow-left" aria-hidden="true" />
      </div>
      <div className="nxt_btn">
        <i className="fa fa-arrow-right" aria-hidden="true" />
      </div>
    </div>
    {/* section 4 close*/}
    {/* section 5 start*/}
    <div className="container-fluid">
      {/* <div class="col"><h6 class="text-center text-white">BLOG POST</h6></div> */}
      {/* <div class="col"><h2 class="text-center text-white">I love to write article</h2></div> */}
      <div className="row" style={{ marginTop: 25 }}>
        <div className="col-12 col-md-4 sec_inner_4">
          <div className="card-content">
            <div className="card-img">
              <Image
                className="sec_img_5"
                src={web_ui_1_min}
                alt="img not found"
                
              />
            </div>
            <div className="card-desc">
              <h3>27-09-2022</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laboriosam, voluptatum! Dolor quo, perspiciatis voluptas totam
              </p>
              <a
                href="#"
                className="btn-card view_btn"
                view_btn={1}
                onClick={e => e.preventDefault()}
              >
                View More
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 sec_inner_4">
          <div className="card-content">
            <div className="card-img">
              <Image
                className="sec_img_5"
                src={web_ui_2_min}
                alt="img not found"
              />
            </div>
            <div className="card-desc">
              <h3>27-09-2022</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laboriosam, voluptatum! Dolor quo, perspiciatis voluptas totam
              </p>
              <a
                href="#"
                className="btn-card view_btn"
                view_btn={2}
                onClick={e => e.preventDefault()}
              >
                View More
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 sec_inner_4">
          <div className="card-content">
            <div className="card-img">
              <Image
                className="sec_img_5"
                src={web_ui_3_min}
                alt="img not found"
              />
            </div>
            <div className="card-desc">
              <h3>27-09-2022</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laboriosam, voluptatum! Dolor quo, perspiciatis voluptas totam
              </p>
              <a
              href="#"
              className="btn-card view_btn"
              view_btn={3}
              onClick={e => e.preventDefault()}
              >
                View More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="pop_blur" />
    <div className="popup">
      <button className="exit">X</button>
      <div className="pop_logo" />
      <div className="center_img" />
      <div className="pop_text">
        <p className="pop_txt">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          velit distinctio odio ab dolore explicabo aspernatur quas minus dolorem.
          Culpa earum aspernatur, doloribus porro expedita odit doloremque
          molestias veniam voluptas.
        </p>
      </div>
    </div>
    {/* section 5 close*/}
    {/* section 6 Open*/}
    <div className="container-fluid sec_div_5" style={{ padding: 0 }}>
      <div className="">
        <h6 className="text-center text-white">OUR CONTACT</h6>
      </div>
      <div className="">
        <h2 className="text-center text-white">Get In Touch</h2>
      </div>
      <div className="row" style={{ textAlign: "center" }}>
        <div
          style={{ marginLeft: "auto" }}
          className="col-12 col-lg-3 sec_spacing_6"
        >
          <i className="fa fa-phone icon1" style={{ padding: 11 }} />
          <b className="text1">&nbsp;&nbsp;+866 754 858 445</b>
        </div>
        <div className="col-12 col-lg-3 sec_spacing_6">
          <i className="fa fa-map icon1" style={{ padding: 11 }} />
          <b className="text1">&nbsp;&nbsp;demo@example.com</b>
        </div>
        <div
          style={{ marginRight: "auto" }}
          className="col-12 col-lg-3 sec_spacing_6"
        >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <i className="fa fa-envelope icon1" style={{ padding: 11 }} />
          <b className="text1">&nbsp;&nbsp;20c Avenue, lakepool, USA</b>
        </div>
      </div>
      {/* form start*/}
      <div
        className="container-fluid"
        style={{ padding: 0, marginBottom: "2rem" }}
      >
        {/* <div class="row"> */}
        <div className="main-form">
          <hr />
          <form className="container" useref="form" onSubmit={sendEmail}>
            <div className="row">
              <div className="col-lg-6 col-sm-6 col-12">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="validationCustom01"
                    placeholder="Your Name"
                    required=""
                  />
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 col-12">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="validationCustom02"
                    placeholder="Your Email"
                    required=""
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-sm-12 col-12">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="validationCustom03"
                    placeholder="Your Subject"
                    required=""
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-sm-12 col-12">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="comment"
                    id="validationCustom04"
                    placeholder="Your Comment.."
                    required=""
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-sm-12 col-12 text-center">

                <input type="submit" className="btn btn-info" value="SUBMIT"/>
              </div>
            </div>
          </form>
        </div>
        {/* </div>   */}
      </div>
      {/* form end*/}
    </div>
    {/* section 6 close*/}
    {/* </div> */}
    {/* Mian Section Close */}
    {/*-------------------- footer start --------------------*/}
    {/* <footer> */}
    <div className="container-fluid footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3 footer_content">
            <Image className="fiv1" src={logo}  alt="Img not found"/>
            <p className="fiv2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="demopadding">
              <i className="fa fa-facebook footer_icons" style={{ width: 37 }} />
              <i className="fa fa-twitter footer_icons" />
              <i className="fa fa-github footer_icons" />
              <i className="fa fa-youtube-play footer_icons" />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 footer_content">
            <h3 className="fiv3">OUR ADDRESS</h3>
            <h3>
              <p className="fiv3a">
                Suite # 401, Kashif Center near Mehran Hotel, Naval Private Road,
                Sharah-e-Faisal, Karachi.{" "}
              </p>
            </h3>
            <h3 className="fiv3">OUR EMAIL</h3>
            <h3>
              <p className="fiv3a">Protonteks@gmail.com</p>
            </h3>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 footer_content">
            <h3 className="five3">NAVIGATION</h3>
            <h3>
              <div className="five3a">
                <ul id="footer_list">
                  <li>
                    <a href="#one" className="fiv3b">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#About" className="fiv3b">
                      About
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#portfolio" className="fiv3b">
                      Portfolio
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#testimonial" className="fiv3b">
                      Testimonial
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="fiv3b">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </h3>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 footer_content">
            <h3 className="five3">TWITTER FEED</h3>
            <h3>
              <div className="five3a">
                <div className="testimonials-section five3a">
                  <input
                    type="radio"
                    name="slider"
                    title="slide1"
                    defaultChecked="checked"
                    className="slider__nav"
                  />
                  <input
                    type="radio"
                    name="slider"
                    title="slide2"
                    className="slider__nav"
                  />
                  <input
                    type="radio"
                    name="slider"
                    title="slide3"
                    className="slider__nav"
                  />
                  <input
                    type="radio"
                    name="slider"
                    title="slide4"
                    className="slider__nav"
                  />
                  <input
                    type="radio"
                    name="slider"
                    title="slide5"
                    className="slider__nav"
                  />
                  <div className="slider__inner">
                    <div className="slider__contents">
                      <p className="slider__txt">
                        <i className="fa fa-twitter" />
                        &nbsp;&nbsp; Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry printing and
                        typesetting.
                      </p>
                    </div>
                    <div className="slider__contents">
                      <p className="slider__txt">
                        <i className="fa fa-twitter" />
                        &nbsp;&nbsp;Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry printing and
                        typesetting.
                      </p>
                    </div>
                    <div className="slider__contents">
                      <p className="slider__txt">
                        <i className="fa fa-twitter" />
                        &nbsp;&nbsp;Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry printing and
                        typesetting.
                      </p>
                    </div>
                    <div className="slider__contents">
                      <p className="slider__txt">
                        <i className="fa fa-twitter" />
                        &nbsp;&nbsp;Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry printing and
                        typesetting.
                      </p>
                    </div>
                    <div className="slider__contents">
                      <p className="slider__txt">
                        <i className="fa fa-twitter" />
                        &nbsp;&nbsp;Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry printing and
                        typesetting.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </h3>
          </div>
        </div>
      </div>
    </div>
    {/* </footer> */}
    {/*-------------------- footer end --------------------*/}
    </>
  )
}
