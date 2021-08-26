import Logo from './Logo';
import Navbar from './Navbar';
const Header = (props) => {
    return (
        <header className="app-header">
            <Logo />
            <Navbar navClick={props.navClick} />
        </header>
    )
}

export default Header;