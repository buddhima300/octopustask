import { Box, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";

function SideBar({ menu }) {
  return (
    <div>
      <Box
        width={400}
        height="100vh"
        borderRadius="md"
        boxShadow="md"
        backdropFilter={"blur(15px)"}
      >
        <Text textStyle="2xl" color="white" p={5}>
          ANALYTICS
        </Text>
        {/* menu */}
        <VStack spacing={5} align="start" p={5}>
          {menu.map((item) => (
            <Link
              href={item.href}
              p={4}
              width="100%"
              backdropFilter="blur(25px)"
              borderRadius={10}
              _hover={{ bg: "rgb(255, 255, 255,0.2)" }}
              _focus={{ bg: "pink.700" }}
              mt={5}
            >
              {item.icon}
              <Text fontWeight="bold" color="white">
                {item.name}
              </Text>
            </Link>
          ))}
        </VStack>
      </Box>
    </div>
  );
}

export default SideBar;
