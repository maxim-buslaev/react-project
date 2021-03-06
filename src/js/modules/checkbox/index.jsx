import React, { Fragment, Component } from 'react'
import styles from './index.pcss'

class Checkbox extends Component {
  constructor(props) {
    super(props)
    const { handleChange, id } = props
    this.handleChange = handleChange ? ({ target }) => handleChange({ value: target.checked ? id : null }) : () => ({})
  }

  render() {
    const { id, labelClass = '', isChecked = false, isCustom = false } = this.props
    return (
      <Fragment>
        <input
          {...{
            className: styles['checkbox-input'],
            type: 'checkbox',
            id,
            onChange: this.handleChange,
            defaultChecked: isChecked,
          }}
        />
        <label
          {...{
            className: isCustom ? labelClass : `${styles['checkbox-label']} ${labelClass}`,
            htmlFor: id,
          }}
        />
      </Fragment>
    )
  }
}

export default Checkbox
