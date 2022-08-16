import React from 'react'

const Header = () => {
    return (
        <div className='container-fluid header'>
            <div className="logo-name">
                <h2>Crypto Hunter</h2>
            </div>
            <div className="search-box">
                <input type="text" placeholder='Search for you favorite crypto...'></input>
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}

export default Header      