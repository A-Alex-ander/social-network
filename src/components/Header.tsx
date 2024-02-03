import React from 'react';
import s from "./Header.module.css";

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbrjYmArEmG4k9u9QtS3YbM1wL8dc_2hscUg&usqp=CAU"
                alt="nike"/>
        </header>

    );
};

export default Header;