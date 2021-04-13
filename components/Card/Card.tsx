
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

import {
    faClock,
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { CardProps } from './Card.d';

const Card: React.FC<CardProps> = ({
   cardIcon,
    img,
   hasRedirection,
    link,
   linkName,
   flexContent,
   onMouseEnter,
   onMouseLeave,
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
    return (
        <CardContainer
            p={p}
            m={m}
            mb={mb}
            mt={mt}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
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
                    && <CardIcon><FontAwesomeIcon size='2x' icon={cardIcon} /></CardIcon>
                }
                </div>
            <div>
            <CardHeader>
                <CardTitle>
                    {title}
                </CardTitle>
            </CardHeader>
                {children}
                <CardDescription>
                    {description}
                </CardDescription>
            </div>
                {hasRedirection && <CardLink>
                    <Link href={link}>{linkName}</Link>
                     <Arrow rightDirection />
                    </CardLink>}
            </CardContent>
        </CardContainer>
    )
}

export default Card