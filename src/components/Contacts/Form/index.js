import {useState, useEffect} from 'react'

const initialFormValues = {fullname: "", phone_number: ""};

function Form({addContact, contacts}) {
    const  [form, setForm] = useState(initialFormValues);

    //2. clearing inputs
    //after contacts is changed, setForm
    useEffect(() => {
        setForm(initialFormValues);
    }, [contacts]);

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

        //for old values added contacts
        addContact([...contacts,form]);

        //1. clearing inputs 
        //setForm(initialFormValues);
    }

    //form etiketi butonu nasil yakaliyor???????????????????????????
    //<input type="submit"> ile ayni mi

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input 
                    name="fullname" 
                    placeholder="fullname"
                    value={form.fullname}
                    onChange={onChangeInput}/>
            </div>
            <div>
                <input 
                    name="phone_number" 
                    placeholder="phone_number"
                    value={form.phone_number}
                    onChange={onChangeInput}/>
            </div>

            <div>
                <button>Add</button>
            </div>
        </form>
    )
}

export default Form
