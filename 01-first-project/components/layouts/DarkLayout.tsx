import { FC } from "react"

export const DarkLayout: FC = ({ children }) => {
  return (
    <div style={{
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: '3px',
        padding: '10px'
    }}>
    
        <div>
            { children }
        </div>

    </div>
  )
}
