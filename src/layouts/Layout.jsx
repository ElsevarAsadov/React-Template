import Box from "@mui/material/Box"
import { Outlet } from "react-router-dom"
import { ThemeProvider, createTheme } from "@mui/material"
export default function Layout() {
    //for dark and light mode add palette.mode = 'dark'/'light'
    const theme = createTheme({});
    if (import.meta.env.DEV) {
        console.log("Theme:", theme);
    }
    return (
        <ThemeProvider theme={theme}>
            <Box>
                <Outlet />
            </Box>
        </ThemeProvider>
    )
}