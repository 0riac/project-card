import React, { Component } from 'react';
import Card from './Card';

class App extends Component {
  render() {
    return (
      <Card requestName={"Catering para Eventos"}
            dateOfCreation={"12 Janeiro 2017"}
            offerCount={1}
            newRequest={"#"}
            images={['https://i2.wp.com/s3-alpha.figma.com/static/user_x.png']}/>
    );
  }
}

export default App;
