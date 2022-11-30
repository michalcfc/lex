import { RichTextBlock} from "prismic-reactjs";


interface Movie {
    id: number
    title: string
    userAgent?: string
    isMobile?: boolean
    cover: {url: string}
}
export interface HomeProps {
    movies: [Movie]
    preview: string
    allPosts: any
    previewData: any
    text: RichTextBlock[]
}