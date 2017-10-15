import React, { Component } from 'react';
import theme from '../../themes/Exploration';

class NotesMenu extends Component {

  render(){
    return (
      <ul>
        {
          this.props.notes.map(function(note){
            return <li key={note.id}>{note.title}</li>;
          })
        }
      </ul>
    );
  }
}

export default NotesMenu;