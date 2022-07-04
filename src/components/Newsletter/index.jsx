import * as React from 'react'
import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'
import TextField from '@mui/material/TextField'

function Newsletter() {
  const [input, setInput] = useState("")

  const inputHandler = (e) => {
    setInput(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()

    if (input) {
      // console.log(input)

      const baseUrl = 'https://leonardosouzafragas13560.api-us1.com'
      let getContacts = baseUrl + '/contacts'

      fetch(getContacts, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Methods': 'POST, GET',
          'Access-Control-Allow-Headers': '*',
          'Api-Token': 'd57382b6b6d2d6a83f447c5c4e54fd355eeee8cf5f7fcd89b6965a1b7f99263d7cb3182f'
        }, 
        // body: JSON.stringify(data)
      }).then(res => {
        console.log("Request complete! response:", res);
      });
    }
  }

  return (
    <form
      onSubmit={submitHandler}
    >
      <CssBaseline />
      <TextField
        required
        type="email"
        label="Digite seu melhor email"
        variant="outlined"
        sx={{
          flexGrow: 2,
          marginRight: '10px'
        }}
        onChange={inputHandler}
      />

      <Button
        type="submit"
        size="large"
        variant="contained"
        endIcon={<SendIcon />}>
        Cadastrar agora
      </Button>
    </form>
  )
}

export default Newsletter