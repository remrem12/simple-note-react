import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import store from './components/Store'
import EditNoteForm from './components/EditNoteForm';
import { connect } from 'react-redux'
import AlertNoti from './components/AlertNoti'


class App extends Component {

  constructor(props,context){
    super(props, context);
    this.state = {

    }
  }
  // ham add data vao firebase database
  // addData = (item) => {
  //   firebaseConnect.push(item);
  // }

  // addData = () => {
  //   var connectData = firebase.database().ref('database');
  //   connectData.push({
  //     title: 'Yasuo',
  //     content: 'Death is like the wind, always by myside'
  //   })
  //   console.log('Added!');
  // }
  // showEdit = () => {
  //   if(this.state.isEdit){
  //     return 
  //   }
  // }
  render() {
    // Scrollbar.init(document.querySelector('#my-scrollbar'));
    return (

      
      <div className="App">
        <Menu/>
        {/* {this.props.showAlert && <AlertNoti store = {store}/>} */}
        <AlertNoti store = {store}/>
        <div className = 'container'>
          <div className = 'row'>
            <NoteList/>
            {store.getState().showAdd && <NoteForm store={store}/>}
            {store.getState().isEdit && <EditNoteForm store ={store}/>}
          </div>
        </div>
      </div>

    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    showAdd: state.showAdd,
    isEdit: state.isEdit,
    showAlert: state.showAlert  
  }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     // dispatch1: () => {
//     //   dispatch(actionCreator)
//     // }
//   }
// }


export default connect(mapStateToProps)(App);

// export default App