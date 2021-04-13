interface Card {
  id: number
  img?: string
  name?: string
  title?: string
  description?: string
}

export interface SliderProps {
  items: Card[]
  }