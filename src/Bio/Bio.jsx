

import React from "react";
import Button from "../Component/Button";
class Bio extends React.Component {

    constructor(props) {
        super()
        console.log(props)
    }
    render() {
        return (
            <>
                <div>
                    <div className="card">
                        <div className="row cardbody p-3 text-start">
                            <div className="col-lg-3 col-sm-12">
                                <h1 className=" card-text"> About Me</h1>
                            </div>
                            <div className="col-lg-8 col-sm-12">
                                <p className=" card-text">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, perferendis tempora dolorem repellendus eveniet aliquid officia expedita alias eius ex, corrupti molestias quasi, labore sapiente accusamus iusto deserunt reprehenderit. Praesentium!
                                </p>
                                <Button myValue="Download Cv" btnColor="info" />
                           </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Bio;