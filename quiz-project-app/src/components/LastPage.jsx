import React from "react";
import Card from "./Card";
import "./LastPage.css"

const LastPage = ({username}) => {
    return (
    <Card>
        <div className="finalmsg">
            <p className="finalmsg_txt">Thank You, {username} <br/> Your response was submitted successfully.</p>
        </div>
    </Card>
   )
}

export default LastPage;