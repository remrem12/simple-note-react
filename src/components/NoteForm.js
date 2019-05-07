import React, { Component } from 'react';
import { connect } from 'react-redux';

class NoteForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            noteTitle: '',
            noteContent: ''
        }
    }
    // ham de get data
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    // ham gui data len app thong qua props
    addData = (title, content) => {
        var item = {};
        item.title = title;
        item.content = content

        // dung redux
        if(item.title !== '' && item.content !== ''){
          this.props.addDateStore(item);  //su dung ham trong reducer
        }
        else{
          alert('U must fill the title and content baka >.< !!')
          return
        }
        this.props.showAlertS()
    }

    

  render() {
    return (
        <div className="col-4">
          <h3>Add Note</h3>
          <form>
          <div className="form-group">
            <label htmlFor="noteTitle">Note's title</label>
            <input onChange = {(event) => this.isChange(event)} type="text" required className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpIdNoteTitle" placeholder="title..." />
            
          </div>
          <div className="form-group">
            <label htmlFor="noteTitle">Note's content</label>
            <textarea onChange = {(event) => this.isChange(event)} type="text" required className="form-control" name="noteContent" id="noteContent" aria-describedby="helpIdNoteContent" placeholder="content..." defaultValue={""} />
            
          </div>
          <button onClick = {() => {this.addData(this.state.noteTitle, this.state.noteContent)}} type="reset" className="btn btn-outline-success btn-block">Add</button>
          </form>
        </div>
      
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    showAdd: state.showAdd     // noteform dc su dung state nay
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {    // noteform dc su dung props nay this.props.addDataStore()
    addDateStore: (getItem) => {
      dispatch({type: 'ADD_DATA', getItem})
    },
    showAlertS: () => {
      dispatch({type: 'ALERT_S_ON'})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);