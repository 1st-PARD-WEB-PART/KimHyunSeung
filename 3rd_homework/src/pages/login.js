import React, {/* useState */} from "react";
import "./login.css"
import { useNavigate } from "react-router-dom";
import Footer from "../footer";
function Login() {

    // const [email, setemail] = useState('');
    // const [pw, setpw] = useState('');
    // const onChange = (event) => {
    //     setemail(event.target.value);
    // }
    // const onChange2 = (event) => {
    //     setpw(event.target.value);
    // }
    const navigate = useNavigate();
    const onClick = ()=>{
        navigate("/home/Home"); 
    };
    return (
        <div>
            <div className="textbox">
                <h1>Facebook</h1>
                <h2>Connect with friends and the<br/>world around you on Facebook</h2>
                
            </div>
            <main className="container">
                <div className="form">
                    <input type = "text" placeholder="E-mail or Phone number"/><br/>
                    <input type = "password" placeholder="Password"/><br/>
                    <button onClick={onClick}>Log In</button>
                    <p><a href="\">forgot Password</a><br/></p>
                </div>
                <hr></hr>
                <div className="btn">
                        <button>Create New Acount</button>
                </div>
            </main>
            <div>
            <Footer/> 
            </div>

        </div>

        
    )
  };

  
  export default Login;