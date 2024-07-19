"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart, Cell, Tooltip, Sector } from "recharts"
import { PieSectorDataItem } from "recharts/types/polar/Pie"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/Components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select"

const COLORS = {
  'OLT Negril': '#0088FE',
  'OLT St. Anns Bay': '#00C49F',
  'OLT Mandeville': '#FFBB28',
  'OLT Old Harbor': '#FF8042',
  'OLT St. Jago': '#AF19FF',
  'OLT Bridgeport': '#FF4560',
  'OLT Dumfries': '#00E396',
  'OLT Barbican': '#775DD0',
  'OLT Independence City': '#FEB019',
  'Unknown': '#888888',
}

type Customer = {
  customer_id: number
  customer_name: string
  telephone: string
  town_id: number
  customer_type_id: number
  created_at: string
  updated_at: string
  olt: {
    olt_id: number
    olt_name: string
    parish_id: number
    town_id: number
    customer_count: number
    business_customer_count: number
    residential_customer_count: number
    olt_value: number
    rank: number
    level: string
    resource_id: number
    created_at: string
    updated_at: string
  }
}

type CustomerOLTBreakdownProps = {
  customers: Customer[]
}

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

const CustomerOLTBreakdown: React.FC<CustomerOLTBreakdownProps> = ({ customers }) => {
  const [activeOLT, setActiveOLT] = React.useState<string | null>("all");

  const data = React.useMemo(() => {
    const oltCounts = customers.reduce((acc, customer) => {
      const oltName = customer.olt ? customer.olt.olt_name : 'Unknown'
      if (!acc[oltName]) {
        acc[oltName] = 0
      }
      acc[oltName] += 1
      return acc
    }, {} as Record<string, number>)

    return Object.entries(oltCounts).map(([name, value]) => ({ name, value }))
  }, [customers])

  const filteredData = activeOLT === "all" ? data : data.filter(item => item.name === activeOLT);
  const totalCustomers = filteredData.reduce((acc, curr) => acc + curr.value, 0)
  const olts = data.map(item => item.name);

  return (
    <Card className="flex flex-col bg-[var(--foreground)] rounded-lg">
      <CardHeader className="flex-row items-start space-y-0 pb-0">
        <div className="grid gap-1">
          <CardTitle className="text-white">Customer OLT Breakdown</CardTitle>
          <CardDescription className="text-[var(--table-headings)]">Total number of customers: {totalCustomers}</CardDescription>
        </div>
        <Select value={activeOLT || ""} onValueChange={(value) => setActiveOLT(value === "all" ? "all" : value)}>
          <SelectTrigger
            className="ml-auto h-7 w-[130px] rounded-lg pl-2.5 mb-4 mt-1 bg-transparent text-sm font-medium text-white border-4"
            aria-label="Select OLT"
          >
            <SelectValue placeholder="Select OLT" />
          </SelectTrigger>
          <SelectContent align="end" className="rounded-xl bg-white p-0 border-4">
            <SelectItem
              key="all"
              value="all"
              className="rounded-lg [&_span]:flex"
            >
              <div className="flex items-center gap-2 text-xs">
                <span className="flex h-3 w-3 shrink-0 rounded-sm" />
                All OLTs
              </div>
            </SelectItem>
            {olts.map((key, index) => (
              <SelectItem
                key={key}
                value={key}
                className="rounded-lg [&_span]:flex"
              >
                <div className="flex items-center gap-2 text-xs">
                  <span className="flex h-3 w-3 shrink-0 rounded-sm" />
                  {key}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={filteredData}
              dataKey="value"
              nameKey="name"
              innerRadius={80}
              stroke="none"
            >
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
                          className="text-3xl font-bold"
                          fill="var(--primary)"
                        >
                          {totalCustomers.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          fill="var(--muted-foreground)"
                        >
                          Customers
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
              {filteredData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none text-white">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-[var(--table-headings)]">
          Showing total customers per OLT
        </div>
      </CardFooter>
    </Card>
  )
}

export default CustomerOLTBreakdown
