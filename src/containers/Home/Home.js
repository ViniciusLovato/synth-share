import React, { Component } from 'react';

import NotesMenu from '../../components/NotesMenu/NotesMenu';
import InputArea from '../../components/InputArea/InputArea';

import firebase from '../../utils/firebase';

import './Home.css';

class Home extends Component {

  constructor(){
    super();
    this.state = {
      notes: null
    }
  }

  componentDidMount() {
    const notesRef = firebase.database().ref('items');
    notesRef.on('value', (snapshot) => {
      let notes = snapshot.val();
      let newState = [];
      for (let note in notes) {
        newState.push({
          id: note,
          title: notes[note].title,
          user: notes[note].user
        });
      }
      this.setState({
        notes: newState
      });
    });
  }

  render(){
    return(
      <div className="columns home-page">
        <div className="column is-9">
          <InputArea/>
        </div>
        <div className="column is-3">
          {
            this.state.notes ? <NotesMenu notes={this.state.notes}/> : ''
          }
        </div>
    </div>

    );
  }
}

export default Home;