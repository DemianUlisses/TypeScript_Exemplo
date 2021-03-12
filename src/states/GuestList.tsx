
import{useState} from 'react';

const GuestList: React.FC = () => {

    const [name,setname] = useState('');
    const [guests, setGuess] = useState<string[]>([ ]);

    const onClick =() => {
        setname('');
        setGuess([...guests,name ])
    }
    
    return (
    
    <div>
      <h3> Lista de Nomes  </h3>
    
      <ul>
          {guests.map(guest => <li key={guest}> {guest}</li>)}
      </ul>
      <input value= {name} onChange= {(e) => setname(e.target.value)  } />

      <button onClick={onClick}>Adiciona Usuario</button>
    </div>
   ) ;
};

export default GuestList;
