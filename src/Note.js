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
        this.remove = this.remove.bind(this)
    }

    edit() {
        this.setState({
            isEdit: true
        })
    }

    save(e) {
        e.preventDefault();
        this.props.onChange(this._newText.value, this.props.index);
        this.setState({
            isEdit: false
        })
    }

    renderFormForEdit() {
        return(
            <div className="note">
                <form onSubmit={this.save}>
                    <textarea ref={ input => this._newText = input} />
                    <button id="save"><FaSave/></button>
                </form>
            </div>
        )
    }


    renderForShow() {
        return(
            <div className="note">
                <p>{this.props.children}</p>
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
        console.log('Render in note ', this.props.index)
        if(this.state.isEdit) {
            return this.renderFormForEdit()
        }
        return this.renderForShow()
    }


    remove() {
        this.props.onDelete(this.props.index)
    }
}

export default Note
