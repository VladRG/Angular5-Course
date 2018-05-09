import { Injectable, PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'capitalize' })
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase() + ' from pipe';
  }
}
