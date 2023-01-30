import { useState } from 'react';
import styled from 'styled-components';


const ChildBurger = styled.span`
  position: relative;
  background-color: ${(props) => (props.click ? "transparent" : "rgb(156 163 175)")};
  width: 2.5rem;
  height: 5px;
  display: inline-block;
  border-radius: 5px;
  display: inline-block;
  transition: all 0.3s;
  // margin: 0 auto;
  // top: 10%;
  &::before,
  &::after{
    border-radius: 5px;
    content: "";
    background-color: rgb(156 163 175);
    width: 100%;
    height: 5px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }
  &::after{
    
    top: ${(props) => !props.click ? '12px' : '0'};
    transform: ${(props) => props.click ? 'rotate(135deg)' : 'rotate(0)'}
  }
  &::before{
    top: ${(props) => !props.click ? '-12px' : '0'};
    transform: ${(props) => props.click ? 'rotate(-135deg)' : 'rotate(0)'}

  }
`;

const Burger = ( { click, onClick } ) => {

  return (
    <div className="relative cursor-pointer">
      <ChildBurger click={click} onClick={onClick}></ChildBurger>
    </div>
  )
}

export default Burger;