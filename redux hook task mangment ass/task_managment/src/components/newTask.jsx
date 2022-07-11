import { NavbarSide } from "./navsidebar"



export const Newtask = () => {
    return (
        <div id="fllexd">
            <NavbarSide />
            <div>
                <input
                    type={"text"}
                    placeholder="Title"
                    name="title"
                //  onChange={handleChange}
                />
                <input
                    type={"text"}
                    placeholder="subTask"
                    name="Subtask"
                //  onChange={handleSubtask}
                //   vlaue={text}
                />
                <button
                //onClick={add}
                >ADD</button><br /><br />
                <textarea name="description"
                    id=""
                    cols="20"
                    rows="8"
                    placeholder="Description"
                //  onChange={handleChange}
                >
                </textarea><br />
                <input
                    type={"radio"}
                    name="status"
                    value="todo"
                //onClick={handleRadio}
                /> <span>Todo</span><br />
                <input
                    type={"radio"}
                    name="status"
                    value="done"
                //onClick={handleRadio}
                /> <span>In Progress</span><br />
                <input
                    type={"radio"}
                    name="status"
                    value="Done"
                //onClick={handleRadio}
                /> <span>Done</span>
                <br />
                <br />
                <br />
                <h3>Tag(Multiple Possibility)</h3>
                <input
                    type={"Checkbox"}
                    //onChange={handleCheckBox} 
                    value="official"
                    name="official"
                /><span>Official</span><br />
                <input
                    type={"Checkbox"}
                    //onChange={handleCheckBox} 
                    value="Personal"
                    name="Personal"
                /><span>Personal</span><br />
                <input
                    type={"Checkbox"}
                    //onChange={handleCheckBox} 
                    value="Others"
                    name="Others"
                /><span>Others</span><br />

            </div>
            
            <div>
            <br/>
            
                <input type="date"
                    // onChange={handleDate} 
                    name="date" /><br/>
                <button
                //onClick={create}
                >Create new task</button>
            </div>


        </div>
    )
}