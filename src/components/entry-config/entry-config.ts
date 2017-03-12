import {NavController, ViewController, NavParams} from "ionic-angular";
import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EntryTypeService} from "../../services/entry-type-service";
import {EntryModel} from "../../models/entry-model";
import {UtilisService} from "../../services/utilis-service";
/**
 * Created by NM on 3/11/2017.
 */

@Component({
  selector: 'entry-config',
  templateUrl: 'entry-config.html',
  styles: ['entry-config.scss']
})
export class EntryConfig implements OnInit {

  private form: FormGroup;
  private initialEntry: EntryModel = null;
  private edit: boolean = false;
  public maxDate: Date;

  constructor(private navCtrl: NavController,
              private formBuilder: FormBuilder,
              private viewCtrl: ViewController,
              private entryTypeService: EntryTypeService,
              private params: NavParams,
              private utilis: UtilisService) {
    this.createForm();
    if (this.params.get("entry")) {
      let entry = this.params.get("entry");
      this.initialEntry = entry;
      // console.log("edit with: ", entry);
      this.form.patchValue(entry);

      let obj = {date: entry.date.toISOString()};
      this.form.patchValue(obj);
      this.edit = true;
    }
    let dt = new Date();
    dt.setFullYear(dt.getFullYear() + 5);
    this.maxDate = dt;
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      type: ['', [Validators.required]],
      date: ['']
    });
  }

  public save() {
    let value = this.form.value;
    if (this.initialEntry) {
      value = Object.assign({}, this.initialEntry, value);
    }
    console.log(value);
    value.date = new Date(value.date);
    this.viewCtrl.dismiss({entry: value});
  }

  public cancel($event) {
    $event.preventDefault();
    this.viewCtrl.dismiss(false);
  }

  private entryTypes: any[] = [];

  ngOnInit(): void {
    this.entryTypes = this.entryTypeService.getTypes();
    if (!this.form.value.type) {
      this.form.patchValue({type: this.entryTypes[0].id});
    }
  }

}
