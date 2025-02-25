import { Box, Text } from "@chakra-ui/react";
import React from "react";

function StatCard({ statData }) {
  return (
    <Box
      w="100%"
      mt={10}
      ml={10}
      display="flex"
      flexDirection="row"
      justifyContent="space-around"
      gap={5}
    >
      {statData.map((item) => (
        <Box
          key={item.topic}
          w={400}
          h={200}
          pl={5}
          pt={5}
          borderRadius="md"
          backdropFilter="blur(25px)"
          boxShadow="lg"
          _hover={{ boxShadow: "lg", transform: "scale(1.05)" }}
        >
          <Text color="whiteAlpha.500" fontWeight="medium">
            {item.topic}
          </Text>
          <Text color="white" fontSize="6xl" fontWeight="bold">
            {item.value}
          </Text>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            pr={5}
          >
            <Text color="whiteAlpha.600">{item.date}</Text>
            <Text color="lightgreen" fontWeight="bold">
              {item.status}
            </Text>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default StatCard;
