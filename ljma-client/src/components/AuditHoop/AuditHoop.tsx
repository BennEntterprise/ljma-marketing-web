import React from 'react'
import './AuditHoop.scss'
interface IAuditHoop {
  children?: any
  variant: 'complete' | 'pending-approval' | 'wip'
}
const AuditHoop = (props: IAuditHoop) => {
  const { variant } = props
  return <div className={`audit-hoop ${variant}-hoop`}>{props.children}</div>
}

export default AuditHoop
