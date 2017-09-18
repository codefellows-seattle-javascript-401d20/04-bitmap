![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) Code-401-Javascript Group Lab-4: Bitmap Transformer
===
This is the day 4 lab with Code Fellows. The purpose of the lab is to teach students how to manipulated binary data in order to transform/alter bitmap files with various specific effects.
# Execution
Go to the lab-closure-group directory. On a terminal, run the command `node index.js <input file> <output file> <option>`. This will mutate the input file depending on the option specified, and store it into the output file in the data directory.
# Modules
Description of exported values of each module defined in lib/ directory, along with airity and expected input/return values.
### BitMapImage.js
Exports a single constructor function with an arity of one, that takes data from a file system read occuring in index.js and creates a bitmap image object to be used for transformations.
### transform.js
Exports a function with an arity of two, that takes in a bitmap image object (contstructed by BitMapImage.js) as well as a string to determine what transformation will be performed.
* # Transformations
    * grayscale - Converts colors to only different shades of gray.
    * invert - Inverts the rgb values.
    * rainbow - Randomizes all the colors.
    * noise - Creates a static screen effect.
    * red - Changes the image to red, unless pixel is white.
    * blue - Changes the image to blue, unless pixel is white.
    * green - Changes the image to green, unless pixel is white.
    * flipUp - Flips the image vertically.
    * mirror - Creates a vertical mirror effect.
