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

    }

    eachNote(note, index) {
        return(
            <Note key={index} index={index}>{note.title}</Note>
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
