import React, { Component } from "react";
import styled from "styled-components";

export const Title = styled.h1`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 900;
  text-align: center;
`;

export const Calculadora = styled.div`
  background: linear-gradient(-60deg, #ffa500, #ff4500);
  background-size: 400% 400%;
  animation: gradient 2s ease infinite;
  max-width: 400px;
  width: 100%;
  height: 90vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 50px;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  input {
    border: none;
    padding: 10px;
    outline: none;
    border-radius: 10px;
    text-align: center;
  }

  div {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }

  button {
    border: none;
    border-radius: 20px;
    background-color: white;
    width: 50px;
    height: 7vh;
    cursor: pointer;
  }

  h2 {
    background-color: #fff;
    border-radius: 10px;
    width: 15%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1em;
  }
`;

export default class App extends Component {
  state = {
    n1: "",
    n2: "",
    result: ""
  };

  soma = () => {
    this.setState({
      result: this.state.n1 + this.state.n2
    });
  };

  handleChange1 = (event) => {
    this.setState({
      n1: Number(event.target.value)
    });
  };

  handleChange2 = (event) => {
    this.setState({
      n2: Number(event.target.value)
    });
  };

  menos = () => {
    this.setState({
      result: this.state.n1 - this.state.n2
    });
  };

  dividir = () => {
    this.setState({
      result: this.state.n1 / this.state.n2
    });
  };

  multiplicar = () => {
    this.setState({
      result: this.state.n1 * this.state.n2
    });
  };

  limpar = () => {
    this.setState({
      result: ""
    });
  };

  render() {
    return (
      <Calculadora>
        <Title>Calculadora</Title>
        <input type="number" onChange={this.handleChange1} />
        <input type="number" onChange={this.handleChange2} />
        <div>
          <button onClick={this.soma}>+</button>
          <button onClick={this.menos}>-</button>
          <button onClick={this.dividir}>/</button>
          <button onClick={this.multiplicar}>*</button>
          <button onClick={this.limpar}>C</button>
        </div>
        <h2>{this.state.result}</h2>
      </Calculadora>
    );
  }
}
