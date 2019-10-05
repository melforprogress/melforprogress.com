import React from 'react'

export const Title = ({ children }) =>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div className="title">
      <span className="underlined">
        {children}
      </span>
    </div>
  </div>
