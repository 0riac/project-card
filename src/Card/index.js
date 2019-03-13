import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.div`
  display: inline-block;
  width: 8em;
  background: #0096D7;
  box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
  border: none;
  border-radius: 4px;
  font-family: sans-serif;
  font-size: 14px;
  text-align: center;
  color: #FFF;
  padding: 0.75em 1em;
  margin: 27px auto 0 auto;
  
  :hover {
    background: #0056A7;
  }
  
  cursor: pointer;
`;

const Wrapper = styled.div`
  width: 293px;
  display: flex;
  flex-flow: column wrap;
  background: #FFF;
  box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
  border-radius: 4px;
`;

const Link = styled.a`
  text-align: center;
  font-size: 0.75rem;  
  margin: 1em 0;
  color: #0096D7;
  text-decoration: none;
  :hover {
    color: #004697;
  }
`;

const RequestInfo = styled.div`
  width: 223px;
  height: 114px;
  margin: 2.5em auto 0 auto;
  display: flex;
  flex-flow: column wrap;
  span {
    text-align: center;
  }
  
  > span:nth-child(1) {
    font-size: 18px;
    color: #3E3934;
  }
  
  > span:nth-child(2) {
    font-size: 12px;
    color: #9F9C9A;
    flex: 1
  }
  
  > span:nth-child(3) {
    font-size: 12px;
    color: #9F9C9A;
  }
`;

const Line = styled.hr`
  height: 1px;
  width: 100%;
  border: none;
  margin: 15px 0 17px 0;
  background-color: #E9E9EC;
`;

const ResponseInfo = styled.div`
  width: 238px;
  margin: 0 auto;
  display: flex;
  //justify-content: center;
  flex-flow: column wrap;
  
  > span {
    //width: 80%;
    font-size: 14px;
    text-align: center;
    color: #9F9C9A;
    padding: 0 1em;
    margin-top: 24px;
  }
`;

const ResponseIcons = styled.div`
  display: flex;
  justify-content: center;
`;

const Icon = styled.div`
  position: relative;
  margin: 0 0.5em 0 0;
  
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 0.1em solid #E9E9EC;
    box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
  }
 
  > div {
    position: absolute;
    right: -2px;
    top: -1px;
    font-size: 12px;
    font-weight: 700;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background: #FF4444;
    color: #FFF;
    text-align: center;
    padding: 0 0 1px 0;
    margin: 0;
 }
`;

class Card extends Component {

  constructor(props) {
    super(props);
    this.state = {...props};
  }

  render() {
    return (
      <Wrapper>
        <RequestInfo>
          <span>{this.props.requestName}</span>
          <span>{this.props.dateOfCreation}</span>
          <span>Pedido publicado. <Link href={"#"}>Actualizar</Link></span>
        </RequestInfo>
        <Line/>
        <ResponseInfo>
          <ResponseIcons>
            {this.state.images.map(item => {
              return <Icon>
                <img src={item} alt={""}/>
                <div>!</div>
              </Icon>
            })}
          </ResponseIcons>
          <span>{this.state.offerCount}  profissional está pronto para realizar este projeto</span>
        </ResponseInfo>
        <Button><span>Ver {this.state.offerCount} proposta</span></Button>
        <Link href={this.props.newRequest}>Fazer novo pedido</Link>
    </Wrapper>);
  }
}

export default Card;