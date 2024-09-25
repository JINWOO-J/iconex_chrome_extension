import actionTypes from 'redux/actionTypes/actionTypes'

const initialState = {
  isPopupOn: false,
  popupType: '',
  popupNum: 1,
  exitNoticeVisible: false,
}

export function popupReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.openPopup:
      return Object.assign({}, state, {
        popupType: action.payload.popupType,
        popupNum: action.payload.popupNum || 1,
        isPopupOn: true
      })
    case actionTypes.setPopupNum:
      return Object.assign({}, state, {
        popupNum: action.popupNum
      })
    case actionTypes.closePopup:
      if (!state.isPopupOn) {
        return state;
      }
      return { ...initialState };

    case actionTypes.showExitNotice:
      return Object.assign({}, state, {
        popupType: 'exitNotice',
        exitNoticeVisible: true,
      });
    case actionTypes.closeExitNotice:
      return Object.assign({}, initialState);
    default:
      return state
  }
}
