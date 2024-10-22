import React, { useState } from 'react'
function Functional(){
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [err1, setErr1] = useState(false);
  const [err2, setErr2] = useState(false);

  function submitData(e){

    if(name.length < 3 && mail.length < 3){         
      alert('please enter')
    }else{
      alert('Success!');
    }
   e.preventDefault();
  }

  function handleData(val){
  let item = val.length;

  if(item < 3 || item > 8){
    setErr1(true);
  }else{
    setErr1(false);
  }
  setName(item);
  }

  function handleData1(val){
    let item = val.length;

    if (item < 3 || item > 8){
      setErr2(true);
    } else {
      setErr2(false);
    }
    setMail(item)
  }

  return (
    <div>
      <h1>Validation</h1>
      <form>
        Enter Name: <input type="text" placeholder='Enter Name'  onKeyUp={(e)=>handleData(e.target.value)}/> {err1 ? <span style={{color : 'red'}}>Please enter Valid name</span> : null}<br /><br />
        Enter Email-Id: <input type="text" placeholder='Enter Password' onKeyUp={(e)=>handleData1(e.target.value)}/>{err2 ? <span style={{ color: 'red' }}>Please enter valid Pssword</span> : null}<br /><br />
      <button onClick={submitData}>Click</button>
      </form>
    </div>
  )
}
export default Functional;
