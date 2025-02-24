import { Box } from "@chakra-ui/react";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Box
      bgBlendMode="hard-light"
      // bgGradient="to-r"
      // gradientFrom="purple.800"
      // gradientTo="purple.500"
      backgroundImage="url(https://4kwallpapers.com/images/wallpapers/outrun-neon-dark-background-purple-3440x1440-4523.jpg)"
      bgSize="cover"
    >
      <Dashboard />
    </Box>
  );
}

export default App;
