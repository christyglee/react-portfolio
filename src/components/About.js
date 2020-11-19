import React from 'react';
import Header from './header';
import Contact from './Contact';
import data from './info';
import '../App.css';
// import Footer from './Footer';


const About = () =>{
return (
  <div>
    <Header name={data.name} contactEmail={data.contactEmail}></Header>
    <div className="about_container">
      <h1>{data.aboutTitle}</h1>
      <p>{data.aboutPara[0]}</p>
      <p>{data.aboutPara[1]}</p>
      <p>{data.aboutPara[2]}</p>
      <p>{data.aboutPara[3]}</p>
      <p>{data.aboutPara[4]}</p>
      </div>   

      <div className="about_contact">
        <Contact
          contactEmail={data.contactEmail}
          contactPara={data.contactPara}
          socialLinks={data.social}
        ></Contact>
        
      </div>

  </div>
);
}
export default About;