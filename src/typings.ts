export interface SGlobalProps {
  [key: string]: any
}

export interface SBaseProps extends SGlobalProps {
  className?: string
  children?: React.ReactNode
}
