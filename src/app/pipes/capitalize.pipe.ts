import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {


  transform(value: string, ...args: unknown[]): string {
    console.log('Valor entrada:', value);
    console.log('Args:', args);

    let words = value.split(' ');
    let capitalizedWords;

    if (args[0]===true) {
      capitalizedWords = words.map((word) => {
        return word[0].toUpperCase() + word.substr(1);
      });
    } else {
      return value[0].toUpperCase() + value.substr(1);
    }

    // console.log('Capitalized', capitalizedWords);
    return capitalizedWords.join(' ');

    //unaforma
    // for (let index = 0; index < words.length; index++) {
    //   words[index] = words[index][0].toUpperCase() + words[index].substr(1).toLowerCase();

    // }
    // console.log(words);
    // value[0].toUpperCase() + value.substr(1).toLowerCase()
    // return words.join(' ');
  }

}
