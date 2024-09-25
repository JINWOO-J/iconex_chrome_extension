import actionTypes from 'redux/actionTypes/actionTypes';


export function openPopup(payload) {
  return {
    type: actionTypes.openPopup,
    payload
  };
}

export function setPopupNum(popupNum) {
  return {
    type: actionTypes.setPopupNum,
    popupNum: popupNum
  };
}

export function closePopup() {
  return {
    type: actionTypes.closePopup,
  };
}

export const showExitNotice = () => ({
  type: actionTypes.showExitNotice,
});

export const closeExitNotice = () => {
  return {
    type: actionTypes.closeExitNotice,
}};
