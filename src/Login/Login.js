import React , {useState} from 'react';
import './Login.css';
import { Link , useHistory } from 'react-router-dom';
import { auth } from '../firebase';

function Login() {

    const [password , setPassword] = useState('');
    const [email , setEmail] = useState('');

    const history = useHistory();
    //sign in function

    const signIn = e =>{
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth=>{

                history.push('/');
            })
            .catch(e=>{
                alert('some erreur in login');
            });
    }


    // register functionnnn


    const signUp = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then(auth=>{
                
                if(auth){
                    history.push('/');

                }

            })
            .catch(e=>{
                alert('some erreur in register');

            });

    }


    return (
        <div className="login">
           <Link to="/">
           <img 
                className="login__image"
                src="https://rmhcsoutherncolorado.org/wp-content/uploads/2019/01/amazon-logo-transparent.png"
            />         
           </Link>

             
             <div  className="login__container" >
                <h1>Sign In</h1>

                <form>
                    <h5>E-mail:</h5>
                    <input type="text" value={email}  onChange={e=>setEmail(e.target.value) }    />


                    <h5>Password:</h5>
                    <input type="password"  value={password}  onChange={e=>setPassword(e.target.value) }/>

                    <button type="submit" onClick={signIn}
                     className="login__signin__button">Sign In</button>
                </form>

                <p>
                    By signin you agree to the amazon clone 
                    please see our privacy notice
                </p>

                <button onClick={signUp} className="login__signup__button">Create your amazon account</button>
             </div>

        </div>
    )
}

export default Login;
