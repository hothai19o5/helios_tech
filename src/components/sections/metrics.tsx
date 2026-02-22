"use client";

import { sectionClass } from "@/lib/utils";
import { Area, AreaChart, Pie, PieChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Cell } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";

const revData = [
  { name: "Q1", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Q2", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Q3", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Q4", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Q5", total: Math.floor(Math.random() * 5000) + 1000 },
  { name: "Q6", total: Math.floor(Math.random() * 5000) + 1000 },
];

const pieData = [
  { name: "Frontend", value: 400 },
  { name: "Backend", value: 300 },
  { name: "AI/ML", value: 300 },
  { name: "DevOps", value: 200 },
];
const COLORS = ["#f4af25", "#d69a20", "#b8841a", "#996e16"];

export function MetricsSection() {
  const t = useTranslations("Metrics");

  const stats = [
    { value: "120+", label: t("projects") },
    { value: "98%", label: t("satisfaction") },
    { value: "300%", label: t("roi") },
    { value: "10+", label: t("experience") },
  ];

  return (
    <section id="metrics" className={sectionClass("bg-background")}>
      <div className="container px-4 md:px-6 mx-auto">
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-foreground mb-6">
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col p-6 sm:p-8 bg-card rounded-2xl border border-border/40 text-center justify-center transform hover:scale-105 transition-transform">
                <span className="text-4xl sm:text-5xl font-bold text-accent mb-2">{stat.value}</span>
                <span className="text-sm sm:text-base font-medium text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Charts Area */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="bg-card border-border/40 shadow-none col-span-1 sm:col-span-2">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold">{t("revenue.title")}</CardTitle>
                <p className="text-sm text-muted-foreground">{t("revenue.subtitle")}</p>
              </CardHeader>
              <CardContent className="h-[200px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f4af25" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#f4af25" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                    <Tooltip contentStyle={{ background: 'oklch(0.205 0 0)', border: '1px solid oklch(1 0 0 / 10%)', borderRadius: '8px' }} itemStyle={{ color: '#fff' }} />
                    <Area type="monotone" dataKey="total" stroke="#f4af25" strokeWidth={2} fillOpacity={1} fill="url(#colorTotal)" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/40 shadow-none">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold">{t("expertise")}</CardTitle>
              </CardHeader>
              <CardContent className="h-[180px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={pieData} cx="50%" cy="50%" innerRadius={40} outerRadius={70} paddingAngle={5} dataKey="value" stroke="none">
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ background: 'oklch(0.205 0 0)', border: 'none', borderRadius: '8px' }} />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/40 shadow-none flex flex-col justify-center">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold">{t("activeUsers.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-foreground">15.2k</div>
                <p className="text-sm text-muted-foreground mt-2">{t("activeUsers.subtitle")}</p>
                <div className="w-full bg-secondary h-2 mt-6 rounded-full overflow-hidden">
                  <div className="bg-accent h-full w-3/4 rounded-full" />
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}
