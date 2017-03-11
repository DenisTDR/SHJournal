import {NavController, ViewController} from "ionic-angular";
import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EntryTypeService} from "../../services/entry-type-service";
/**
 * Created by NM on 3/11/2017.
 */

@Component({
  selector: 'entry-config',
  templateUrl: 'entry-config.html',
  styles: ['entry-config.scss']
})
export class EntryConfig implements OnInit{

  private form: FormGroup;

  constructor(private navCtrl: NavController,
              private formBuilder: FormBuilder,
              private viewCtrl: ViewController,
              private entryTypeService: EntryTypeService
  ) {
    this.createForm();
  }

  private createForm() :void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      type: ['', [Validators.required]],
    });
  }

  public save() {
    var value = this.form.value;
    console.log(value);
    this.viewCtrl.dismiss({entry: value});
  }

  public cancel() {
    this.viewCtrl.dismiss(false);
  }

  private entryTypes:any[] = [ ];

  ngOnInit(): void {
    this.entryTypes = this.entryTypeService.getTypes();
    this.form.patchValue({type: this.entryTypes[0].id});
  }

}
