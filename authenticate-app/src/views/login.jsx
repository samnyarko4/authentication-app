import goIcon from '../assets/Google.svg'
import gIcon from '../assets/Gihub.svg'
import fIcon from '../assets/Facebook.svg'
import tIcon from '../assets/Twitter.svg'
import {Link} from 'react-router-dom'
 function Login () {
return(
<>
<div className="login-card">
    <h1>Login</h1>

    <div className="signup-input">
<i class="fa-solid fa-envelope"></i>
<input type="text" placeholder='Email' />
</div>

<div className="pass-input-sign">
<i class="fa-solid fa-lock"></i>
<input type="text" placeholder='Password' />
</div>

<button className='login-button'>Login</button>

<p className='option-p'>or continue with these social profile</p>

<div className='social-icon-list'>

<img src={goIcon} alt="" />

<img src={fIcon} alt="" />

<img src={tIcon} alt="" />

<img src={gIcon} alt="" />

</div>
<p className="login-link">Dont have an account yet? <Link to={'/signup'}><span >Register</span></Link></p>
</div>
</>
)
}
export default Login