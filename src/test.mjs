import { exampleStrings } from "./strings.mjs";
import { normalizeToKebabOrSnakeCase, formatString } from "./lib.mjs";
import {
    kebabCase,
    snakeCase,
} from 'case-anything';

for (const exampleString of exampleStrings) {

    const kebabAnything = kebabCase(exampleString);
    const snakeAnything = snakeCase(exampleString);
    const kebabLib = normalizeToKebabOrSnakeCase(exampleString);
    const formatLib = formatString(exampleString);

    console.log({
        exampleString,
        formatLib,
        kebabLib,
        kebabAnything,
        snakeAnything,
    });
}
