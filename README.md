# kebab-or-snake
The current `nest.js` [default 
function](https://github.com/nestjs/nest-cli/blob/812151373479088a0dce6878504efff53fc78b45/lib/utils/formatting.ts#L8) 
for formatting strings to the `kebab-or-snake` case.

The function formats a string to the `kebab` case unless it already follows the `snake` convention, 
in which case it returns the string unchanged.

- Its behavior is ambiguous
- It does not handle special characters well
- It seems to allow filesystem escape

# Filesystem escape

```bash
nest new $test -s -c
```
When prompted for a name enter `$play`

The files will be created one directory higher than they should. It poses minimal risk as you can't control
the content of the files nor the position of the files, but potentioally you could overwrite an existing
`package.json` and break someone's workflow.

# Run the test

First install deps with:

`yarn`

Then run the example with:

`yarn test`

# Results

```bash
{
  exampleString: 'hello world',
  formatLib: 'hello world',
  kebabLib: 'hello-world',
  kebabAnything: 'hello-world',
  snakeAnything: 'hello_world'
}
{
  exampleString: 'helloWorld',
  formatLib: 'helloWorld',
  kebabLib: 'hello-world',
  kebabAnything: 'hello-world',
  snakeAnything: 'hello_world'
}
{
  exampleString: 'hello_world',
  formatLib: 'hello_world',
  kebabLib: 'hello_world',
  kebabAnything: 'hello-world',
  snakeAnything: 'hello_world'
}
{
  exampleString: 'hello-world',
  formatLib: 'hello-world',
  kebabLib: 'hello-world',
  kebabAnything: 'hello-world',
  snakeAnything: 'hello_world'
}
{
  exampleString: '$#%catDog!!!',
  formatLib: '$#%catDog!!!',
  kebabLib: '$#%cat-dog!!!',
  kebabAnything: 'cat-dog',
  snakeAnything: 'cat_dog'
}
{
  exampleString: 'Cats? & Dogs!',
  formatLib: 'Cats? & Dogs!',
  kebabLib: 'cats?-&-dogs!',
  kebabAnything: 'cats-dogs',
  snakeAnything: 'cats_dogs'
}
{
  exampleString: '../escape/file/system',
  formatLib: '../escape/file/system',
  kebabLib: '../escape/file/system',
  kebabAnything: 'escape-file-system',
  snakeAnything: 'escape_file_system'
}
```
