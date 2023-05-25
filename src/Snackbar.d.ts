import React from "react"
import { Snackbar as MuiSnackbar, Alert, SxProps, SnackbarContentProps } from "@mui/material"

declare interface SnackbarProps {
    sx?: SxProps
    contentProps?: Partial<SnackbarContentProps>
    alertSx?: SxProps
}

declare function Snackbar({ sx, contentProps, alertSx }): React.FC<SnackbarProps>
