import React, {useState} from 'react'
import './styles.css'
import { Card } from '../../components/Card'

export function Home() {
  const [studentName, setStudantName] = useState()

  return (
    <div className='container'>
      <h1>Lista de Presença {studentName}</h1>
      <input 
        type="text" 
        placeholder="Digite o nome..." 
        onChange={e => setStudantName(e.target.value)}
        />

      <button type="button">Adicionar</button>

      <Card name="Rodrigo" time="10:55:25" />
      <Card name="João" time="11:00:10" />
      <Card name="Henrique" time="18:12" />
    </div>
  )
}