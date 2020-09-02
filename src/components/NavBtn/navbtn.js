
import React from 'react';

const navbtnStyle = {
    backgroundColor: `rgba(0, 0, 0, 0)`,
    borderStyle: "solid",
    borderColor: "darkgoldenrod",
    color:"darkgoldenrod"
};

function NavBtn(props) {
    return (
        <button className="btn btn-default float-left mt-sm-3" style={navbtnStyle}>
            <a href={props.href} style={{color: "darkgoldenrod"}}>
                {props.link}
            </a>
        </button>
   );
}

export default NavBtn;