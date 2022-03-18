import React from 'react'
import User from './User';

const Users = ({userList, onDelete, onUpdate}) => {



  return (
    <div className='test'>
      {
          userList.map(item => {
            return <User key={item.id} user={item} onDelete={onDelete} onUpdate={onUpdate}/>
          })
      }
    </div>
  );
}

export default Users