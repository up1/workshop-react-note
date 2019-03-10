import React, { Component } from "react"
import {FaPencilAlt, FaTrash} from "react-icons/fa/index";

class Note extends Component {

    render() {
        return(
            <div className="note">
                <p>Hello React</p>
                <span>
                    <button id="edit" onClick={this.edit}>
                        <FaPencilAlt/>
                    </button>
                    <button id="remove" onClick={this.remove}>
                        <FaTrash/>
                    </button>
                </span>
            </div>
        )
    }

    edit() {
        alert("Clicked on edit button")
    }

    remove() {
        alert("Clicked on remove button")
    }
}

export default Note
