import { Box } from "@chakra-ui/react";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Box
      bgBlendMode="hard-light"
      // bgGradient="to-r"
      // gradientFrom="purple.800"
      // gradientTo="purple.500"
      backgroundImage="url(https://img.freepik.com/premium-photo/coding-night-focused-programmer-working-project-silhouette-programmer-working-l_924727-71700.jpg)"
      bgSize="cover"
    >
      <Dashboard />
    </Box>
  );
}

export default App;
