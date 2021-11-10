import Nav from '../../../components/Nav';
import '../../../css-set/navbar-icon/navBarIcon.css';


function NavBarIcon() {

    return(
        <div>
            <Nav />
            <div className="navbar-icon">
                <a className="active-nbi" href="#"><i className="fa fa-fw fa-home"></i>Home</a>
                <a href="#"><i className="fa fa-fw fa-search"></i>Search</a>
                <a href="#"><i className="fa fa-fw fa-envelope"></i>Contact</a>
                <a href="#"><i className="fa fa-fw fa-user"></i>Login</a>
            </div>
        </div>
    )
}

export default NavBarIcon;