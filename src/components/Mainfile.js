import React from 'react';
import mahilogo from '../Images/mypic2.png';
import logo2   from '../Images/mylogo2.png';
import handwave from '../Images/handwave.gif';

const Mainfile = () => {
  return (
    <div>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Create a Personal Portfolio Website using HTML and CSS | Codehal</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />
          <link rel="stylesheet" href="style.css" />
        </head>
        <body>
          <header>
            <h2 className="logo">
              <span>Hello !.......Hai 👋 </span>
              {/* <img src={logo2}  height={60} /> */}
              {/* <img src={handwave} height={70}/> */}
            </h2>
            
            <nav className="navigation">
              <a href="#" >Home</a>
              <a href="#">About</a>
              <a href="#">Portfolio</a>
              <a href="#">Blog</a>
              <a href="#">Contact</a>
            </nav>
            <a href="#" className="btn-talk">
              Let's Talk
            </a>
          </header>
          <section className="home">
            <div className="content">
              <h3 style={{paddingRight:'380px'}}> I'm 
              </h3>
              
              <h2> <span style={{color:'red'}}>BATTULA MALLESH</span>
              </h2>
              <h4 style={{color:'blue',fontSize:'24px',paddingLeft:'90px'}}>-ReactJS Developer </h4>
              <p>
              I am a <span  style={{color:''}}><b> 1+ year experienced </b> </span>,demonstrating
a proactive approach and dedication to
my work. My strength lies in collaborating
seamlessly within a team, contributing
effectively both as an individual and as an
integral team member. I prioritize
interpersonal connections to successfully
achieve common objectives.
              </p>
              
              <div className="btn-group">
                <a href="#">Hire Me</a>
                <a href="#">See Projects</a>
              </div>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/battula-mallesh-250370211/">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
            <div>
              <img src={mahilogo}  height={400}/>
              👉 <button className="down-btn"> Download CV</button>
          </div>
          </section>
          
        </body>
      </html>
    </div>
  );
};

export default Mainfile;
