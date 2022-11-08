import React from 'react';

import { About, Blog, Counter, Customers, Footer, Header, Navbar, Portfolio, Services, Skills, Startnow, Team} from './container';
import './App.css';
import "swiper/css/bundle";

import styles from './App.module.scss'

const App = () => (
  <div>
    <Navbar/>
    <Header/>
    <About/>
    <Counter/>
    <Services/>
    <Portfolio/>
    <Startnow/>
    <Skills/>
    <Team/>
    <Blog/>
    <Customers/>
    <Footer/>
  </div>
);

export default App;
