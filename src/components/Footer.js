import React from 'react'
import {Link} from 'react-router-dom'


const date = new Date;
const getYear = date.getFullYear();


const Footer = () => {
    return (
        <footer style={{textAlign: 'center'}}>
            <p>Copyright  &copy; {getYear}</p>
            <Link to="/about">About</Link>
        </footer>
    )
}

export default Footer
