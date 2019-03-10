import React, {Component} from "react"
import Note from "./Note"

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

    eachNote(note, index) {
        return(
            <Note key={note.id} index={note.id} onChange={this.edit}>
                {note.title}
            </Note>
        )
    }

    render() {
        return(
            <div>
                {this.state.notes.map(this.eachNote)}
            </div>
        )
    }

}

export default Board
