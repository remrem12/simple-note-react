import React, { Component } from 'react'
import { connect } from 'react-redux';
// import store from './Store';


class EditNoteForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            noteTitle: '',
            noteContent: ''
        }
    }


    // isChange = (event) => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     console.log(name, value);
    //     this.setState({
    //         [name]: value
    //     })
    // }


    editData = () => {

        var title = document.querySelector("#noteTitle").value;
        var content = document.querySelector("#noteContent").value;

        var item = {};
        item.title = title;
        item.content = content
        item.id = this.props.editItem.id
        
        this.props.editDateStore(item);  //su dung ham trong reducer
        this.props.showAdd();
        this.props.showAlertI();
    }

    componentDidMount(){
        const t = document.querySelector("#noteTitle");
        t.addEventListener('focus', function(){
            this.select();
        })
        t.focus();

        const c = document.querySelector("#noteContent");
        c.addEventListener('focus', function(){
            this.select();
        })
        
        
    }


    render() {
        
        return (
            
        <div className="col-4">
            <h3>Edit Note</h3>
            <form>
                <div className="form-group">
                    <label htmlFor="noteTitle">Note's title</label>
                    <input  type="text" required className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpIdNoteTitle" placeholder=" edit title..."  defaultValue = {this.props.editItem.title}/>
                    {/* onChange = {(event) => this.isChange(event)}onChange = {(event) => this.isChange(event)} */}
                </div>
                <div className="form-group">
                    <label htmlFor="noteTitle">Note's content</label>
                    <textarea  type="text" required className="form-control" name="noteContent" id="noteContent" aria-describedby="helpIdNoteContent" placeholder="edit content..."  defaultValue = {this.props.editItem.content}/>
                </div>
                {/* <button onClick = {() => {this.addData(this.state.noteTitle, this.state.noteContent)}} type="reset" className="btn btn-outline-primary btn-block">Add</button> */}
                <button onClick = {() => this.editData()} type="reset" className="btn btn-outline-primary btn-block">Save</button>
            </form>
        </div>
    )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        editItem: state.editItem   // editnoteform dc su dung state nay
    }
}

    const mapDispatchToProps = (dispatch, ownProps) => {
        return {    // editnoteform dc su dung props nay this.props.addDataStore()
            editDateStore: (getItem) => {
                dispatch({type: 'EDIT_DATA', getItem})
            },
            showAdd: () => {
                dispatch({type: 'SHOW_ADD'})
            },
            showAlertI: () => {
                dispatch({type: 'ALERT_I_ON'})
            }
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(EditNoteForm);
