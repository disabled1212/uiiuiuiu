import React from 'react';
import  './Layout.css'
import {Link, Route, Routes} from "react-router-dom";
import {Homepage} from "../pages/Homepage";
import {About} from "../pages/Aboutpage";
import {Blogpage} from "../pages/Blogpage";
import {Notfoundpage} from "../pages/Notfoundpage";

const Layout = () => {
    return (
        <div className="Site">
            <header>
                <Link className="nav_links" to="/">Главная</Link>
                <Link className="nav_links" to="/posts">Курсы</Link>
                <Link className="nav_links" to="/about">Расписание</Link>
                <Link className="nav_links" to="/">Преподователи</Link>
                <Link className="nav_links" to="/"> Рассылки</Link>
                <Link className="nav_links" to="/">Контакты</Link>
            </header>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/posts" element={<Blogpage />} />
                <Route path="*" element={<Notfoundpage />} />
            </Routes>
        </div>
    );
};

export default Layout;