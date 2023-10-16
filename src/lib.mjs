// This function is copied from nest.js
// https://github.com/nestjs/nest-cli/blob/812151373479088a0dce6878504efff53fc78b45/lib/utils/formatting.ts#L8

export const normalizeToKebabOrSnakeCase = (str = '') => {
    const STRING_DASHERIZE_REGEXP = /\s/g;
    const STRING_DECAMELIZE_REGEXP = /([a-z\d])([A-Z])/g;
    return str
        .replace(STRING_DECAMELIZE_REGEXP, '$1-$2')
        .toLowerCase()
        .replace(STRING_DASHERIZE_REGEXP, '-');
}

// This function is used in the nest.js codebase to format some string

export const formatString = (str = '') => {
    return str.split('').reduce((content, char) => {
        if (char === '(' || char === ')' || char === '[' || char === ']') {
            return `${content}\\${char}`;
        }
        return `${content}${char}`;
    }, '');
};
