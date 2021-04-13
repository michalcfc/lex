interface Review {
    text: string
    photo: string
    author: string
}
export interface ReviewsProps {
    reviews: Review[]
}