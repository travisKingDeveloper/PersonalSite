export default function getContentUrl(strings, ...values) {
    // strings: an array of string literals
    // values: the interpolated values

    // Determine if the environment is production or not
    const isProduction = process.env.NODE_ENV === 'production';

    // Get the content URL based on the environment
    let contentUrl;
    if (isProduction) {
        // Use package.json homepage in production
        contentUrl = process.env.PACKAGE_JSON_HOMEPAGE;
    } else {
        // Use "/content" in other environments
        contentUrl = '/content';
    }

    // Append the provided value to the end of the URL
    const appendedValue = values[0] || '';
    const finalUrl = contentUrl + '/' + appendedValue;

    // Return the final interpreted URL
    return finalUrl;
}