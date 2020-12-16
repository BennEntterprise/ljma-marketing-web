import React from 'react'
import './AuditHoop.scss'

import isDev from '../isDev'
interface IAuditHoop {
  children?: any
  variant: 'complete' | 'pending-approval' | 'wip'
}

const AuditHoop = (props: IAuditHoop) => {
  const { variant } = props
  return isDev() ? (
    <div className={`audit-hoop ${variant}-hoop`}>{props.children}</div>
  ) : (
    <>{props.children}</>
  )
}

export default AuditHoop
