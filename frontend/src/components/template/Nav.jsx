import React from 'react'
import './Nav.css'
import NavItem from './NavItem'

export default props =>
    <aside className="menu-area">
        <NavItem href="/" icon="home" label="Início" className="nav-item" />
        <NavItem href="/users" icon="users" label="Usuários" className="nav-item" />
    </aside>