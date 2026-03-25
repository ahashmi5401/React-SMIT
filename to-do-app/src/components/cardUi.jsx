import React from 'react';
import { Check, Pencil, Trash2 } from 'lucide-react';

const CardUi = ({ item, onEditClick  , handleDelete , setCheck , check}) => {
  const { search, priorityFilter, statusFilter } = item;
  
  return (
    <div className="relative group bg-white p-5 rounded-2xl border border-zinc-100 hover:border-zinc-200 hover:shadow-md transition-all duration-200">
      <div className="flex flex-col gap-3">
        {/* Task Title and Radio */}
        <div className="flex items-start gap-3 pr-14">
          <input 
            onChange={(e) => setCheck(e.target.checked)}
            type="checkbox" 
            className="mt-1 w-5 h-5 rounded-full border-zinc-300 text-zinc-900 focus:ring-zinc-900 cursor-pointer" 
          />
          <span className={`text-zinc-800 font-medium leading-tight
          ${check ? 'line-through' : ''}
            `}>
            {search}
          </span>
        </div>

        {/* Metadata Tags */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md bg-zinc-100 text-zinc-500">
            {priorityFilter}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md bg-blue-50 text-blue-600">
            {statusFilter}
          </span>
        </div>
      </div>

      {/* Action Buttons (Pencil and Trash) */}
      <div className="absolute top-4 right-4 flex gap-1">
        <button 
          onClick={onEditClick}
          className="p-2 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50 rounded-lg transition-colors"
          title="Edit Task"
        >
          <Pencil size={16} />
        </button>
        <button 
        onClick={handleDelete}
          className="p-2 text-zinc-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
          title="Delete Task"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
};

export default CardUi;