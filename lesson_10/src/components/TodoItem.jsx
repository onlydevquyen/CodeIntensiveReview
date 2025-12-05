import { memo, useState } from "react";

const TodoItem = memo(function TodoItem({ todo, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.title);
  console.log("Re-render: ", todo.id);

  const handleSave = () => {
    onUpdate(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-200 last:border-0 hover:bg-gray-50 px-2 -mx-2 rounded">
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSave()}
          onBlur={handleSave}
          autoFocus
          className="flex-1 px-3 py-2 border border-blue-500 rounded mr-3 text-lg"
        />
      ) : (
        <span className="flex-1 text-lg text-gray-800 text-left">
          {todo.title}
        </span>
      )}

      <div className="flex gap-2">
        <button
          onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
          className={`px-4 py-2 text-sm font-medium rounded transition ${
            isEditing
              ? "bg-green-500 hover:bg-green-600 text-white"
              : "bg-yellow-500 hover:bg-yellow-600 text-white"
          }`}
        >
          {isEditing ? "Lưu" : "Sửa"}
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="px-4 py-2 text-sm font-medium bg-red-500 hover:bg-red-600 text-white rounded transition"
        >
          Xóa
        </button>
      </div>
    </div>
  );
});

export default TodoItem;
