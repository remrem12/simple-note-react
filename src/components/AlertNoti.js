import React, { Component } from 'react'
import { Alert, AlertContainer } from "react-bs-notifier";
import { connect } from 'react-redux'


class AlertNoti extends Component{
    render(){

        return(
            <AlertContainer timeout = {500}>
                {this.props.showAlertI && <Alert onDismiss = {() => this.props.AlertIOff()} type="info" timeout = {700}>Edited successful!  </Alert>}
                {this.props.showAlertS && <Alert onDismiss = {() => this.props.AlertSOff()} type="success" timeout = {700}>Added successful!  </Alert>}
                {this.props.showAlertD && <Alert onDismiss = {() => this.props.AlertDOff()} type="danger" timeout = {700}>Deleted successful!  </Alert>}
            </AlertContainer>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        showAlertS: state.showAlertS,
        showAlertI: state.showAlertI,
        showAlertD: state.showAlertD
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        AlertIOff: () => {
            dispatch({type: 'ALERT_I_OFF'})
        },
        AlertDOff: () => {
            dispatch({type: 'ALERT_D_OFF'})
        },
        AlertSOff: () => {
            dispatch({type: 'ALERT_S_OFF'})
        }
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlertNoti)