import React, {useMemo} from "react";
import {TaskType} from "../../types/types";

interface TaskProps {
    taskId: string;
    tasks: TaskType[];
}

function Task({taskId, tasks}: TaskProps) {

    const task = useMemo(() => tasks.find(task => task._id === taskId), [taskId, tasks]);

    return <div>
        <div style={{display: "grid", textAlign: "left"}}>
            <div>{task?.title}</div>
            <div style={{marginLeft: "20%"}}>
                {task?.subtasks.map(subtaskId => (
                    <Task key={subtaskId} taskId={subtaskId} tasks={tasks}/>
                ))}
            </div>
        </div>
    </div>
}

export default Task;