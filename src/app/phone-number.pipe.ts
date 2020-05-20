import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'phoneNum'
})
export class PhonePipe implements PipeTransform {
    transform(rawNum: string) {
        let newStr = '';
        for (let i = 0; i < rawNum.length; i++) {
            if (i === 3 || i === 6) {
                newStr = newStr + '-' + rawNum[i];
            } else {
                newStr = newStr + rawNum[i];
            }
        }
        return '+91-' + newStr;
    }
}

