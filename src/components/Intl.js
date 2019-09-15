import React from 'react'
import { IntlProvider, addLocaleData } from 'react-intl'
import es from 'react-intl/locale-data/es'

import { getLocalizedStrings } from '../translations'

addLocaleData([...es])

const WithIntl = ({ children }) => {
  // TODO fix this
  // it doesn't work with server-side rendering
  // const locale = toLocale(window.navigator.language);
  const locale = 'en'

  return (
    <IntlProvider locale={'en'} messages={getLocalizedStrings(locale)}>
      {children}
    </IntlProvider>
  )
}

const toLocale = locale => {
  const dash_index = locale.indexOf('-')
  if (dash_index >= 0) {
    return locale.substring(0, dash_index)
  }
  return locale
}

export default WithIntl
