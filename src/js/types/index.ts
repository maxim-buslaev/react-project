import React from 'react'
import Loadable from 'react-loadable'

export type TLoadingFlag = null | boolean
export interface IRoute {
  title: string
  path: string
  component: Loadable.LoadableComponent & React.ComponentType<{}>
}
