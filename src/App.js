import React from 'react';
import {Route} from 'react-router-dom';

import Layout from './component/Layout/Layout';
import Home from './container/Home';
import Contact from './container/Contact';
import Skills from './container/Skills';

function App() {

  return (
    <div>
      <Layout>
          <Route path='/' exact component={Home}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/skills' component={Skills}/>
      </Layout>
    </div>
  );
}

export default App;
