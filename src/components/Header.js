import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router'


const Header = ({title, onAddForm, showAdd}) => {
    const location = useLocation()
    return (
        <header className="header">
            <h1>{title}</h1>
            {location.pathname === '/' && (
                <Button classname='btn' value={showAdd ? 'Close' : 'Add'} onAdd={onAddForm} color={showAdd ? 'red' : 'green'}/>
            )}
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
