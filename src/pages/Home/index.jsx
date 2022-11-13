import React, {useState} from 'react'
import './styles.css'
import { Card } from '../../components/Card'

export function Home() {
  const [studentName, setStudantName] = useState()

  const [students, setStudents] = useState([])

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

  return (
    <div className='container'>
      <h1>Lista de Presença: {studentName}</h1>
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