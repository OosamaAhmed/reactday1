

import React from "react";
import Button from "../Component/Button";
class Footer extends React.Component {

    constructor(props) {
        super()
        console.log(props)
    }
    render() {

        return (
            <>
                <div className="bg-dark text-light p-3">
                    <div className="row ">
                        <div className="col-lg-4 col-sm-12">
                            <h4>GIT IN TOUCH</h4>
                            <ul className="list-unstyled p-2">
                                <li><i class="bi bi-envelope-at"></i>    osama@gmail.com</li>
                                <li><i class="bi bi-telephone"></i>  01-66-00-03</li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-sm-12 p-5">
                            <Button btnColor="outline-danger" myValue="CONTACT ME" />

                        </div>
                        <div className=" col-lg-4 col-sm-12 ">
                            <div className="row ">
                                <i class="col-1 bi bi-facebook"></i>

                                <i class="col-1 bi bi-facebook"></i>

                            </div>
                            <br />
                            <p>© 2023 Coursera Inc. All rights reserved.</p>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}
export default Footer;