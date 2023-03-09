import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { PCService } from '../../@core/mock/pc-service';

@Component({
  selector: 'ngx-pc-manage',
  templateUrl: './pc-manage.component.html',
  styleUrls: ['./pc-manage.component.scss'],
})
export class PCManageComponent {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      name: {
        title: 'Name',
        type: 'string',
      },
      ram: {
        title: 'RAM',
        type: 'string',
      },
      model: {
        title: 'Model',
        type: 'string',
      },
      hardware: {
        title: 'Hardware',
        type: 'string',
      },
      macAddress: {
        title: 'MAC Address',
        type: 'string',
      },
      ipAddress: {
        title: 'IP Address',
        ip: 'string',
      },
      osVersion: {
        title: 'OS Version',
        os: 'string',
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: PCService) {
    const data = this.service.getPCs();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
