import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { JobService } from '../../@core/mock/job-service';

@Component({
  selector: 'ngx-job-manage',
  templateUrl: './job-manage.component.html',
  styleUrls: ['./job-manage.component.scss'],
})
export class JobManageComponent {

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
      cpuTime: {
        title: 'CPU Time',
        type: 'string',
      },
      thread: {
        title: 'Thread',
        type: 'number',
      },
      type: {
        title: 'Type',
        type: 'string',
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: JobService) {
    const data = this.service.getJobs();
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
