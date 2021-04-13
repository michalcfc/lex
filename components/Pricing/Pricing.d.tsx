interface  Pricing {
    id: number
    tvAbo?: string
    name: string
    download?: string
    upload?: string
    twoYearsActive?: string
    twoYearsAbo?: string
    noTimeActive?: string
    noTimeAbo?: string
    channels?: string
    activation?: string
    decoder?: string
    multiroom?: string
}

export interface PricingProps {
    isNetworkPricing?: boolean
    isTvPricing?: boolean
    pricing: Pricing[]
}