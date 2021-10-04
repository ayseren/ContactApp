import {useState} from 'react'

function List({contacts}) {
    const [filter, setFilter] = useState("");

    const filteredText = contacts.filter((item) => {
        //neden keys aliniyor values alinmiyor????????????????????????
        return Object.keys(item).some((key) => {
            //if delete curly braces, return is not need
            return item[key].toString().toLowerCase()
                .includes(filter.toLowerCase());
        });
    });

    console.log("filteredText", filteredText);

    return (
        <div>
            <input 
                placeholder="Filter"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}/>
            <ul>
                {
                    filteredText.map((contact, index) => (
                        <li key={index}>{contact.fullname}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default List
