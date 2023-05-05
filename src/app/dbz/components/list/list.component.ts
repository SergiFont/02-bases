import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent {

  @Output()
  onDeleteCharacter: EventEmitter<string> = new EventEmitter()

  @Input()
  public characterList: Character[] = [{
    id: '',
    name: '',
    power: 0
  }]

  onDelete(id: string): void {

    this.onDeleteCharacter.emit(id)
  }

}
