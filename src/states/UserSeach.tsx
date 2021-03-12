import {useState} from 'react';

const users = [

 {name  : 'Sarah' , age : 35},
 {name  : 'Antonio' , age : 35},
 {name  : 'Demian' , age : 35}

];

const UserSeach: React.FC =() =>{
const [name ,setName ] =  useState(''); 

const [user ,setuser]  =  useState<{name: string, age : number} | undefined >(); 

const onclick = () =>{
  const foundUser = users.find((users) => {
      return users.name === name;  
  } );

  setuser(foundUser);
};  
  return <div>
    Pesquisar
     <input value={name} onChange= {e => setName(e.target.value)}/>
    <button onClick={onclick}> Find User</button>

    <div>
        {user && user.name}
        {user && user.age}
    </div>
  </div>
};

export default UserSeach