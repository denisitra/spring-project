import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

function App(props) {
  return (
    <React.Fragment>
      <Header list={props.list}/>
      <Main state={props.state}/>
      <Footer />
    </React.Fragment>
  );
}

export default App;
