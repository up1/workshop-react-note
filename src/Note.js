import React, { Component } from "react";

class Note extends Component {

    render() {
        return(
            <div className="note">
                <p>Hello React</p>
                <span>
                    <button>Edit</button>
                    <button>Delete</button>
                </span>
            </div>
        )
    }

}

export default Note


