import Head from '../../components/head';
import { Button, Modal, Alert, Form } from 'react-bootstrap';
import Link from 'next/link';
import fetcher from '../../utils/fetcher'
import useSWR from 'swr';

const preventDefault = f => e => {
  e.preventDefault()
  f(e)
}


export default function Home() { 
  
  async function LogOut() {
    document.cookie = "Token=" + ""
    document.location.assign("/")
  }
  const { data, error } = useSWR("../api/verify", fetcher);

  if (error){
    <body>
    <h1 style={{textAlign: 'center', marginTop: '30px', fontWeight: '600'}}> 로그인 세션이 만료되었거나 에러가 발생 하였습니다. </h1>
    <form style={{textAlign: 'center'}} action='/' method='GET'>
    <Button type="submit" variant="primary">로그인 화면으로</Button>
    </form>
  </body>
  }

  if (!data){
    return(
        <body>
            <h1 style={{textAlign: 'center', marginTop: '30px', fontWeight: '600', color: 'white'}}> 로딩중 ... </h1>
        </body>
    ) 
  } else if (data.success == true) {
    return (
      <body style={{height: '100%', textAlign: 'center', marginTop: '80px'}}>
        <Head/>
        <div style={{textAlign: 'center'}}>
            <p style={{textAlign: 'center', color: 'white', fontWeight: '600', fontSize: '35px'}}>Base User Main</p>
            <h3 style={{color: 'white', fontWeight: '600'}}>{ data.username }</h3>
            <Link href="/user/info"><Button style={{marginTop: '20px'}} className="Button1" variant="primary" type="button">1</Button></Link><br/>
            <Link href="/user/nuker"><Button style={{marginTop: '20px'}} className="Button1" variant="primary" type="button">2</Button></Link><br/>
            <Button style={{marginTop: '20px'}} className="Button1" variant="primary" type="button" onClick={LogOut}>Log Out</Button><br/>
        </div>
      </body>
    )
  }else {
    <body>
    <h1 style={{textAlign: 'center', marginTop: '30px', fontWeight: '600'}}> 로그인 세션이 만료되었거나 에러가 발생 하였습니다. </h1>
    <form style={{textAlign: 'center'}} action='/' method='GET'>
    <Button type="submit" variant="primary">로그인 화면으로</Button>
    </form>
    </body>
  }
}
