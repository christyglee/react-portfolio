import React from 'react';
import Header from './header'
import Home from './home';
import Portfolio from './Portfolio';
import Contact from './Contact';
// import Footer from './Footer';


import data from './info';

const Landing = ()=>{
    return(<div className="App">
    <Header name={data.name} contactEmail = {data.contactEmail}></Header>
      <Home name={data.landingPageName} paragraph = {data.landingPagePara[0]} paragraph2 = {data.landingPagePara[1]} authorImage={data.landingPageImage}></Home>
      <Portfolio projects={data.projects}></Portfolio>
      <Contact contactEmail = {data.contactEmail} contactPara= {data.contactPara} socialLinks = {data.social}></Contact>
      {/* <Footer></Footer> */}
    </div>)
}

export default Landing