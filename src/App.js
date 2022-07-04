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
      <brand></brand>
      <whatpaddypedalpower></whatpaddypedalpower>
      <features></features>
      <possibility></possibility>
      <cta></cta>
      <blog></blog>
      <footer></footer>

    </div>
  )
}

export default App