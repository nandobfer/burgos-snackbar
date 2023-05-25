import React from "react"
import { Snackbar as MuiSnackbar, Alert, SxProps, SnackbarContentProps } from "@mui/material"
import { useSnackbar } from "."

interface SnackbarProps {
    sx?: SxProps
    contentProps?: Partial<SnackbarContentProps>
    alertSx ?: SxProps
}

export const Snackbar: React.FC<SnackbarProps> = ({sx, contentProps, alertSx}) => {
    const snackbar = useSnackbar()

    return (
        <MuiSnackbar
            open={snackbar.open}
            autoHideDuration={3000}
            onClose={() => snackbar.setOpen(false)}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            sx={sx}
            ContentProps={contentProps}
        >
            <Alert onClose={() => snackbar.setOpen(false)} severity={snackbar.severity} sx={alertSx || { width: "100%" }}>
                {snackbar.text}
            </Alert>
        </MuiSnackbar>
    )
}