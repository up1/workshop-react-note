import React, { Component } from "react"
import {FaPencilAlt, FaTrash, FaSave} from "react-icons/fa/index";

class Note extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEdit: false
        };
        this.edit = this.edit.bind(this)
        this.save = this.save.bind(this)
    }

    edit() {
        this.setState({
            isEdit: true
        })
    }

    save() {
        alert(this._newText.value)
    }

    renderFormForEdit() {
        return(
            <div className="note">
                <form>
                    <textarea ref={ input => this._newText = input} />
                    <button id="save" onClick={this.save}><FaSave/></button>
                </form>
            </div>
        )
    }


    renderForShow() {
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


    render() {
        if(this.state.isEdit) {
            return this.renderFormForEdit()
        }
        return this.renderForShow()
    }


    remove() {
        alert("Clicked on remove button")
    }
}

export default Note
