import './App.css';
import { useState } from 'react';

const App = () => {
  const [value, setValue] = useState(0);
  const [history, setHistory] = useState([0]); // 历史记录，包含初始值
  const [currentIndex, setCurrentIndex] = useState(0); // 当前位置

  const updateValue = (newValue) => {
    // 如果不是在历史的末尾，删除后面的记录
    const newHistory = history.slice(0, currentIndex + 1);
    newHistory.push(newValue);

    setHistory(newHistory);
    setCurrentIndex(newHistory.length - 1);
    setValue(newValue);
  };

  const plus = () => {
    updateValue(value + 1);
  };

  const minus = () => {
    updateValue(value - 1);
  };

  const undo = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      setValue(history[newIndex]);
    }
  };

  const redo = () => {
    if (currentIndex < history.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      setValue(history[newIndex]);
    }
  };
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>当前值: {value}</p>
      <p>历史记录: {JSON.stringify(history)}</p>
      <p>当前位置: {currentIndex + 1} / {history.length}</p>

      <button onClick={plus}>Increment</button>
      <button onClick={minus}>Decrement</button>
      <button onClick={undo} disabled={currentIndex === 0}>Undo</button>
      <button onClick={redo} disabled={currentIndex === history.length - 1}>Redo</button>
    </div>
  );
};

export default App;
