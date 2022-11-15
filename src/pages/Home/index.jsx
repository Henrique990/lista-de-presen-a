import React, {useState} from 'react'
import './styles.css'
import { Card } from '../../components/Card'
import { useEffect } from 'react'

export function Home() {
  const [studentName, setStudantName] = useState()

  const [students, setStudents] = useState([])

  const [user, setUser] = useState({ name: '', avatar: '' });

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-BR",{
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };

    setStudents((prevStudents) => [...prevStudents, newStudent]);
  }

  useEffect(() => {
    // api do github name: henrique990
    async function fetchData() {
      const response = await fetch('https://api.github.com/users/henrique990');
      const data = await response.json();

      console.log("DADOS GITHUB ===>", data);

      setUser({
        name: data.name,
        avatar: data.avatar_url,
      });
    }
    // fetch("https://api.github.com/users/henrique990")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setUser({
    //       name: data.name,
    //       avatar: data.avatar_url,
    //   })
    // })

    fetchData();
  }, []);

  return (
    <div className='container'>
      <header>
      <h1>Lista de Presença: {studentName}</h1>
      <div>
        <strong>Henrique</strong>
        <img src="https://github.com/henrique990.png" alt="Foto de perfil" />
      </div>
      </header>
      <input 
        type="text" 
        placeholder="Digite o nome..." 
        onChange={e => setStudantName(e.target.value)}
        />

      <button type="button" onClick={handleAddStudent}>Adicionar</button>

      {students.map((student) => (
        <Card 
          key={student.time}
          name={student.name} 
          time={student.time} 
        />
      ))}
    </div>
  )
}