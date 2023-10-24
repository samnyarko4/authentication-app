import goIcon from '../assets/Google.svg'
import gIcon from '../assets/Gihub.svg'
import fIcon from '../assets/Facebook.svg'
import tIcon from '../assets/Twitter.svg'
import {Link} from 'react-router-dom'

function Signup () {
return(
<div className='login-card'>
<div className="login-label">
<p className="text-wrapper ">Join thousands of learners from around the world</p>
<p className="login-sub">Master web development by making real-life projects. There are multiple paths for you to choose</p>
</div>

<div className="signup-input">
<i class="fa-solid fa-envelope"></i>
<input type="text" placeholder='Email' />
</div>

<div className="pass-input-sign">
<i class="fa-solid fa-lock"></i>
<input type="text" placeholder='Password' />
</div>

<button className='login-button'>Start Coding Now</button>

<p className='option-p'>or continue with these social profile</p>

<div className='social-icon-list'>

<img src={goIcon} alt="" />

<img src={fIcon} alt="" />

<img src={tIcon} alt="" />

<img src={gIcon} alt="" />

</div>

<p className="login-link">Already a member? <Link to={'/login'}><span >Login</span></Link></p>
</div>
)
}
export default Signup