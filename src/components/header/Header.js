import React, { Component } from 'react';
import Astronaut from "../animations/Astronaut/Astronaut";


export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            widthOfTheWindow: window.innerWidth,
            heightOfTheWindow: window.innerHeight,
            importAll: function (r) {
                return r.keys().map(r);
            },
            imgIndex: Math.floor(Math.random() * 100) % 10,
        }
        this.changeInDimention = this.changeInDimention.bind(this);
    }
    changeInDimention = () => {
        this.setState({
            widthOfTheWindow: window.innerWidth,
            heightOfTheWindow: window.innerHeight
        })
    }
    render() {
        const windowHeight = this.state.heightOfTheWindow;
        const windowWidth = this.state.widthOfTheWindow;
        const images = this.state.importAll(require.context('../images/', false, /\.(png|jpe?g|svg)$/));
        const imageIndex = this.state.imgIndex;
        window.addEventListener("resize", this.changeInDimention, true);
        return (
            <>
                <div id="head" className="bg-image shadow-2-strong" style={{ backgroundImage: `url(${images[imageIndex].default})`, height: windowHeight, width: windowWidth, backgroundSize: "cover" }}>
                    <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", height: "100vh", width: "100vw" }}>
                        <div className="container d-flex align-items-center justify-content-center text-center h-100">
                            <div className="text-white d-flex row align-items-center justify-content-center">
                                <div className="col-12 col-lg-5">
                                    <Astronaut />
                                </div>
                                <div className="offset col-10 col-lg-5">
                                    <h1 className="mb-3">Pulak Deyashi <i className="fa fa-hand-o-right" aria-hidden="true"></i> Personal Portfolio</h1>

                                    <h5 className="mb-3"><small className="opacity-50">Electrical Engineering student at St. Thomas' College of Engineering and Technology <br /> (2018-2022)</small> </h5>

                                    <p style={{ marginTop: "20px" }}>
                                        <a className="text-white-50" href="#about"><i class="fa fa-angle-double-down fa-4x" aria-hidden="true"></i></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
