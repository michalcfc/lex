
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChevronUp,
} from '@fortawesome/free-solid-svg-icons'

import { GoToTopProps } from "./GoToTop.d"

import {
    GoToTopWrapper,
    GoToTopContent
} from "./GoToTop.styles"

const GoToTop: React.FC<GoToTopProps> = ({
    text
}) => {
    return (
        <GoToTopWrapper>
            <GoToTopContent onClick={() => scroll(0, 0)}>
                <FontAwesomeIcon icon={faChevronUp} />
            </GoToTopContent>
        </GoToTopWrapper>
    )
}

export default GoToTop