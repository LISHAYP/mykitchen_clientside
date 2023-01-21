import React from 'react'
import logoImg from '../../../src/pictures/shopping.png'

export default function Navbar() {
  return (
    <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                <img className='logo' src={logoImg} alt="shopping cart" />
                <a className="navbar-brand" href="/my-kitchen">My Kitchen</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/recipe">Recipe<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/ingrediant">Ingrediant<span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
    </div>
  )
}
