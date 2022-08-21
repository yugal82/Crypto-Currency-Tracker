import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='container-fluid header'>
            <Link to='/' >
                <div className="logo-name">
                    <h2>Cryptopedia</h2>
                </div>  
            </Link>
        </div>
    )
}

export default Header      