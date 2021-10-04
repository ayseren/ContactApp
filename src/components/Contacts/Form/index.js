import {useState, useEffect} from 'react'

function Form() {
    const  [form, setForm] = useState({fullname: "", phone_number: ""});

    //this function is for assigning to the form state when input is changed  
    const onChangeInput = (event) => {
        setForm({...form, [event.target.name]: event.target.value});
    }

    const onSubmit = (e) => {
        //because of form tag, the page is reload. to prevent this, it is added.
        e.preventDefault();
        if(form.fullname === "" || form.phone_number === ""){
            return false;
        }
        console.log(form);
    }

    //form etiketi butonu nasil yakaliyor???????????????????????????
    //<input type="submit"> ile ayni mi

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input 
                    name="fullname" 
                    placeholder="fullname"
                    onChange={onChangeInput}/>
            </div>
            <div>
                <input 
                    name="phone_number" 
                    placeholder="phone_number"
                    onChange={onChangeInput}/>
            </div>

            <div>
                <button>Add</button>
            </div>
        </form>
    )
}

export default Form
