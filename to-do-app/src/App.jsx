import React, { useState } from 'react';
import { Plus, Check, X, Pencil } from 'lucide-react';
import CardUi from './components/cardUi';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('Status');
  const [priorityFilter, setPriorityFilter] = useState('Priority');
  const [check , setCheck] = useState(false)
  

  // This tracks the ID of the task we are currently editing
  const [editingId, setEditingId] = useState(null);

  const handleDelete = (item) => {
    console.log(item.id)
    const updatedTasks = tasks.filter(t => t.id !== item.id) 
    setTasks(updatedTasks)
  }

  const handleAction = () => {
    if (!search.trim()) return;

    if (editingId) {
      // UPDATE existing task
      setTasks(tasks.map(t => 
        t.id === editingId 
          ? { ...t, search, priorityFilter, statusFilter } 
          : t
      ));
      setEditingId(null);
    } else {
      // ADD new task
      const newTask = {
        search,
        priorityFilter,
        statusFilter,
        id: Date.now(),
      };
      setTasks([...tasks, newTask]);
    }

    // Reset Form
    resetForm();
  };

  const compeleted = (item) => {
    console.log(item)
  }
  const startEdit = (task) => {
    setSearch(task.search);
    setPriorityFilter(task.priorityFilter);
    setStatusFilter(task.statusFilter);
    setEditingId(task.id);
  };

  const resetForm = () => {
    setSearch('');
    setPriorityFilter('Priority');
    setStatusFilter('Status');
    setEditingId(null);
  };

  return (
    <div className="min-h-screen bg-zinc-50 flex justify-center pt-20 pb-20 font-sans">
      <div className="w-full max-w-xl px-8">
        <header className="mb-10 flex justify-between items-center">
          <h1 className="text-3xl font-semibold text-zinc-900 tracking-tight">
            {editingId ? "Edit Task" : "My Tasks"}
          </h1>
          {editingId && (
            <button onClick={resetForm} className="text-xs text-zinc-400 hover:text-red-500 flex items-center gap-1">
              <X size={14}/> Cancel Edit
            </button>
          )}
        </header>

        {/* The Main Input Area */}
        <div className={`bg-white p-4 rounded-xl shadow-sm border transition-all ${editingId ? 'border-blue-400 ring-4 ring-blue-50' : 'border-zinc-200'}`}>
          <input 
            type="text" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="What needs to be done?" 
            className="w-full text-lg outline-none text-zinc-700 placeholder:text-zinc-300 mb-4"
          />
          
          <div className="flex items-center justify-between border-t border-zinc-100 pt-3">
            <div className="flex gap-3">
              <select
                value={priorityFilter}
                onChange={(e) => setPriorityFilter(e.target.value)}
                className="text-sm bg-zinc-100 text-zinc-600 px-3 py-1 rounded-full outline-none hover:bg-zinc-200 cursor-pointer appearance-none">
                <option>Priority</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="text-sm bg-zinc-100 text-zinc-600 px-3 py-1 rounded-full outline-none hover:bg-zinc-200 cursor-pointer appearance-none">
                <option>Status</option>
                <option>To Do</option>
                <option>In Progress</option>
              </select>
            </div>

            <button 
              onClick={handleAction}
              className={`p-2 rounded-lg transition-colors ${editingId ? 'bg-blue-600 hover:bg-blue-700' : 'bg-zinc-900 hover:bg-zinc-800'} text-white`}>
              {editingId ? <Check size={20} /> : <Plus size={20} />}
            </button>
          </div>
        </div>

        {/* Task List Rendering */}
        <div className="mt-8 space-y-4">
          {tasks.length === 0 && <p className="text-center text-zinc-400 mt-10">No tasks yet.</p>}
          
          {tasks.map((item) => (
            <CardUi 
              key={item.id} 
              item={item} 
              handleDelete={() => handleDelete(item)}
              onEditClick={() => startEdit(item)} 
              setCheck={setCheck}
              check={check}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;