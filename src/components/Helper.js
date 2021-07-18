export function changeOriginalImageSize(image, size) {
    const splitImage = image.split("thumb");
    return `https://${splitImage[0]}${size}${splitImage[1]}`;
}
