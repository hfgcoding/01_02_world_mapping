/*
 * WORLD MAP VISUALIZER
 * Author: Marc Rufeis
 * ---------------------------
 *
 * Visualizing the world!
 *
 * A list of ressources you used, for example links:
 * [JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference).
 */

/*
 *  Aufgabe 2.0: Das Script soll eine Weltkarte auf der Konsole als ASCII-Art zeichnen.
 *  Dafür muss jeder Pixel eines Bild einer Weltkarte gelesen und geprüft werden (world.jpg).
 *  Ist der Pixel schwarz, soll ein Zeichen (z.B. "#") an die richtige Stelle der Konsole 
 *  gesetzt werden. Dafür braucht ihr zwei Funktionen:
 *
 *  getPixelColor(x,y) - kann mit map_image-Objekt benutzt werden (also map_image.getPixelColor(x,y))
 *  writeCharacterToConsole(char, x, y) - Schreibt ein Zeichen an eine Position x/y auf die Konsole
 *
 *  Aufgabe 2.1: Farbe! Schaut euch das npm-Modul "chalk" an, und versucht die Zeichen in Farbe auszugeben
 *
 */

const rl = require('readline')
const jimp = require('jimp')
const chalk = require('chalk');

clearConsole()

jimp.read('prag.jpg', (err, map_image) => {
  if (err) throw err;

  // map_image.resize(550,134);
  const terminal_width = process.stdout.columns;
  const terminal_height = (terminal_width / 4.1044776119) * 1;
  // map_image.resize(terminal_width, terminal_height).greyscale().contrast(1).posterize(2);
  map_image.resize(terminal_width, terminal_height);

  /*
  console.log(map_image.getPixelColor(0,0)); //gibt die Farbe des Pixels links oben zurück
  writeCharacterToConsole('#',0,0); //schreibt ein # links oben in die Konsole
  */

  //----- Hier kommt euer Code hin -----
  // IMG SIZE: 550 × 67
  // TERMINAL SIZE: process.stdout.columns
  
  
  for (let x = 0; x <= terminal_width; x++) {
  
    for (let y = 0; y <= terminal_height; y++) {

      // console.log(map_image.getPixelColor(x,y));
      // writeCharacterToConsole('#',x,y);

      //console.log(hexAToRGBA(map_image.getPixelColor(x,y)));
      const color = jimp.intToRGBA(map_image.getPixelColor(x,y))
      writeCharacterToConsole(chalk.rgb(color.r, color.g, color.b)('■'),x,y);
      
      /* if (map_image.getPixelColor(x, y) == 255) {
        // writeCharacterToConsole('■',x,y);
        // writeCharacterToConsole('▪️',x,y);
        writeCharacterToConsole('#',x,y);
      } /*else if (map_image.getPixelColor(x, y) == 4294967295) {
        writeCharacterToConsole(' ',x,y);
      }*/
      
      
    }
    
  }
  

});



//Vorerst nur ein Platzhalter
setInterval(function () {
    
},1000);


/*
 * HELPER FUNCTIONS - DO NOT CHANGE
 */
function clearConsole () {
  const blank = '\n'.repeat(process.stdout.rows)
  console.log(blank)

  rl.cursorTo(process.stdout, 0, 0)
  rl.clearScreenDown(process.stdout)
}

function writeCharacterToConsole (char, x, y) {
  rl.cursorTo(process.stdout,x,y)
  process.stdout.write(char)
}