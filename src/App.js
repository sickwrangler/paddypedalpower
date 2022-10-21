import React from 'react';

import { Article, Brand, CTA, Feature, Navbar } from './components';
import { Footer, Header, Possibility, Whatpaddypedalpower, Blog, Features} from './containers';

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar></Navbar>
        <Header></Header>
      </div>
      <Brand/>
      <Whatpaddypedalpower/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>

    </div>
  )
}

export default App;