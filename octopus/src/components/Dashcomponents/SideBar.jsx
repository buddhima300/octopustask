import { Box, Link, Text, VStack } from "@chakra-ui/react";
import { ChevronLeft, Menu } from "lucide-react";
import React from "react";

function SideBar({ menu }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Box
        position="fixed"
        top={0}
        right={0}
        display={{ base: "flex", md: "none" }}
        justifyContent="flex-end"
        w="100%"
        pr={10}
        my={3}
        onClick={toggleMenu}
        zIndex={10}
      >
        {isOpen ? (
          <ChevronLeft color="white" size={40} />
        ) : (
          <Menu color="white" size={40} />
        )}
      </Box>

      <Box
        position={{ base: "fixed", md: "relative" }}
        top={{ base: 0, md: "auto" }}
        left={{ base: 0, md: "auto" }}
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        width={{ base: "100%", md: 400 }}
        height="100%"
        borderRadius="md"
        boxShadow="md"
        backdropFilter={"blur(15px)"}
        zIndex={9}
      >
        <Text textStyle="2xl" color="white" p={5}>
          ANALYTICS
        </Text>
        <VStack spacing={5} align="start" p={5}>
          {menu.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              p={4}
              width="100%"
              backdropFilter="blur(15px)"
              borderRadius={10}
              _hover={{ bg: "rgb(255, 255, 255,0.2)" }}
              _focus={{ bg: "#54C392" }}
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
