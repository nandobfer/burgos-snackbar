import React from "react"
import { AlertColor } from "@mui/material"

declare interface SnackbarContextValues {
    open: boolean
    setOpen: (open: boolean) => void
    text: string
    setText: (text: string) => void
    severity: AlertColor
    setSeverity: (severity: AlertColor) => void
}

declare interface SnackbarProviderProps {
    children: React.ReactNode
}

declare const SnackbarContext: React.Context<SnackbarContextValues>
export default SnackbarContext

declare function SnackbarProvider({ children }: { children: React.ReactNode }): React.FC<SnackbarProviderProps>
