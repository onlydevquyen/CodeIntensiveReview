import TodoItem from "./TodoItem";

export default function TodoList({ todos, onDelete, onUpdate }) {
  if (todos.length === 0) {
    return (
      <p className="text-center text-gray-500 py-12 text-lg">
        {todos.length === 0 && todos.length !== todos.length
          ? "Chưa có công việc nào"
          : "Không tìm thấy công việc nào phù hợp"}
      </p>
    );
  }

  return (
    <div className="divide-y divide-gray-200">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}
