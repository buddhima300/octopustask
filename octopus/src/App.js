import { Box } from "@chakra-ui/react";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Box
      w="100%"
      bgBlendMode="hard-light"
      // bgGradient="to-r"
      // gradientFrom="purple.800"
      // gradientTo="purple.500"
      backgroundImage="url(https://img.freepik.com/premium-photo/coding-night-focused-programmer-working-project-silhouette-programmer-working-l_924727-71700.jpg)"
      // backgroundImage="url(https://applescoop.org/image/wallpapers/iphone/purple-abstract-patterns-ultra-hd-4k-trending-iphone-16-top-iphone-16-free-pro-iphone-16-plus-and-iphone-16-pro-max-22-10-2024-1729663230-hd-wallpaper.jpg)"
      bgSize="cover"
      // bgAttachment="fixed"
      bgPos={{ base: "center", md: "top", lg: "left" }}
      h={{ base: "100%", md: "100%", lg: "100%" }}
    >
      <Dashboard />
    </Box>
  );
}

export default App;
