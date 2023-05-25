import { useContext } from "react"
import SnackbarContext from "./snackbarContext"

export const useSnackbar = () => {
    const snackbarContext = useContext(SnackbarContext)

    const snackbar = (options: OpenSnackbar) => {
        snackbarContext.setSeverity(options.severity)
        snackbarContext.setText(options.text)
        snackbarContext.setOpen(true)
    }

    return { snackbar, ...snackbarContext }
}
