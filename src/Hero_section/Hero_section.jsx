

import React from "react";
import Button from "../Component/Button";
// ======== import to css file ======
import './../style.css';
class Hero extends React.Component {

    render() {

        return (
            <>
                <div className="card position-relative">
                    <div className="bgimg w-100">
                        <div className="cardbody p-3 position-absolute top-50 start-0 translate-middle-y">
                            <h1 className=" card-text text-light">osama ahmed</h1>
                            <p className=" card-text text-light"> Web Developer & Designer</p>
                            <Button myValue="Contact me" btnColor="warning" />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Hero;