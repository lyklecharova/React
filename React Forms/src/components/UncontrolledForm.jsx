export default function UncontrolledForm() {
    const submitHanlder = (e) =>{
        e.preventDefault();
    };

    return (
        <>
            <h1>Uncontrolled Form</h1>
            <form onSubmit={submitHanlder}>

                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" />
                </div>

                <div>
                    <label htmlFor="username">Password</label>
                    <input type="password" name="password" id="password" />
                </div>

                <div>
                    <label htmlFor="username">Age</label>
                    <input type="number" name="age" id="age" />
                </div>

                <div>
                    {/* <div onClick={asdasd}></div> // currentTarget -> върху него е поставен listener-a
                    <button>Register</button> // target */}
                    <button>Register</button>
                    <button type="button">Reset</button>
                </div>


            </form>
        </>
    );

};