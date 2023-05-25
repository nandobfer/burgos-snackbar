import { useContext } from "react"
import SnackbarContext from "./snackbarContext"
import { AlertColor } from "@mui/material"

declare interface OpenSnackbar {
    text: string
    severity: AlertColor
}

declare type snackbarHookValues = {
    snackbar: (options: OpenSnackbar) => void
} & SnackbarContextValues

declare function useSnackbar(): snackbarHookValues
