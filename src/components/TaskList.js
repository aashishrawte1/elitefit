import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, toggleTaskStatus, editTask }) => {
  // Separate tasks into different sections
  const upcomingTasks = tasks.filter((task) => !task.completed && new Date(task.dueDate) >= new Date());
  const overdueTasks = tasks.filter((task) => !task.completed && new Date(task.dueDate) < new Date());
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div style={{overflow: 'auto'}}>
      <section>
        <h2>Upcoming Tasks</h2>
        <ul>
          {upcomingTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              toggleTaskStatus={toggleTaskStatus}
              editTask={editTask}
            />
          ))}
        </ul>
      </section>
      <section>
        <h2>Overdue Tasks</h2>
        <ul>
          {overdueTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              toggleTaskStatus={toggleTaskStatus}
              editTask={editTask}
            />
          ))}
        </ul>
      </section>
      <section>
        <h2>Completed Tasks</h2>
        <ul>
          {completedTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              toggleTaskStatus={toggleTaskStatus}
              editTask={editTask}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default TaskList;
