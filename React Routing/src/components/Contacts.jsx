import { useEffect } from "react";

const Contacts = () => {

    useEffect(()=>{

        const timeoutId = setTimeout(()=>{
            console.log('2 seconds')
        }, 2000)

        return() =>{
            
            clearTimeout(timeoutId);
        }
    },[]);

    return (
        <>
            <h2>Contact Page</h2>
            <label htmlFor="">Title</label><br />
            <input type="text" /><br />

            <label htmlFor="">Description</label><br />
            <textarea name="" id="" cols="30" rows="10"></textarea> <br />
            <input type="submit" /> 
        </>

    );
};
export default Contacts;