import React from 'react';

import { article, brand, cta, feature, navbar } from './components';
import { footer, header, possibility, whatpaddypedalpower} from './containers';

const App = () => {
  return (
    <div classname="App">
      <div classname="gradient_bg">
        <navbar></navbar>
        <header></header>
      </div>
      <brand/>
      <whatpaddypedalpower/>
      <features/>
      <possibility/>
      <cta/>
      <blog/>
      <footer/>

    </div>
  )
}

export default App