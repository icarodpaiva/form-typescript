import React, { useState } from 'react'

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>

const App = () => {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')

  const handleChangeName = (e: InputChangeEvent) => {
    setName(e.target.value)
  }
  const handleChangeLastName = (e: InputChangeEvent) => {
    setLastName(e.target.value)
  }
  const handleChangeAge = (e: InputChangeEvent) => {
    setAge(e.target.value)
  }

  return (
    <div>
      <div>
        Nome:
        <input type="text" value={name} onChange={handleChangeName} />
      </div>
      <div>
        Sobrenome:
        <input type="text" value={lastName} onChange={handleChangeLastName} />
      </div>
      <div>
        Idade:
        <input type="text" value={age} onChange={handleChangeAge} />
      </div>
      <hr />
      Olá {`${name} ${lastName}`}, tudo bem?
      <br />
      Você tem {age ? age : 'alguns'} anos.
    </div>
  )
}

export default App
