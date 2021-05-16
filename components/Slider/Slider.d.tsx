interface Card {
  id: number
  img?: string
  name?: string
  title?: string
  url?: string
  description?: string
}

export interface SliderProps {
  items: Card[]
}