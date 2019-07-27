import React from 'react'
import {IntlProvider } from "react-intl"

const WithIntl = ({ children }) =>
  <IntlProvider local='en'>
    {children}
  </IntlProvider>
