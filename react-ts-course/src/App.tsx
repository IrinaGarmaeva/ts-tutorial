import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import { NavLink } from "react-router-dom";
import UserItemPage from "./components/UserItemPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavLink to='/users'>Пользователи</NavLink>
        <NavLink to='/todos'>Список дел</NavLink>
        <Routes>
          <Route path={"/users"} element={<UsersPage />} />
          <Route path={"/todos"} element={<TodosPage />} />
          <Route path={"/users/:id"} element={<UserItemPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
