const Navbar = (props) => {
    return (
        <nav className='nav'>
            <ul className='nav-list'>
            <li className='nav-item' onClick={() => props.navClick('home')}>Home</li>
                <li className='nav-item' onClick={() => props.navClick('school')}>School</li>
                <li className='nav-item' onClick={() => props.navClick('library')}>Library</li>
                <li className='nav-item' onClick={() => props.navClick('arcade')}>Arcade</li>
            </ul>
        </nav>
    )
}

export default Navbar;