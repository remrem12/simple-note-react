import React, { Component } from 'react'
import { connect } from 'react-redux'



class NoteItem extends Component {

    editClick = () => {
        // console.log(this.props.note);
        
        this.props.showEdit(this.props.note);
        
    }

    delete = () => {
        this.props.deleteClick(this.props.note.id);
        this.props.showAlertD();
    }

    render() {
    return (
        <div className="card">
            <div className="card-header" role="tab" id = 'note1'>
                <h5 className="mb-0 text-left">
                    <a data-toggle="collapse" data-parent="#noteList" href={'#number' + this.props.i} aria-expanded="true" aria-controls="noteContent1">
                    {this.props.title}
                    </a>
                    <div className = "option float-right">
                        <div className = 'btn btn-outline-warning mr-1' onClick = {() => this.editClick()}>Edit</div>
                        <div className = 'btn btn-outline-danger' onClick = {() => this.delete()}>Delete</div>
                    </div>
                </h5>
            </div>
            <div id={'number' + this.props.i} className="collapse in" role="tabpanel" aria-labelledby="note1">
                <div className="card-body">
                    {this.props.content}
                </div>
            </div>
        </div>
    )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        showEdit: (item) => {
            dispatch({type: 'SHOW_EDIT', item})
        },
        deleteClick: (id) => {
            dispatch({type: 'DELETE', id})
        },
        showAlertD: () => {
            dispatch({type: 'ALERT_D_ON'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteItem)