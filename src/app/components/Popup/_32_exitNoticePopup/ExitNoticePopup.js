import React, { Component } from 'react';
import { connect } from 'react-redux';
import withLanguageProps from 'HOC/withLanguageProps';
import { closeExitNotice } from 'redux/actions/popupActions';
import {DISMISS_PERIOD_IN_DAYS} from "../../../../constants"

@withLanguageProps
class ExitNoticePopup extends Component {
  state = {
    dontShowAgain: false
  };

  closePopup = () => {
    if (this.state.dontShowAgain) {
      const expireDate = new Date();
      expireDate.setDate(expireDate.getDate() + DISMISS_PERIOD_IN_DAYS);
      console.log("DISMISS_PERIOD_IN_DAYS:" + DISMISS_PERIOD_IN_DAYS);
      localStorage.setItem('exitNoticeDismissedUntil', expireDate.toISOString());
    }
    this.props.closeExitNotice();
  }

  handleCheckboxChange = (event) => {
    this.setState({ dontShowAgain: event.target.checked });
  }

  render() {
    const { I18n } = this.props;

    return (
        <div className="popup-wrap exit-notice-popup">
          <div className="dimmed fade-in"></div>
          <div className="popup moving-down exit-notice">
            <span className="close" onClick={this.closePopup}><em className="_img"></em></span>
            <h1 className="title">{I18n.exitNotice.header}</h1>
            <div className="tabbox-holder">
              <h2>{I18n.exitNotice.importantTitle}</h2>
              <p className="txt primary-message">{I18n.exitNotice.primaryMessage}</p>
              <p className="txt secondary-message">{I18n.exitNotice.secondaryMessage}</p>
              <p className="txt not-supported">{I18n.exitNotice.notSupported}</p>
              <p className="txt tertiary-message">{I18n.exitNotice.tertiaryMessage}</p>
              <p className="txt final-reminder">{I18n.exitNotice.finalReminder}</p>
              <p className="txt blog-link">
                <a
                    href="https://www.icon.foundation/blog/2024/back-up-wallets-as-iconex-discontinues-service"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  {I18n.exitNotice.linkText || 'Read more about ICONex discontinuation here'}
                </a>
              </p>
            </div>
            <div className="popup-footer">
              <div className="dont-show-again">
                <input
                    type="checkbox"
                    id="dont-show-again"
                    onChange={this.handleCheckboxChange}
                />
                <label htmlFor="dont-show-again">{I18n.exitNotice.dontShowAgain}</label>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  closeExitNotice: () => dispatch(closeExitNotice())
});

export default connect(null, mapDispatchToProps)(ExitNoticePopup);
