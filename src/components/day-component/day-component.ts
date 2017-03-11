import {Component, OnInit} from '@angular/core';

import {NavController, ModalController} from 'ionic-angular';
import {EntryConfig} from "../../components/entry-creator/entry-config";
import {EntryModel} from "../../models/entry-model";

@Component({
    selector: 'day-component',
    templateUrl: 'day-component.html'
})
export class DayComponent implements OnInit {

    constructor(public navCtrl: NavController,
                public modalCtrl: ModalController) {

    }

    public entries: EntryModel[] = [
        {name: "prima", type: "task"}
        ];

    ngOnInit(): void {
        setTimeout(() => {
            // this.addEntry();
        }, 1000)
    }

    private addEntry() {
        let profileModal = this.modalCtrl.create(EntryConfig, {}, this.entryConfigOptions);
        profileModal.onDidDismiss(data => {
            if (!data) {
                return;
            }
            console.log(data);
            this.entries.push(data);
        });
        profileModal.present();

    }

    private entryConfigOptions: any = {
        enableBackdropDismiss: true,
        showBackdrop: true
    };
}