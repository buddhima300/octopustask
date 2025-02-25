import { Box, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import { Legend, RadialBar, RadialBarChart } from "recharts";

function DistributionChart({ data }) {
  // const Total = data[0].uv + data[1].uv + data[2].uv;
  return (
    <Box
      w="auto"
      h="auto"
      pl={5}
      pt={5}
      mt={10}
      ml={{ base: 10, md: 10 }}
      borderRadius="md"
      backdropFilter="blur(45px)"
      boxShadow="2xl"
      _hover={{ boxShadow: "lg" }}
    >
      <Text fontSize="xl" fontWeight="bold" color="white">
        User Distribution
      </Text>

      <Text fontSize="sm" fontWeight="bold" color="whiteAlpha.700">
        {data &&
          data.map((item, index) => (
            <ul key={index}>
              <Text color={item.fill}>
                {item.type} | {item.uv}{" "}
              </Text>
            </ul>
          ))}
      </Text>

      {/* <Text fontSize="2xl" fontWeight="light" color="lightgreen" mt={2}>
        Total
      </Text> */}
      {/* <Text fontSize="6xl" fontWeight="bold" color="#ccc">
        {Total}
      </Text> */}

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
    </Box>
  );
}

export default DistributionChart;
