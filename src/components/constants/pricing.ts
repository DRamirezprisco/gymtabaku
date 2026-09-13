export interface PricingPlan {
  price: string;
  duration: string;
  isVip: boolean;
  isActive: boolean;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    price: "70.000",
    duration: "1 MES",
    isVip: false,
    isActive: false,
  },
  {
    price: "170.000",
    duration: "3 MESES",
    isVip: false,
    isActive: false,
  },
  {
    price: "270.000",
    duration: "5 MESES",
    isVip: false,
    isActive: true,
  },
  {
    price: "400.000",
    duration: "8 MESES",
    isVip: false,
    isActive: false,
  },
  {
    price: "520.000",
    duration: "1 AÑO",
    isVip: true,
    isActive: false,
  },
];
