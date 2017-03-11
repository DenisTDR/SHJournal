import {NavController, ViewController, NavParams} from "ionic-angular";
import {Component, OnInit, OnChanges, SimpleChanges} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EntryTypeService} from "../../services/entry-type-service";
import {UtilisService} from "../../services/utilis-service";
/**
 * Created by NM on 3/11/2017.
 */

@Component({
  selector: 'entry-selector',
  templateUrl: 'day-selector.html',
  styles: ['day-selector.scss'],
  inputs: ['days']
})
export class DaySelector implements OnInit, OnChanges{

  public days: any[];
  public daysArray: any[];
  private form: FormGroup;

  constructor(private navCtrl: NavController,
              private formBuilder: FormBuilder,
              private viewCtrl: ViewController,
              private entryTypeService: EntryTypeService,
              private utilis:UtilisService,
              private params: NavParams
  ) {
    this.createForm();
    var days = this.params.get("days");
    if(days) {
      this.days = days;
      this.ngOnChanges(null);
    }
  }

  private createForm() :void {
    this.form = this.formBuilder.group({
      day: ['', [Validators.required]]
    });
  }

  public save() {
    var value = this.form.value;
    console.log(value);
    // this.viewCtrl.dismiss({entry: value});
  }

  public cancel() {
    this.viewCtrl.dismiss(false);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(!this.days) {
      return;
    }
    this.daysArray = [];
    this.days.forEach(day => {
      this.daysArray.push({date: day, name: this.utilis.getDayName(day.getDay())});
    });

    console.log(this.daysArray);

  }

  ngOnInit(): void {

  }

}
