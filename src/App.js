import "./App.css";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "components/Header";
function App() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "column", heigth: "100vh" }}>
        <Box>
          <Header />
        </Box>
      </Box>
    </>
  );
}

export default App;
