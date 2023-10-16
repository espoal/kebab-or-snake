# kebab-or-snake
The current `nest.js` default function for  nestjs `kebab-or-snake` case

- It's ambiguous in its definition: it formats to kebab case, unless it's already in snake case, 
in which case it does nothing.
- It does not handle special charcters well
- It seems to allow filesystem escape

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
