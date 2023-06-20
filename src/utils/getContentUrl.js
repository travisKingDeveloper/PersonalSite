import packageJson from '../../package.json'
const { homepage } = packageJson

export default function getContentUrl(appendedString) {
    // strings: an array of string literals
    // values: the interpolated values
    const contentUrl = homepage + '/content'

    // Append the provided value to the end of the URL
    const finalUrl = contentUrl + '/' + appendedString;
    console.log(finalUrl)

    return finalUrl;
}