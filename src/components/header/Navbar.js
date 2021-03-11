import React, { Component } from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: false,
            currentWidthOfTheWindow: window.innerWidth,
            scrollValueY: 0,
        };
        this.toggleMenu = this.toggleMenu.bind(this);
        this.windowDimentionChange = this.windowDimentionChange.bind(this);
        this.WindowScrolledDown = this.WindowScrolledDown.bind(this);
    }

    toggleMenu() {
        this.setState({ menu: !this.state.menu });
    }
    windowDimentionChange() {
        this.setState({ currentWidthOfTheWindow: window.innerWidth });
    }
    WindowScrolledDown() {
        this.setState({ scrollValueY: window.scrollY })
    }

    render() {
        const show = (this.state.menu) ? "show" : "";
        const navBgColor = (this.state.currentWidthOfTheWindow > 576 && this.state.scrollValueY < 555) ? "bg-transparent" : "bg-dark";
        window.addEventListener("resize", this.windowDimentionChange, true);
        window.addEventListener("scroll", this.WindowScrolledDown, false);
        return (
            <React.Fragment>
                <nav className={"navbar navbar-dark navbar-expand-sm fixed-top " + navBgColor}>
                    <div className="container">
                        <button className="navbar-toggler" type="button" onClick={this.toggleMenu}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <a href="./index.html" className="navbar-brand ml-auto">Pulak</a>
                        <div className={"collapse navbar-collapse " + show}>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item"><a className="nav-link" href="#head"><span className="fa fa-home fa-lg" style={{ marginRight: "4px" }}></span> Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="#about"><span className="fa fa-info fa-lg" style={{ marginRight: "4px" }}></span>About</a></li>

                                <li className="nav-item"><a className="nav-link" href="https://github.com"><span className="fa fa-github fa-lg"></span></a></li>
                                <li className="nav-item"><a className="nav-link" href="https://linkedin.com"><span className="fa fa-linkedin fa-lg"></span></a></li>
                                <li className="nav-item"><a className="nav-link" href="https://quora.com"><span className="fa fa-quora fa-lg"></span></a></li>
                                <li className="nav-item"><a className="nav-link" href="https://twitter.com"><span className="fa fa-twitter fa-lg"></span></a></li>
                                <li className="nav-item"><a className="nav-link" href="https://facebook.com"><span className="fa fa-facebook fa-lg"></span></a></li>
                                <li className="nav-item"><a className="nav-link" href="https://instagram.com"><span className="fa fa-instagram fa-lg"></span></a></li>
                            </ul>
                        </div>

                    </div>
                </nav>
            </React.Fragment>
        );
    };
}

export default Navbar;