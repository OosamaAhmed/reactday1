

import React from "react";
import Foucas from "../Component/Foucas";
import Skill from "../Component/Skill";
class Portolio extends React.Component {

    constructor(props) {
        super()
        console.log(props)
    }
    render() {

        return (
            <>
               <div className="bg-dark p-4 text-light">
                    <div className="p-5">
                        <h1>SKILLS</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt veniam iusto, tempora nisi at asperiores, quae maxime sequi quod tempore dignissimos. Facilis totam odio omnis maxime quo adipisci magnam debitis.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <Foucas />
                           
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <Skill mySkillVal="html" widthcolor="50" />
                            <Skill mySkillVal="JavaScript" widthcolor="75" />
                            <Skill mySkillVal="ReactJs" widthcolor="75" />
                            <Skill mySkillVal="Python" widthcolor="25" />
                            <Skill mySkillVal="bootstrap" widthcolor="75" />
                            <Skill mySkillVal="Wordpress" widthcolor="75" />
                            <Skill mySkillVal="Flutter" widthcolor="1" />

                        </div>

                    </div>
               </div>
            </>
        )
    }
}
export default Portolio;