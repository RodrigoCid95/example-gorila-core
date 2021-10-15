import { Library, logger } from 'gorila-core';
export class LibClass extends Library<{message: string;}> {
  build() {
    return new Promise((resolve => {
      logger('Preparando librería...!');
      setTimeout(() => {
        resolve(this.profile.message);
      }, 1000);
    }));
  } 
}