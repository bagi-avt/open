import React, { useState } from "react";
import Logo from "../../img/logo.svg";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = ({ setNewUrl }) => {
    const [businessPortal, setBusinessPortal] = useState(true);
    const [contactCenter, setContactCenter] = useState(null);
    const [mobileApp, setMobileApp] = useState(null);
    const [branch, setBranch] = useState(null);
    const NewUrl = (text) => {
        setNewUrl(text);
    };
    return (
        <div className="header">
            <a href="https://www.open.ru/" className="logo">
                <img src={Logo} alt="Logo" />
            </a>

            <div className="nav-bar-button">
                <Link
                    to="/business-portal"
                    onClick={() => {
                        NewUrl("Бизнес-портал");
                        setBusinessPortal(true);
                        setContactCenter(false);
                        setMobileApp(false);
                        setBranch(false);
                    }}
                >
                    Бизнес-портал
                    {businessPortal && <div className="underline" />}
                </Link>
                <Link
                    to="/contact-center"
                    onClick={() => {
                        NewUrl("Контактный центр");
                        setBusinessPortal(false);
                        setContactCenter(true);
                        setMobileApp(false);
                        setBranch(false);
                    }}
                >
                    Контактный центр
                    {contactCenter && <div className="underline" />}
                </Link>
                <Link
                    to="/mobile-app"
                    onClick={() => {
                        NewUrl("Мобильный банк");
                        setBusinessPortal(false);
                        setContactCenter(false);
                        setMobileApp(true);
                        setBranch(false);
                    }}
                >
                    Мобильное приложение
                    {mobileApp && <div className="underline" />}
                </Link>
                <Link
                    to="/branch"
                    onClick={() => {
                        NewUrl("Отделение");
                        setBusinessPortal(false);
                        setContactCenter(false);
                        setMobileApp(false);
                        setBranch(true);
                    }}
                >
                    Отделение
                    {branch && <div className="underline" />}
                </Link>
            </div>
        </div>
    );
};

export default Header;
