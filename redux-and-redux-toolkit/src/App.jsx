import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from './redux/feature/counter/CounterSlice'

function App() {
  // Accessing state.counter.value (assuming standard RTK structure)
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 flex flex-col items-center justify-center p-6 font-sans">
      
      <div className="w-full max-w-xs text-center">
        {/* Simple Top Screen */}
        <div className="mb-6">
          <h2 className="text-xs uppercase tracking-[0.4em] text-slate-500 mb-2">Total Count</h2>
          <div className="text-7xl font-light tracking-tighter text-white">
            {count}
          </div>
        </div>

        {/* Minimal Buttons */}
        <div className="flex flex-col gap-3">
          <button 
            onClick={() => dispatch(increment())}
            className="w-full bg-slate-100 text-slate-950 py-3 rounded-md font-medium hover:bg-white transition-colors active:scale-[0.98]"
          >
            Increase
          </button>
          
          <button 
            onClick={() => dispatch(decrement())}
            className="w-full border border-slate-700 py-3 rounded-md font-medium hover:bg-slate-800 transition-colors active:scale-[0.98]"
          >
            Decrease
          </button>
        </div>
      </div>

      <footer className="absolute bottom-8 text-[10px] text-slate-600 uppercase tracking-widest">
        Redux State Monitor
      </footer>
    </div>
  )
}

export default App