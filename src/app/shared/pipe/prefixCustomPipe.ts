import { stringify } from "@angular/compiler/src/util";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name : 'prefix'})
export class PrefixCustomPipe implements PipeTransform{
    transform(value: any, ...args: any[]) {
        return args[0]+value;

    }

}