/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, {Component} from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {Collapse, Container, Nav, Navbar, NavbarBrand, NavItem} from "reactstrap";
import {NavDropdown} from 'react-bootstrap';
import {Link} from "react-router-dom";

function TheNavbar({categories}) {

    const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
    const [navbarCollapse, setNavbarCollapse] = React.useState(false);

    const toggleNavbarCollapse = () => {
        setNavbarCollapse(!navbarCollapse);
        document.documentElement.classList.toggle("nav-open");
    };

    React.useEffect(() => {
        const updateNavbarColor = () => {
            if (
                document.documentElement.scrollTop > 299 ||
                document.body.scrollTop > 299
            ) {
                setNavbarColor("");
            } else if (
                document.documentElement.scrollTop < 300 ||
                document.body.scrollTop < 300
            ) {
                setNavbarColor("navbar-transparent");
            }
        };

        window.addEventListener("scroll", updateNavbarColor);

        return function cleanup() {
            window.removeEventListener("scroll", updateNavbarColor);
        };
    });
    if (!categories && !categories.length)
        return (<>Test</>);
    return (
        <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
            <Container>
                <div className="navbar-translate">
                    <NavbarBrand
                        data-placement="bottom"
                        to="/index"
                        title="Ματζόρε FM 89.1">
                        <img
                            alt="Ματζόρε FM 89.1"
                            className="img-brand img-no-padding img-responsive"
                            src={require("assets/img/matzore_plain_small.png")}
                        />
                    </NavbarBrand>
                    <button
                        aria-expanded={navbarCollapse}
                        className={classnames("navbar-toggler navbar-toggler", {
                            toggled: navbarCollapse
                        })}
                        onClick={toggleNavbarCollapse}>
                        <span className="navbar-toggler-bar bar1"/>
                        <span className="navbar-toggler-bar bar2"/>
                        <span className="navbar-toggler-bar bar3"/>
                    </button>
                </div>
                <Collapse
                    className="justify-content-end"
                    navbar
                    isOpen={navbarCollapse}>
                    <Nav navbar>
                        <NavItem>
                            <Link className="nav-link" to="/">
                                <p className="">Home</p>
                            </Link>
                        </NavItem>
                        <NavDropdown title="Radio" id="basic-nav-dropdown">
                            <Link className="dropdown-item" to="/schedule">ΠΡΟΓΡΑΜΜΑ ΕΚΠΟΜΠΩΝ</Link>
                            <Link className="dropdown-item" to="/shows">ΕΚΠΟΜΠΕΣ</Link>
                            <Link className="dropdown-item" to="/members">ΜΕΛΗ</Link>
                        </NavDropdown>
                        <NavItem>
                            <Link className="nav-link" to="/chat">
                                <p className="">CHAT</p>
                            </Link>
                        </NavItem>
                        <NavDropdown title="ΑΡΘΡΑ" id="basic-nav-dropdown">
                            <Link className="dropdown-item" to='/articles'>Όλα τα άρθρα</Link>
                            {categories.map((category, i) => (
                                <Link
                                    className="dropdown-item"
                                    to={`/articles_category/${category.id}`}>{category.name}
                                </Link>
                            ))}
                        </NavDropdown>
                        <NavItem>
                            <Link className="nav-link" to="/events">
                                <p className="">ΕΚΔΗΛΩΣΕΙΣ</p>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/about_us">
                                <p className="">ABOUT US</p>
                            </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
}

class IndexNavbar extends Component {
    state = {
        categories: [{'id': 0, 'name': ""}],
    };

    componentDidMount() {
        fetch('https://matzore-shows.herokuapp.com/api/get_categories')
            .then(res => {
                return res.json();
            })
            .then((data) => {
                this.setState(data);
            })
            .catch(console.log);
    }

    render() {
        return (
            <>
                <TheNavbar categories={this.state.categories}/>
            </>
        )
    }
}


export default IndexNavbar;
