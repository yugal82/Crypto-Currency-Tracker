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
            <div className="nav-links">
                <ul>
                    <li>
                        <Link to="/">Coins</Link>
                    </li>
                    <li>
                        <Link to="/exchanges">Exchanges</Link>
                    </li>
                    <li>
                        <Link to="/nft-collection">Explore NFTs</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
