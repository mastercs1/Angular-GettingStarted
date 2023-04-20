import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:'replaceChar'
})
export class ReplaceChar implements PipeTransform{
    transform(value: string, deleted :string, replaced:string) :string{
       return value.replace(deleted,replaced);
    }

}