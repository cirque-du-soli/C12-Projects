import React, { Component } from 'react';

class createTodoForm extends Component {
    
    render() { 
        return (
            <div className="col-8">
                <div className="form">
                    <div className="col-8">
                        <label>New Task: </label>
                        <input
                            type="text"
                            placeholder="Something to do..."
                            name="task"
                            onChange={(e) => {
                                setTodoTask(e.target.value);
                            }}
                        />
                    </div>
                    <button onClick={submitTodo}>Create Todo!</button>
                </div>
            </div>
        );
        
    }
}
 
export default createTodoBtn;