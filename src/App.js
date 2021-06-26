import React,{useState} from 'react';
import './App.css';
import arrow from './images/icon-arrow.svg'
import errorIcon from './images/icon-error.svg'

function App() {


  const [email,setEmail] = useState('')
  const [submit,setSubmit] = useState(false)
  const [error,setError] = useState(false)
  const [emailError,setEmailError] = useState(false)

  const handleChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    setSubmit(!submit)
    if (email === '') {
      setError(true)
    } else if (!email.includes('@')) {
      setEmailError(true)
    }
    if(submit) {
      setError(false)
    }
  }

  return (
    <>
    <div className="mainContainer">
      <div className='header'>
        <div className='circle'></div>
        <div className='headerTitle'>
          <p>BASE APPAREL</p>
        </div>
    </div>
      <div className='imageHero'></div>
      <div className='midContainer'>
        <div>
        <h1><span>WE'RE</span> COMING SOON </h1>
        <p>
          Hello fellow shoppers! We're currently building our new fashion store. 
          Add your email below to stay up-to-date with announcements and our launch deals.
        </p>
        </div>

        
        <form onSubmit={handleSubmit}>
          <div className='formContainer'>
            <label htmlfor='email'></label>
            <span>
              <input 
              type='email'
              onChange={handleChange}
              value={email}
              placeholder='Email Adress'
              />
              <button type='submit'><img src={arrow} alt='arrow button'/></button>
            </span>
            {error ? <p className='errorWarning'>Email cannot be empty</p> : null}
            {error ? <div className='errorIcon'><img src={errorIcon} alt='error' /></div> : null}
            {emailError ? <p>Invalid email format</p> : null}
          </div>
          
        </form>
      </div>
      
      
    </div>
    </>
  );
}

export default App;
