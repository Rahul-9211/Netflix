import FeatherIcon from "feather-icons-react";
import React from "react";

const SubBar = (props) => {
    const [showResults, setShowResults] = React.useState(false)
    const [showicon, setShowicon] = React.useState("plus")
    const onClick = () => {
        if (showResults) {
            setShowicon("plus")
            return setShowResults(false)
        }
        else {
            setShowicon("x")
            return setShowResults(true)
        }
    }
    return (
        <div className="subBar" onClick={onClick}>
            <div className="heading">
                <h1   >
                    {props.heading}
                </h1>
                <div className="icon"  >
                    <FeatherIcon icon={showicon} className="plus"/>
                </div>
            </div>
            { showResults ? <div className="content">
                {props.content}
      </div> : null}

        </div>
    );
};
export default SubBar;
