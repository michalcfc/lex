

export interface LogoCarouselProps {
    logos: [{
        logo_url: {
            __typename: string;
            _meta: {
                uid: string
                __typename: string
            }
        }
        logo_img: {
            url: string
        }
    }]
}