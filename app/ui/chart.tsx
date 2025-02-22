"use client";

import { Label, Pie, PieChart, Sector } from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";

import {
  CardContent,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { name: "Liquidity Pool", value: 50, fill: "rgb(70,190,241)" }, 
  { name: "Community & Airdrops", value: 20, fill: "#ec0000" }, 
  { name: "Marketing & Partnerships", value: 15, fill: "#FFFFFF" }, 
  {
    name: "Treasury for Donations/Political Action",
    value: 10,
    fill: "#4ade80",
  },
  { name: "Team & Development", value: 5, fill: "#3C3B6E" },
];

const chartConfig = {
  visitors: {
    label: "Percentage",
  },
  LiquidityPool: {
    label: "Liquidity Pool",
    color: "#3C3B6E",
  },
  CommunityAirdrops: {
    label: "Community & Airdrops",
    color: "#B22234",
  },
  MarketingPartnerships: {
    label: "Marketing & Partnerships",
    color: "#FFFFFF",
  },
  TreasuryDonations: {
    label: "Treasury for Donations/Political Action",
    color: "#4ade80",
  },
  TeamDevelopment: {
    label: "Team & Development",
    color: "#3C3B6E",
  },
} satisfies ChartConfig;

export function Chart() {
  return (
    <CardContent className="w-full md:w-full">
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[200px]"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            innerRadius={50}
            strokeWidth={5}
            activeIndex={0}
            activeShape={({ outerRadius = 0, ...props }: PieSectorDataItem) => (
              <Sector {...props} outerRadius={outerRadius + 10} />
            )}
          >
            {" "}
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        fontSize="24"
                        fontWeight="bold"
                        fill="white"
                        textAnchor="middle"
                      >
                        100%
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        fontSize="12"
                        fontWeight="bold"
                        fill="#94a3b8"
                        textAnchor="middle"
                      >
                        Allocation
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
    </CardContent>
  );
}
