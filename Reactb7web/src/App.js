import React, { useState } from 'react';

function App() {
  const [ name, setName ] = useState('');
  const [ subName, setSubName ] = useState('');
  const [ year, setYear ] = useState(0);

  return (
    <>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />
      <br/>
      <input
        type="text"
        placeholder="Sobrenome"
        value={subName}
        onChange={(e)=>setSubName(e.target.value)}
      />
      <br/>
      <input
        type="number"
        placeholder="Idade"
        value={year}
        onChange={(e)=>setYear(e.target.value)}
      />
      <br/>
      <hr/>
      <br/>
      <h1>Olá {(name && subName) ? `${name} ${subName}` : '---'}, tudo bem?</h1>
      <h2>Você tem { year ? `${year}` : "---"} anos</h2>
    </>
  );
}

export default App;
