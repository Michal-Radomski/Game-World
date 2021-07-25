export function changeOriginalImageSize(image, size) {
    const splitImage = image.split("thumb");
    return `https://${splitImage[0]}${size}${splitImage[1]}`;
}

export function changeUnixTimeToDate(unixTimeFromDB) {
    const milliseconds = unixTimeFromDB * 1000;
    const dateObject = new Date(milliseconds);
    const humanDateFormat = dateObject.toLocaleString().slice(0, -10);
    return humanDateFormat;
}
