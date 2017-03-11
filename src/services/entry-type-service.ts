import {Injectable} from "@angular/core";
@Injectable()
export class EntryTypeService {

  private types: any[] = [
    {id: "task", title: "Task", icon: "fa-circle", icon_completed:"fa-times"},
    {id: "event", title: "Event", icon: "fa-circle-thin", icon_completed:"fa-times"},
    {id: "note", title: "Note"}
  ];
  public getTypes() {
    return this.types;
  }

  public getType(name:string){
    for (var i = 0; i<this.types.length; i++)
      if(this.types[i].id == name)
        return this.types[i];
  }
}
