
import React from "react";

class Cardportfolio extends React.Component {

    constructor(props) {
        super()
        console.log(props)
    }
    render() {
      
        return (
            <>
                    <div className="">
                    <div style={{ height: "160px" }} className={`  p-4 mt-2 me-0 text-center text-light shadow bg-${this.props.bgcolor} `}> {this.props.mysValue}
                            <span className={`d-${this.props.displayhr}`}><hr className="w-auto" /></span> 
                    </div>
                </div>
            </>
         
        )
    }
}
export default Cardportfolio;