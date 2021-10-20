import React, {Component} from 'react';
import "./Form_sign.css"
  
const Form_reset_pwd = () => {
    return (
        <form>
            <div class='bold-line'></div>
                <div class='container'>
                    <div class='window'>
                        <div class='overlay'></div>
                            <div class='content'>
                                <div class='welcome'>Hello There!</div>
                                    <div class='subtitle'>Forgot your password ? <br></br>No problem, you can reset it!</div>
                                        <div class='input-fields'>
                                            <input type='email' id="Email" placeholder='Email' class='input-line full-width' required></input>
                                            <input type='password' id="Password" placeholder='New password' class='input-line full-width' required></input>
                                            <input type='password' id="Password" placeholder='Confirm password' class='input-line full-width' required></input>
                                        </div>
                                        <br></br>
                                        <div><button class='ghost-round full-width'>Reset</button></div>
                                    </div>
                                </div>
                        </div>
        </form>
    )
}
export default Form_reset_pwd;