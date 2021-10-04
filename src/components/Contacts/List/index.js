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

    return (
        <div>
            <input 
                placeholder="Filter"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}/>
            <ul className="list">
                {
                    filteredText.map((contact, index) => (
                        <li key={index}>
                            <span>{contact.fullname}</span>
                            <span>{contact.phone_number}</span>
                        </li>
                    ))
                }
            </ul>

            <p>Total: {filteredText.length}</p>
        </div>
    )
}

export default List
