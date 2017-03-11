import {NavController, ViewController} from "ionic-angular";
import {Component} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
/**
 * Created by NM on 3/11/2017.
 */

@Component({
  selector: 'entry-config',
  templateUrl: 'entry-config.html',
  styles: ['entry-config.scss']
})
export class EntryConfig {

  private form: FormGroup;

  constructor(public navCtrl: NavController,
              private formBuilder: FormBuilder,
              public viewCtrl: ViewController
  ) {
    this.createForm();
  }

  private createForm() :void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      type: [this.entryTypes[0].id, [Validators.required]],
    });
  }

  private save() {
    var value = this.form.value;
    console.log(value);
    this.viewCtrl.dismiss(value);
  }

  private cancel() {
    this.viewCtrl.dismiss(false);
  }

  private entryTypes = [
    {id: "task", title: "Task"},
    {id: "event", title: "Event"},
    {id: "note", title: "Note"}
  ]

}
