"use client";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  let renderTask = <h2>No task available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((task, i) => {
      return (
        <ul>
          <li key={i} className="flex items-center justify-between mb-5">
            <div className="flex justify-between items-center w-2/3">
              <h5 className="text-lg font-semibold">{task.title}</h5>
              <h6 className="text-md font-semibold">{task.desc}</h6>
            </div>
            <button
              onClick={() => deleteHandler(i)}
              className="bg-red-400 text-white px-4 py-2 rounded font-semibold"
            >
              Delete
            </button>
          </li>
        </ul>
      );
    });
  }

  return (
    <>
      <div>
        <h1 className="bg-black text-white text-3xl text-center p-4 font-semibold">
          Charul's To-Do List
        </h1>

        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Enter task here"
            className="text-xl border-zinc-800 border-2 m-5 px-4 py-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter description here"
            className="text-xl border-zinc-800 border-2 m-5 px-4 py-2"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button className="bg-blue-400 text-white px-4 py-2 rounded-lg text-sm font-semibold m-5">
            Add Task
          </button>
        </form>
        <hr />

        <div className="p-8 bg-slate-200">
          <ul>
            <li>{renderTask}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default page;
