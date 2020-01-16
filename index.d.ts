declare module 'react-native-radial-gradient' {
  import { Component, ReactNode } from 'react'
  import { View, ViewProps } from 'react-native'
  interface Props extends ViewProps {
    center?: number[],
    colors?: string[],
    stops?: number[],
    radius?: number
  }
  class LinearGradient extends Component<Props> {
    public render(): JSX.Element
  }
  export default LinearGradient
}
