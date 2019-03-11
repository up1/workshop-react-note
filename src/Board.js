import React, {Component} from "react"
import Note from "./Note"
import {FaPlus} from "react-icons/fa";

class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            notes: []
        }
        this.eachNote = this.eachNote.bind(this);
        this.edit = this.edit.bind(this)
        this.delete = this.delete.bind(this)
        this.addNew = this.addNew.bind(this)
    }

    componentWillUnmount() {
        console.log("Component will unmount")
    }

    componentDidUpdate(prevProps) {
        console.log("Component did update")
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

    componentWillMount() {
        console.log("Component will mount");
        fetch(`https://baconipsum.com/api/?type=meat-and-filler&sentences=3`)
            .then(response => response.json())
            .then(json => json[0].split('. ')
                .forEach(input => this.addNew(input.substring(0, 10))))
    }

    addNew(newTitle) {
        this.setState(prevState => ({
            notes: [
                ...prevState.notes,
                {
                    id: this.nextId(),
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

    nextId() {
        this.uniqueId = this.uniqueId || 0;
        return this.uniqueId++;
    }
}

export default Board
