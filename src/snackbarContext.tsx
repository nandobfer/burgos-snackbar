import { createContext, useState } from "react"
import React from "react"
import { AlertColor } from "@mui/material"

const SnackbarContext = createContext<SnackbarContextValues>({} as SnackbarContextValues)

export default SnackbarContext

export const SnackbarProvider: React.FC<SnackbarProviderProps> = ({ children }) => {
    const [open, setOpen] = useState(false)
    const [text, setText] = useState("")
    const [severity, setSeverity] = useState<AlertColor>("info")

    return (
        <SnackbarContext.Provider value={{ open, setOpen, text, setText, severity, setSeverity }}>
            {children}
        </SnackbarContext.Provider>
    )
}
