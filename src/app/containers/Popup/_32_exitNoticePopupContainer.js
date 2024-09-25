import { connect } from 'react-redux';
import {ExitNoticePopup} from "app/components/";
import { closeExitNotice } from 'redux/actions/popupActions';

function mapStateToProps(state) {
  return {
    language: state.global.language,
    exitNoticeOn: state.popup.exitNoticeOn,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    closePopup: () => dispatch(closeExitNotice()),
  };
}

const ExitNoticePopupContainer = connect(mapStateToProps, mapDispatchToProps)(ExitNoticePopup);

export default ExitNoticePopupContainer;


