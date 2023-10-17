import {formatString, normalizeToKebabOrSnakeCase} from "./lib.mjs";
import {kebabCase, snakeCase} from "case-anything";

const specialStrings = [
    '@hello world',
    'hello-world',
    '_world',
    '@/hello-world',
    '$#%catDog!!!',
    'Cats? & Dogs!',
    '../escape/file/system'
]

const options = {
    keep: ['@', '_', '/']
}

for (const specialString of specialStrings) {

    const kebabAnything = kebabCase(specialString, options);
    const snakeAnything = snakeCase(specialString, options);
    const kebabLib = normalizeToKebabOrSnakeCase(specialString);
    const formatLib = formatString(specialString);

    console.log({
        specialString,
        formatLib,
        kebabLib,
        kebabAnything,
        snakeAnything,
    });
}
