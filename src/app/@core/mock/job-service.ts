import { Injectable } from '@angular/core';
import { JobData } from '../data/job';

@Injectable()
export class JobService extends JobData {

  data = [{
    id: 1,
    name: 'APLAS',
    cpuTime: '00:00:00',
    thread: '4',
    type: 'programming',
  }, {
    id: 2,
    name: 'EPLAS',
    cpuTime: '00:00:00',
    thread: '4',
    type: 'programming',
  }, {
    id: 3,
    name: 'NPLAS',
    cpuTime: '00:00:00',
    thread: '4',
    type: 'programming',
  }, {
    id: 4,
    name: 'openFOAM',
    cpuTime: '00:00:00',
    thread: '4',
    type: 'simulation',
  }, {
    id: 5,
    name: 'NS-3 Simulator',
    cpuTime: '00:00:00',
    thread: '4',
    type: 'networking',
  }, 
];

  getJobs() {
    return this.data;
  }
}
