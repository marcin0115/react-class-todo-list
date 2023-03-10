import React from "react";
import "../App.css";
import Task from "./Task";

const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.active);
  const done = props.tasks.filter((task) => !task.active);

  if (active.length > 2) {
    active.sort((a, b) => {
      a = a.text.toLowerCase();
      b = b.text.toLowerCase();
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    });
  }
  // done.sort((a,b)=> b.finishDate - a.finishDate);
  if (done.length > 2) {
    done.sort((a, b) => {
      if (a.finishDate < b.finishDate) return 1;
      if (a.finishDate > b.finishDate) return -1;
      return 0;
    });
  }

  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  const doneTasks = done.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  return (
    <div className="TaskList">
      <div className="active">
        <h2>Your tasks:</h2>
        {activeTasks.length > 0 ? activeTasks : <em>No tasks to do</em>}
      </div>
      <div className="border"></div>
      <div className="done">
        <h3>
          Done tasks <em>({done.length})</em>
        </h3>
        {doneTasks.slice(0, 3)}
        {done.length > 2 && <em>Only the last 3 tasks are displayed</em>}
      </div>
    </div>
  );
};

export default TaskList;
