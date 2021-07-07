import Head from '../components/head';
import Router, { useRouter } from 'next/router'
import { useState } from "react";
import { Button, Modal, Alert, Form } from 'react-bootstrap';
import Link from 'next/link';

const preventDefault = f => e => {
  e.preventDefault()
  f(e)
}

export default function Home() { 
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  const [CheckPassword, setCheckPassword] = useState("")
  const QueryhandleParam = setValue => e => setValue(e.target.value)
  const register = preventDefault(async () => {
      const res = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
        CheckPassword,
    }),
    }).then((res) => res.json())
  })
  return (
    <body style={{height: '100%', textAlign: 'center', marginTop: '80px'}}>
      <Head/>
      <div style={{textAlign: 'center'}}>
          <h1 style={{textAlign: 'center', color: 'white', fontWeight: '600', marginBottom: '40px'}}>회원가입</h1>
          <form onSubmit={register} method="POST">
              <input type="text" className="TextInput1" onChange={QueryhandleParam(setusername)} placeholder="username"/><br/>
              <input type="password" className="TextInput1" onChange={QueryhandleParam(setpassword)}placeholder="password"/><br/>
              <input type="password" className="TextInput1" onChange={QueryhandleParam(setCheckPassword)} placeholder="Check Password"/><br/>
              <Button style={{marginTop: '20px', marginRight: '15px'}} className="Button2" variant="primary" type="submit">회원가입</Button>
              <Link href="/"><Button style={{marginTop: '20px'}} className="Button2" variant="primary" type="button">로그인</Button></Link>
          </form>
      </div>
    </body>
  )
}
