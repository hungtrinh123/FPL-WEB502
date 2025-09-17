import { useState } from "react";
import "./App.css";

interface ITodo {
    id: number;
    title: string;
    completed: boolean;
}

const App = () => {
    const todosList: ITodo[] = [
        { id: 1, title: "Học React TypeScript", completed: false },
        { id: 2, title: "Làm bài tập TailwindCSS", completed: true },
        { id: 3, title: "Tạo giao diện todo list", completed: false },
    ];

    const [todos, setTodos] = useState<ITodo[]>(todosList);
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">📝 Todo List</h1>
                    <p className="text-gray-600">Quản lý công việc của bạn một cách hiệu quả</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                        <div className="text-2xl font-bold text-blue-600">{todos.length}</div>
                        <div className="text-sm text-gray-600">Tổng cộng</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                        <div className="text-2xl font-bold text-orange-600">demo</div>
                        <div className="text-sm text-gray-600">Chưa hoàn thành</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                        <div className="text-2xl font-bold text-green-600">demo</div>
                        <div className="text-sm text-gray-600">Đã hoàn thành</div>
                    </div>
                </div>

                {/* Add Todo Form */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <div className="flex gap-3">
                        <input
                            type="text"
                            placeholder="Nhập công việc mới..."
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                            Thêm
                        </button>
                    </div>
                </div>

                {/* Todo List */}
                <div className="space-y-3">
                    {todos.length === 0 ? (
                        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                            <div className="text-6xl mb-4">📝</div>
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">
                                Chưa có công việc nào
                            </h3>
                            <p className="text-gray-500">Hãy thêm công việc đầu tiên của bạn!</p>
                        </div>
                    ) : (
                        todos.map((todo) => (
                            <div
                                key={todo.id}
                                className={`bg-white rounded-lg shadow-sm p-4 transition-all duration-200 hover:shadow-md ${
                                    todo.completed ? "opacity-75" : ""
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <button
                                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
                                            todo.completed
                                                ? "bg-green-500 border-green-500 text-white"
                                                : "border-gray-300 hover:border-green-500"
                                        }`}
                                        aria-label={
                                            todo.completed
                                                ? "Đánh dấu chưa hoàn thành"
                                                : "Đánh dấu hoàn thành"
                                        }
                                    >
                                        {todo.completed && "✓"}
                                    </button>

                                    <span
                                        className={`flex-1 ${
                                            todo.completed
                                                ? "line-through text-gray-500"
                                                : "text-gray-800"
                                        }`}
                                    >
                                        {todo.title}
                                    </span>

                                    <button
                                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200"
                                        aria-label="Xóa công việc"
                                    >
                                        🗑️
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;
