


import React from "react";

class Foucas extends React.Component {

    constructor(props) {
        super()
        console.log(props)
    }
    render() {
        return (
            <>
                <div className="text-center">
                    <h3>MY FOUCAS</h3>
                    <hr className="w-50 m-auto" />
                    <ul className="list-unstyled ">
                        <li>Web </li>
                        <li>Mobile</li>
                        <li>Responsive</li>
                    </ul>
                </div>
            </>
        )
    }
}
export default Foucas;
