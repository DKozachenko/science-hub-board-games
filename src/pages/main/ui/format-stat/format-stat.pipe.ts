import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatStat',
})
export class FormatStatPipe implements PipeTransform {
  transform(value: number | null): string {
    return value === null ? '—' : String(value);
  }
}
