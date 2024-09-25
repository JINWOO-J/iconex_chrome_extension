import React, { Component } from 'react';
import { RouteContainer, Web3Container, ExitNoticePopupContainer } from 'app/containers/';
import { connect } from 'react-redux';
import { showExitNotice, closeExitNotice } from 'redux/actions/popupActions';

class App extends Component {

    componentDidMount() {
        const dismissedUntil = localStorage.getItem('exitNoticeDismissedUntil');
        const now = new Date();
        if (!dismissedUntil || new Date(dismissedUntil) < now) {
            this.props.showExitNotice();
        }
    }

    render() {

        const { popupState } = this.props;
        return (
            <div className='empty'>
                {popupState && <ExitNoticePopupContainer />}

                <Web3Container />
                <RouteContainer />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    popupState: state.popup.exitNoticeVisible,
});

const mapDispatchToProps = (dispatch) => ({
    showExitNotice: () => dispatch(showExitNotice()),
    closeExitNotice: () => dispatch(closeExitNotice())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
