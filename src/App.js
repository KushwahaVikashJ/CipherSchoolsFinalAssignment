import React from 'react';
import {Route} from 'react-router-dom';

import Layout from './component/Layout/Layout';
import Dasboard from './container/Dashboard';


function App() {
  return (
    <div>
      <Layout>
          <Route path='/' exact component={Dasboard}/>

      </Layout>
    </div>
  );
}

export default App;
