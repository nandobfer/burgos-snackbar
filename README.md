# Snackbar
#### A hook, context and component for rendering @mui/material snackbar globally

### Preparation

	wrap your app with `<SnackbarProvider>` and place the `<Snackbar />` component:

```jsx
<SnackbarProvider>
    <App />
    <Snackbar />
<SnackbarProvider/>
```

### Usage

Use the useSnackbar hook to retrieve the method and call it passing the severity and text as an object:

```jsx
import { useSnackbar } from 'burgos-snackbar'

export const App = () => {
    const { snackbar } = useSnackbar()

    const handleClick = () => {
        snackbar({severity: 'success', text: 'Click successful'})
    }
}
```
