import { useCallback, useMemo, useState } from "react";
import TodoForm from "./components/TodoForm";
import SearchBar from "./components/SearchBar";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Hôm nay phải quét nhà" },
    { id: 2, title: "Học bài để chuẩn bị thi học kỳ" },
    { id: 3, title: "quét nhà là niềm vui" },
    { id: 4, title: "ôn tập khoá học code intensive" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  // Thêm todo
  const addTodo = (title) => {
    if (!title.trim()) return;
    const newTodo = {
      id: Date.now(),
      title: title.trim(),
    };
    setTodos([newTodo, ...todos]);
  };

  // Xóa todo
  const deleteTodo = useCallback((id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  // Sửa todo
  const updateTodo = useCallback((id, newTitle) => {
    if (!newTitle.trim()) return;
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle.trim() } : todo
      )
    );
  }, []);

  // Lọc theo từ khóa
  const filteredTodos = useMemo(() => {
    console.log("Xử lý tìm kiếm...");
    return todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
  }, [searchTerm, todos]);


  return (
    <div className=" py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 py-8">
          <h1 className="text-4xl font-bold text-white text-center">
            Todo List
          </h1>
        </div>

        <div className="p-8">
          <TodoForm onAdd={addTodo} />
          <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
          <TodoList
            todos={filteredTodos}
            onDelete={deleteTodo}
            onUpdate={updateTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
