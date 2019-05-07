import React, { Component } from 'react'
import NoteItem from './NoteItem';
import {firebaseConnect} from '../firebase'
import store from './Store'

export default class NoteList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataFirebase: []
    }
  }

  componentWillMount(){
    firebaseConnect.on('value', (notes) => {
      var arrayData = []
      notes.forEach(element => {
        const key = element.key;
        const title = element.val().title;
        const content = element.val().content;
        arrayData.push({
          id: key,
          title: title,
          content: content
        })
      });

      this.setState({
        dataFirebase: arrayData
      });
    })
  }



  getData = () => {
    if(this.state.dataFirebase){
      return this.state.dataFirebase.map((value, key) => {
        return (
          <NoteItem
            key = {key}
            i = {key}
            title = {value.title}
            content = {value.content}
            note = {value}
            store = {store}
          />
        )
      })
    }
    
  }


  render() {


    return (
      <div className="col">
        <div id="noteList" role="tablist" aria-multiselectable="true">
          
          {this.getData()}

        </div>
      </div>
      
    )
  }
}
