export const capitalizeText = (text: string): string => {
    return text.split(' ')
        .map(w => w.charAt(0).toUpperCase() + w.toLowerCase().slice(1))
        .join(' ');
}