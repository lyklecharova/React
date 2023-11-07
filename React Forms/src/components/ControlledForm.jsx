import { useEffect, useRef, useState } from "react";

import styles from './ControlledForm.module.css';

const formInitalState = {
    username: '',
    password: '',
    age: '',
    gender: 'f',
    swimming: false,
    yoga: false,
    programming: false,
    cycling: false,

}
export default function ControlledForm({
    formRef,
}) {
    const usernameInputRef = useRef();
    const isMountedRef = useRef(false);
    const [formValues, setFormValues] = useState(formInitalState);
    const [errors, setErrors] = useState({});

    useEffect(()=>{
        usernameInputRef.current.focus();
    }, []);

    // Executes only on update
    useEffect(()=>{
        if(!isMountedRef.current){
            isMountedRef.current = true;
            return;
        }
        console.log('Form is updated')
    }, [formValues]);

    const changeHandler = (e) => {
        let value = '';
        switch (e.target.type) {
            case 'number':
                value = value = Number(e.target.value);
                break;
            case 'checkbox':
                value = e.target.checked;
                break;
            default:
                value = e.target.value;
                break;
        }
        setFormValues(state => ({
            ...state,
            [e.target.name]: value, // създава се  обект с динамични ключове, където името на ключа (property) и стойността се определят динамично, 
            //в зависимост от името на полето (e.target.name) и стойността, въведена от потребителя (e.target.value). 
            //Този обект може да се използва след това, за да актуализира състоянието в React компонентите.
        }));
    };

    const resetFormHandler = () => {
        setFormValues(formInitalState);
    }

    const submitHanlder = (e) => {
        e.preventDefault();
        console.log(formValues)

        resetFormHandler();
    };

    const ageValidator = () =>{
        if(formValues.age <0 || formValues.age > 120){
            setErrors(state =>({
                ...state,
                age:'Age should be between 0 and 120'
            }));
        }else{
          if(errors.age){
            setErrors( state => ({...state, age: '',}));
          } 
        }
    }
  
    return (
        <>
            <h1>Controlled Form</h1>
            <form ref={formRef} onSubmit={submitHanlder}>

                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        ref={usernameInputRef}
                        type="text"
                        name="username"
                        id="username"
                        value={formValues.username}
                        // defaultValue е като value в хтмл. Дава първоначалната стойност, която след това да може да се ъпдейтва
                        onChange={changeHandler}
                    />
                </div>

                <div>
                    <label htmlFor="username">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={formValues.password}
                        onChange={changeHandler}

                    />
                </div>

                <div>
                    <label htmlFor="username">Age</label>
                    <input
                        type="number"
                        name="age"
                        id="age"
                        value={formValues.age}
                        onChange={changeHandler}
                        onBlur={ageValidator}
                        className={errors.age && styles.inputError}
                    />
                    {errors.age && (
                        <p className = {styles.errorMessage}>{errors.age}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="gender">Geneder</label>
                    <select name="gender" id="gender" onChange={changeHandler} value={formValues.gender}>
                        <option value="f" >F</option>
                        <option value="m" >M</option>
                    </select>
                </div>

                <div>
                    <h3>Hobbies</h3>
                    <label htmlFor="swimming">Swimming</label>
                    <input type="checkbox" name="swimming" id="swimming" checked={formValues.swimming} onChange={changeHandler} />

                    <label htmlFor="yoga">Yoga</label>
                    <input type="checkbox" name="yoga" id="yoga" checked={formValues.yoga} onChange={changeHandler} />

                    <label htmlFor="programming">Programming</label>
                    <input type="checkbox" name="programming" id="programming" checked={formValues.programming} onChange={changeHandler} />

                    <label htmlFor="cycling">Cycling</label>
                    <input type="checkbox" name="cycling" id="cycling" checked={formValues.cycling} onChange={changeHandler} />
                </div>

                <div>
                    <button type="submit">Register</button>
                    <button type="button" onClick={resetFormHandler}>Reset</button>
              
                </div>


            </form>
        </>
    );
};