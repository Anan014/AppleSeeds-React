import React, { useState } from 'react';

function Index18D2() {
    const [todo, setTodo] = useState([
        { name: "CSS", completed: true },
        { name: "JavaScript", completed: true },
        { name: "Learn React", completed: false },
        { name: "Learn mongoDB", completed: false },
        { name: "Learn Node JS", completed: false },
    ]);

function handelOnClick(name) {
        const copyTodo = [...todo];
        const result = copyTodo.find(task => {
            return task.name === name;
        });
        result.completed = !result.completed;
        setTodo(copyTodo);
}

    return (
        <div>
            {todo.map(task => {
                return (
                    <div key={task.name}>
                        <span
                        style={{textDecoration: task.completed ? 'line-through': ''  }}
                        onClick={()=>handelOnClick(task.name)}
                        >
                        {task.name} {task.completed ? 'V' : 'X'}
                        </span>
                    </div>
                )
            })};
        </div>
    );
}

export default Index18D2;

// const copySubjects = [...subjects];
//         const result = copySubjects.find((s) => {
//             return s.name === name
//         })
//         result.completed = !result.completed
//         setSubjects(copySubjects)
