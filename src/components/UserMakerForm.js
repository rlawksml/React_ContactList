import React, { useState } from 'react'
import styled from "styled-components"

const UserMakerForm = ({onCreate}) =>{

  const [name, setName] = useState('')

  const [phone, setPhone] = useState('')

  const handleChange = (e) => {

    e.target.name === "name" ? setName(e.target.value) : setPhone(e.target.value)
  }
  const handleUserRegist = (e) => {
    e.preventDefault();
    onCreate({name, phone})
    setName("")
    setPhone("")
  }
  
  return (
  <InputForm>
    <input placeholder='name' name="name" value={name} onChange={handleChange}/>
    <input placeholder='phone' name="phone" value={phone} onChange={handleChange}/>
    <RegisterButton onClick={handleUserRegist}>등록</RegisterButton>
  </InputForm>
  )
}

const InputForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  flex-wrap: wrap;
  input{
    margin: 10px;
    flex: 0 0 300px;
  }
  button{
    display: block;
    flex: 0 1 100px
  }
`;

const RegisterButton = styled.button`
  background-color : transparent;
  font-size: 14px;
  border: 1px solid dodgerblue;
  &:hover{
    font-weight: bold;
  }
  cursor: pointer;
`

export default UserMakerForm