import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import burgerBackground from "./images/burgerback.png";
import "./BurgerMenu.css";
const BurgerMenu = ({ closeBurgerMenu }) => {


  return (
    <div className="burger--container">
      <div className="burger--back">
        <img src={burgerBackground} alt="" />
      </div>
      <div className="burger--links" onClick={() => closeBurgerMenu()}>
        <NavLink to="/">Домой</NavLink>
        <NavLink to="/store">Магазин</NavLink>
        <NavLink to="/quizzes">Викторины</NavLink>
            <NavLink to="/cart">Корзина</NavLink>
            <NavLink to="/cases">Кейс</NavLink>
            <NavLink to="/company">Компания</NavLink>
            <NavLink to="/card-create">Создать</NavLink>
        {/* {checkUserLogin() ? (
          <>
            <NavLink to="/quizzes">Викторины</NavLink>
            <NavLink to="/cart">Корзина</NavLink>
            <NavLink to="/cases">Кейс</NavLink>
            <NavLink to="/company">Компания</NavLink>
            {checkAdmin() && <NavLink to="/card-create">Создать</NavLink>}
            {oneUser && (
              <>
                <NavLink to={`/user/${oneUser.id}`}>
                  {oneUser.name}
                  <span>({oneUser.points})</span>
                </NavLink>
              </>
            )}
            <button
              className="burgerBtn"
              onClick={() => {
                logout();
                navigate("/");
              }}
            >
              Выход
            </button>
          </>
        ) : (
          <>
            <NavLink to="/registration">Регистрация</NavLink>
            <NavLink to="/authorization">Авторизация</NavLink>
          </>
        )} */}
      </div>
    </div>
  );
};

export default BurgerMenu;
