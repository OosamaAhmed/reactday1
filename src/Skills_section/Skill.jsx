

import React from "react";
import Cardportfolio from "../Component/Cardportfolio";
class Skill extends React.Component {

    constructor(props) {
        super()
        console.log(props)
    }
    render() {

        return (
            <>
                <div className="m-3">
                    <h1 className="text-start p-3">Portfolio</h1>
                    <div className=" d-flex justify-content-evenly m-4">
                        <div className="row m-0">
                            <div  className="col-lg-4 col-sm-12 "><Cardportfolio mysValue="Web Developer" bgcolor="info" displayhr="block"/>
                            </div>
                            <div className="col-lg-4 col-sm-12 "><Cardportfolio mysValue="Mobile Developer" bgcolor="danger"  displayhr="block" /></div>
                            <div className="col-lg-4 col-sm-12 "><Cardportfolio mysValue="Logo Developer" bgcolor="secondary" displayhr="block" /></div>
                            <div className="col-lg-4 col-sm-12 "><Cardportfolio mysValue="Web App" bgcolor="warning" displayhr="none" /></div> 
                            <div className="col-lg-4 col-sm-12 "><Cardportfolio mysValue="Web Design" bgcolor="info" displayhr="none" /></div>
                            <div className="col-lg-4 col-sm-12 "><Cardportfolio mysValue="PWA Developer" bgcolor="warning"  displayhr="none" /></div>
                        </div>
                    </div>

                </div>

            </>
        )
    }
}
export default Skill;