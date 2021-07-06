import {
    CardContainer,
    CardFigure,
    CardHeader,
    CardTitle,
    CardContent,
    CardDescription,
    CardFooter,
    CardIcon,
    CardImg,
    CardLink
} from "./Card.styles"

import Link from "next/link"

import Arrow from "@components/Arrow"

import { RichText } from "prismic-reactjs";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { CardProps } from './Card.d';

import {
    SpaceProps
} from "styled-system"

type Props = CardProps & SpaceProps

const Card: React.FC<Props> = ({
   cardIcon,
    img,
   hasRedirection,
    link,
   linkName,
   flexContent,
   onMouseEnter,
   onMouseLeave,
   onClick,
   active,
    imgFlex,
    children,
    title,
    description,
    columnSpan,
    hoverEffect,
    pointer,
    mb,
    mt,
    m,
    p
}) => {

    const truncateText = (text) => {
        if (text.length > 75) {
            return text.slice(0, 75).concat('...')
        }
        return text
    }
    return (
        <CardContainer
            p={p}
            m={m}
            mb={mb}
            mt={mt}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
            active={active}
            imgFlex={imgFlex}
            pointer={pointer}
            columnSpan={columnSpan}
            hoverEffect={hoverEffect}
        >
            {img && <CardFigure>
                <CardImg 
                    src={img} 
                />
            </CardFigure>}
            <CardContent
                flexContent={flexContent}
            >
                <div>
                {cardIcon
                    && <CardIcon>
                        <FontAwesomeIcon
                            size='2x'
                            icon={cardIcon}
                        />
                    </CardIcon>
                }
                </div>
            <div>
            <CardHeader>
                <CardTitle>
                    {linkName ?
                        <Link href={link}>{title}</Link>
                        : title
                    }
                </CardTitle>
            </CardHeader>
                {children}
                <CardDescription>
                    {Array.isArray(description)
                        ? truncateText(`${RichText.asText(description)}`)
                        : description
                    }
                </CardDescription>
                <CardFooter>
                    {linkName && <CardLink>
                        <Link href={link}>{linkName}</Link>
                             <Arrow
                                 rightDirection
                                 fontSize={1}
                             />
                    </CardLink>}
                </CardFooter>
            </div>
            </CardContent>
        </CardContainer>
    )
}

export default Card