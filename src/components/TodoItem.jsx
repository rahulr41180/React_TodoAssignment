
const TodoItem = ({Todoitem, statusfntoitem}) =>{
    
    console.log('Todoitem:', Todoitem)
    return (

        <div className="ItemButtonBox">
            <div className="ItemBox">
                {Todoitem.title}
            </div>
            <div className="ButtonBox">
                <button className="ToggleButton" onClick={() =>{
                    statusfntoitem(Todoitem.id);
                }}>{Todoitem.status ? "Done" : "Not Done"}</button>
            </div>
        </div>

    )
}

export { TodoItem }