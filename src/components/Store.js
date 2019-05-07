import {firebaseConnect} from '../firebase' 

var redux = require('redux');


const noteInitialState = {
    isEdit: false,
    editItem: {},
    showAdd: true,
    showAlertS: false,
    showAlertI: false, 
    showAlertD: false
}

const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            firebaseConnect.push(action.getItem)            
            // alert('added successful!');
            return state

        case "EDIT_DATA":
            
            // update here
            firebaseConnect.child(action.getItem.id).update({
                title: action.getItem.title,
                content: action.getItem.content
            })
            // alert('edited successful')
            return state

        case "SHOW_ADD":
            state = {...state, showAdd: true, isEdit: false}    
            // console.log(state);
            return state

        case "SHOW_EDIT":
            state =  {...state, showAdd: false, isEdit: true, editItem: action.item}    
            // console.log();
            return state
            
        case "DELETE":
            // console.log(action.id)
            // xoa
            var con = window.confirm("Delete this note ?");
            if(con === true){
                firebaseConnect.child(action.id).remove()
            }
            return state

        case "ALERT_I_OFF":
            return {...state, showAlertI: false}
        
        case "ALERT_S_OFF":
            return {...state, showAlertS: false}

        case "ALERT_D_OFF":
            return {...state, showAlertD: false}

        case "ALERT_I_ON":
            return {...state, showAlertI: true}

        case "ALERT_D_ON":
            return {...state, showAlertD: true}

        case "ALERT_S_ON":
            return {...state, showAlertS: true}

        
        default:
            return state
    }
}
var store = redux.createStore(allReducer);
export default store;