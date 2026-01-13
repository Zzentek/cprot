export interface HytalePlan {
  id: string
  name: string
  badge?: string
  cpu: string
  cpuDetail: string
  ram: string
  ramDetail: string
  storage: string
  storageDetail: string
  bandwidth: string
  bandwidthDetail: string
  uptime: string
  price: string
  period: string
  orderLink: string
  promo?: string        // ← Opcional
  porcentaje?: string   // ← Opcional
}

export interface PlanType {
  id: string
  name: string
  displayName: string
  image: string
}

export interface HytaleConfig {
  header: {
    badge: {
      text: string
    }
    title: string
    description: string
  }
  planTypes: PlanType[]
  plans: {
    [key: string]: HytalePlan[]
  }
}