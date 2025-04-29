import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import Login from './components/Login';
import Register from './components/Register';
import { useAuth } from './context/AuthContext';

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-white p-6"> {/* Fundo branco da página */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-purple-600">Gerenciador de Tarefas</h1>
      </div>

      <div className="bg-purple-50 p-6 rounded-lg shadow-lg"> {/* Cor de fundo roxa suave */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/tasks"
            element={
              isAuthenticated ? (
                <TaskList />
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          <Route
            path="/"
            element={
              isAuthenticated ? (
                <div className="text-center mt-10">
                  <h2 className="text-2xl font-semibold mb-2 text-green-600">Você já está logado</h2>
                  <p>
                    <a href="/tasks" className="text-purple-600 hover:underline">Ir para as tarefas</a>
                  </p>
                </div>
              ) : (
                <div className="text-center mt-10">
                  <p>
                    <a href="/login" className="text-purple-600 hover:underline">Clique aqui para fazer login</a>
                  </p>
                  <p className="mt-2">
                    Ou <a href="/register" className="text-purple-600 hover:underline">cadastre-se aqui</a>
                  </p>
                </div>
              )
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
