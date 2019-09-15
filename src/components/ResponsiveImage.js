import React from 'react'

const sources = {
  tablet: '(min-width: 768px)',
}

export default function({ sizeSrcMap, src, ...props }) {
  return (
    <picture>
      {Object.keys(sizeSrcMap).map(size => (
        <source media={sources[size] || sources.tablet} srcSet={sizeSrcMap[size]} />
      ))}
      <img src={src} {...props} />
    </picture>
  )
}
