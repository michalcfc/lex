
type products = {
    id: number
    name: string
}

export interface AutocomplatesProps {
    searchText: string
    autocompletes: products[]
    selectedProduct: number
    goToProduct: (event: React.MouseEvent<HTMLDivElement>, product: string | boolean) => void
}