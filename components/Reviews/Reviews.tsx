import {
    ReviewContent,
    ReviewText,
    ReviewAuthor,
    ReviewBottom,
    ReviewAuthorName,
    ReviewStarts
} from "./Reviews.styles"

import { ReviewsProps } from "./Reviews.d";

import Grid from "./../Grid"
import Avatar from "./../Avatar"

const Reviews: React.FC<ReviewsProps> = ({
    reviews
 }) => {
    return (
        <Grid
            gridGap=".75rem"
            autoFlow="column"
        >
            {reviews.map(review => (
                <ReviewContent>
                <ReviewText>{review.text}</ReviewText>
                    <ReviewBottom>
                    <ReviewStarts>
                        <img src="img/stars.png" />
                    </ReviewStarts>
                    <ReviewAuthor>
                     <Avatar img={`${review.photo}`}/>
                    <ReviewAuthorName>{review.author}</ReviewAuthorName>
                    </ReviewAuthor>
                    </ReviewBottom>
                </ReviewContent>
            ))}
        </Grid>
    )
}

export default Reviews;