import { Box, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import { Legend, RadialBar, RadialBarChart } from "recharts";

function DistributionChart({ data }) {
  const Total = data[0].uv + data[1].uv + data[2].uv;
  return (
    <Box
      w="100%"
      h="auto"
      pl={5}
      pt={5}
      mt={10}
      borderRadius="md"
      backdropFilter="blur(25px)"
      boxShadow="lg"
      _hover={{ boxShadow: "lg" }}
    >
      <Text fontSize="xl" fontWeight="bold" color="white">
        User Distribution
      </Text>
      <Text fontSize="2xl" fontWeight="light" color="lightgreen" mt={2}>
        Total
      </Text>
      <Text fontSize="6xl" fontWeight="bold" color="whiteAlpha.700">
        {Total} Users
      </Text>

      {/* Radial bar chart for user distribution */}
      <RadialBarChart
        width={530}
        height={450}
        innerRadius="10%"
        outerRadius="80%"
        data={data}
        startAngle={180}
        endAngle={-90}
      >
        <RadialBar
          minAngle={15}
          label={{ fill: "#fff", position: "insideBottomLeft" }}
          background={{ fill: "#F6F4F0" }}
          clockWise={true}
          dataKey="uv"
        />
        <Legend
          iconSize={10}
          width={100}
          height={36}
          layout="horizontal"
          verticalAlign="top"
          align="center"
        />
        <Tooltip />
      </RadialBarChart>
      {/* adding additional stats */}
    </Box>
  );
}

export default DistributionChart;
