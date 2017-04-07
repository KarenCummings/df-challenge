import {Pipe, PipeTransform} from "@angular/core";
import { OncoDatum } from './onco-datum';

@Pipe({
    name: "search"
})
export class SearchPipe implements PipeTransform {
    transform(value, [term]){
        return value.filter((item)=> term ? item.alteration.startsWith(term) : item);
    }
}