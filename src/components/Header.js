import React from "react";

const Header = (props) => (
        <div className='c-header'>
            <div className='container'>
                <h1 className='c-header__title'> {props.title} </h1>
                { props.subtitle && (<h2 className='c-header__subtitle'> {props.subtitle} </h2>) }
            </div>
        </div>
    );

Header.defaultProps = {
    title: 'Indecision App'
};

export default Header;