import React, { Component } from "react"
import { translate } from "react-i18next"

class LanguageSwitcher extends Component {
  constructor(props) {
    super(props)
    const { i18n } = this.props
    this.state = { language: i18n.language }

    this.handleChangeLanguage = this.handleChangeLanguage.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ language: nextProps.i18n.language })
  }

  handleChangeLanguage(lng) {
    const { i18n } = this.props
    i18n.changeLanguage(lng, () => {
      localStorage.setItem('i18nextLng', lng)
    })
  }

  
  render() {
    return (
      <li className="LanguageSwitcher">
        <span
          onClick={() => this.handleChangeLanguage('pl')}
          style={{
            cursor: 'pointer',
            fontWeight: this.state.language === 'pl' ? 700 : 400,
          }}
        >
          PL
        </span>
        {' | '}
        <span 
          onClick={() => this.handleChangeLanguage('en')}
          style={{
            cursor: 'pointer',
            fontWeight: this.state.language === 'en' ? 700 : 400,
          }}
        >
          EN
        </span>
      </li>
    )
  }
}

export default translate()(LanguageSwitcher)