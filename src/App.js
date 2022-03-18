import { useRef, useState } from 'react';
import './App.css';
import UserMakerForm from './components/UserMakerForm';
import Users from './components/Users';
import styled from 'styled-components'
import User from './components/User'

function App() {

  const [userList, setUserList] = useState([
    {id:1, name : 'jin', phone : '010'},
    {id:2, name : 'hee', phone : '011'},
    {id:3, name : 'kim', phone : '012'},
  ])

  let nextid = useRef(4)

  const onUpdate = (data) => {
    console.log(data)
  }

  const onDelete = (data) => {
    setUserList(
      userList.filter(user => {
        user.id === data.id ? 
      })
    )

  }

  const onCreate = (data) => {
    const user = {
      id : nextid.current,
      ...data
    }

    setUserList(
      [...userList,user ]
    )

    nextid.current += 1
  }



  return (
    <>
      <Title className="title">Contact List</Title>
      <div className="App">
      <UserMakerForm onCreate={onCreate} />
      <Users userList={userList} onDelete={onDelete} onUpdate={onUpdate}/>
      </div>
    </>

  );
}


const Title = styled.h2`
font-size: 32px;
color: salmon;
text-align:center;
`;

export default App;
