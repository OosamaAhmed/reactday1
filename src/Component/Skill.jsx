
import React from "react";

class Skill extends React.Component {

    constructor(props) {
        super()
        console.log(props)
    }
    render() {
        return (
            <>
                <div className="bg-light m-1 ">
                    <div className="row w-100">
                        <div className="text-center bg-secondary col-2" >
                            <p className="m-0 p-0">{this.props.mySkillVal}
                            </p>
                        </div>
                        <div className={`col-10 p-0 bg-danger w-${this.props.widthcolor}`}>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Skill;