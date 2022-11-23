import React from 'react';

import { Article, Brand, CTA, Feature, Navbar } from './components';
import { Footer, Header, Cards, Whatpaddypedalpower, Blog, Features} from './containers';

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar></Navbar>
        <Header></Header>
      </div>
      <Cards/>
      <Whatpaddypedalpower/>
      <Features/>
      <CTA/>
      <Blog/>
      <Article/>
      <Footer/>

    </div>
  )
}

export default App;