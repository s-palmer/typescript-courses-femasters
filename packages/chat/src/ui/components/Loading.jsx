import * as React from 'react'

/**
 * @type {React.FC<React.PropsWithChildren<any>>} param0 
 */

const Loading = ({ message = 'Loading...', children }) => (
  <h1>
    {message}...
    {children}
  </h1>
)
export default Loading
