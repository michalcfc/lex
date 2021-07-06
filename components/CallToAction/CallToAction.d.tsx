interface Date {
    text: {
        text: string
    }
    heading: {
        text: string
    }
    phone_one: string
    phone_two: string
    img: {
        url: string
    }
}

export interface CallToActionProps {
    data: Date
}