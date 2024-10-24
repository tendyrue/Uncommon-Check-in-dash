import React, { useState } from 'react';
import "./Pages.css";
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase'; // Import Firebase auth instance
import logo from '../images/uncommon-half-block.png';
import emailIcon from '../images/icons/mail.png';
import passwordIcon from '../images/icons/padlock.png';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook for redirection

  const handleSignIn = async (e) => {
    e.preventDefault(); // Prevent form reload
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // On successful login, redirect to MainDash
      navigate('/maindash');
    } catch (error) {
      setError('Failed to sign in. Please check your credentials.');
      console.error(error);
    }
  };

  return (
    <div className="sign_up_grid_container">
      <div className="blue_sign_up_side">
        <div className="overall_container">
          <img className='logo' src={logo} alt='Our Logo' />
          <div className="subcontent">
            <h1 className="subcontent_head chillax_heads">Hello Friend</h1>
            <p className="subcontent_par">
              Enter your personal details to Sign In to our
              <strong> Uncommon</strong> Check-In System.
            </p>
            <p className="start_journey">Start the journey with us.</p>

            <div className="btn_container">
              <Link to='/' className='sign_in_btn'>SIGN UP</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="create_account_side">
        <div className="overall_container">
          <div className="create_account_content">
            <h1 className='create_account overall_heads chillax_heads'>Sign In</h1>
            <div className="google_sign_up">
              <Link>Sign in with Google</Link>
            </div>
            <p className="or_statement">or use your Email Account</p>

            <form className="form_container" onSubmit={handleSignIn}>
              <div className="input_big_container">
                <div className="input_container">
                  <div className="img_input_container">
                    <img src={emailIcon} alt='Email Icon' />
                  </div>
                  <input
                    type="email"
                    placeholder='Email Address'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="input_container">
                  <div className="img_input_container">
                    <img src={passwordIcon} alt='Password Icon' />
                  </div>
                  <input
                    type="password"
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              {error && <p className="error_message">{error}</p>}

              <button className='submit_sign_up_btn' type="submit">
                SIGN IN
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
