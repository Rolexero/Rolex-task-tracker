import React from 'react'
import PropTypes from 'prop-types'


const Button = ({classname, value, onAdd, color}) => {
    return ( 
        <button className={classname} onClick={onAdd} style={{backgroundColor: color}}>{value}</button>
        )
}

Button.defaultProps = {
    classname: 'btn'
}

Button.propTypes = {
    classname: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
}

export default Button