import React from 'react'
import styled from 'styled-components'


const User = ({user, onDelete, onUpdate}) => {

  const handleUserDate = (e) => {
    const { name } = e.target
    name === "update" ? onUpdate(user) : onDelete(user);
  } 

  return (
    <StyeldUser className='user'>
      <StyledUserText>{user.name}</StyledUserText>
      <StyledUserText>{user.phone}</StyledUserText> 
      <StyledButton onClick={handleUserDate} name="update" className="ud_btn">수정</StyledButton>
      <StyledButton onClick={handleUserDate} name="delete" className="ud_btn">삭제</StyledButton>
    </StyeldUser>
  );
}

const StyeldUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.5px solid dodgerblue;
  &:hover{
    opacity: 0.5;
  }
`;

const StyledUserText = styled.h2`
margin: 5px 0.5px;
padding: 10px;
width: 300px;
`;

const StyledButton = styled.button`
  border: 1px solid dodgerblue;
  background-color: transparent;
  padding: 8px 10px;
  cursor:pointer;
  margin:10px;
  &:hover{
    font-weight:bold;
  }
`;

export default User