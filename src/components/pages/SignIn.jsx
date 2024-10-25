import React from 'react';
import "./Pages.css";
import { Link } from 'react-router-dom';
import logo from '../images/uncommon-half-block.png';
import email from '../images/icons/mail.png';
import password from '../images/icons/padlock.png';

export const SignIn = () => {
  return (
    <div>
        <div className="sign_in_grid_container">
            <div className="sign_into_account_side">
                <div className="overall_container flex_sign_in">
                    <img className='sign_in_logo' src={logo} alt='Our Logo' />
                    <div className="sign_into_account_content">
                        <h1 className='sign_into_account overall_heads chillax_heads'>Create Account</h1>
                        <div className="google_sign_up">
                            <Link><i class="fa-brands fa-google"></i> Sign in with Google</Link>
                        </div>
                        <p className="or_statement">or use your Email Account to Sign In</p>
                        <div className="form_container">
                            <div className="input_big_container">
                                <div className="input_container">
                                    <div className="img_input_container">
                                        <img src={email} alt='' />
                                    </div>
                                    <input type="email" placeholder='Email Address' />
                                </div>
                                <div className="input_container">
                                    <div className="img_input_container">
                                        <img src={password} alt='' />
                                    </div>
                                    <input type="password" placeholder='Password' />
                                </div>
                            </div>
                            <button className='submit_sign_up_btn' type="submit">SIGN IN</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blue_sign_up_side">
                <div className="overall_container">
                    {/* Sub-Content on the Blue Bg Container */}
                    <div className="subcontent">
                        <h1 className="subcontent_head chillax_heads">Welcome Back!</h1>
                        <p className="subcontent_par">To keep connected with us please log in with you personal info.
                        </p>
                        <p className="start_journey">start the journey with us.</p>

                        <div className="btn_container">
                            <Link to='/' className='sign_in_btn'>SIGN UP</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
