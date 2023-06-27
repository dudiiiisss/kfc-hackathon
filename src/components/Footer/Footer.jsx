import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div className="conter">
        <div className="wrapper">
          <div className="block_1">
            <img
              src="https://devkfcwebsites.fimble.io/admin/files/4672.svg"
              alt=""
              className="logo"
            />
            <p>996(505)464646</p>
          </div>
          <div className="block_2">
            <p>Информация</p>
            <ul>
              <li className="item">История</li>
              <li className="item">11 ингредиентов</li>
              <li className="item">Аллергены</li>
              <li className="item">Рестораны</li>
              <li className="item">Халяль</li>
            </ul>
          </div>
          <div className="block_3">
            <p>Нужна помощь !</p>
            <ul>
              <li className="item">Свяжитесь с нами</li>
              <li className="item">Карьера KFC</li>
              <li className="item">Правила и условия</li>
            </ul>
          </div>
          <div className="block_4">
            <p>Подписывайтесь на нас</p>
            <img src="https://www.kfc.kg/admin/files/5174.svg" alt="" />
            <img src="https://www.kfc.kg/admin/files/5173.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
