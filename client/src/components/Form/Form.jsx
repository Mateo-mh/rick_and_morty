import { useState } from "react";
import validate from "./validation.js";
import style from "./Form.module.css";


const Form = ({ login }) => {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setUserData({ ...userData, [property]: value });
        validate({ ...userData, [property]: value }, errors, setErrors);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData)
    };

    return (
        <div className={style.card}>
        <div className={style.card2}>
        <form onSubmit={handleSubmit} className={style.form}>
        <p id={style.heading}>Login</p>
            <div className={style.field}>
                <input 
                    className={style.inputField}
                    type="text"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    autocomplete="off"
                    placeholder = 'Email'
                />
                {errors.e1 ? (<p>{errors.e1}</p>)
                : errors.e2 ? (<p>{errors.e2}</p>) 
                : (<p>{errors.e3}</p>)
                }
            </div>

            
            <div className={style.field}>
                <input
                    className={style.inputField}
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                    placeholder = 'Password'
                />
                {
                    errors.p1 ? <p>{errors.p1}</p> : (<p>{errors.p2}</p>)
                }
            </div>

            <div className={style.btn}><button id={style.boton} type="submit">LOGIN</button></div>
            
        </form>
        </div>
        </div>

    );
};

export default Form;

/* <div class="card">
  <div class="card2">
    <form class="form">
    <p id="heading">Login</p>
    <div class="field">
      <input type="text" class="input-field" placeholder="Username" autocomplete="off">
    </div>


    <div class="field">
      <input type="password" class="input-field" placeholder="Password">
    </div>
    <div class="btn">
    <button class="button1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
    <button class="button2">Sign Up</button>
    </div>
    <button class="button3">Forgot Password</button>
</form>
  </div>
    </div> */