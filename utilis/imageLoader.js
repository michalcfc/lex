export const ImageLoader = ({ src, width, quality }) => {
    return `${src}/${src}?w=${width}&q=${quality || 100}`
}