import React, {Component} from "react"
import Note from "./Note"
import {FaPlus} from "react-icons/fa";

class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            notes: [
                {
                    id: 1,
                    title: "Note 1"
                },
                {
                    id: 2,
                    title: "Note 2"
                }
            ]
        }
        this.eachNote = this.eachNote.bind(this);
        this.edit = this.edit.bind(this)
        this.delete = this.delete.bind(this)
        this.addNew = this.addNew.bind(this)
    }

    edit(newTitle, index) {
        console.log('Edit ', newTitle, index);
        this.setState(prevState => ({
            notes: prevState.notes.map(
                note => (note.id === index) ?
                            {...note, title: newTitle} : note
            )
        }))
    }

    delete(index) {
        console.log('Delete ', index);
        this.setState(prevState => ({
            notes: prevState.notes.filter(note => note.id !== index)
        }))
    }

    eachNote(note, index) {
        return(
            <Note key={note.id} index={note.id}
                  onChange={this.edit}
                  onDelete={this.delete}
            >
                {note.title}
            </Note>
        )
    }

    addNew(newTitle) {
        this.setState(prevState => ({
            notes: [
                ...prevState.notes,
                {
                    id: 3,
                    title: newTitle
                }
            ]
        }))
    }

    render() {
        return(
            <div className="board">
                <button id="add" onClick={this.addNew.bind(null, 'New Title')}>
                    <FaPlus/>
                </button>
                {this.state.notes.map(this.eachNote)}
            </div>
        )
    }

}

export default Board
