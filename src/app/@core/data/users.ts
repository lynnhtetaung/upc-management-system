import { Observable } from 'rxjs';

export interface User {
  name: string;
  picture: string;
}

export interface Contacts {
  user: User;
  type: string;
}

export interface RecentUsers extends Contacts {
  time: number;
}

// LHA: Job
// export interface Job {
//   name: string;
//   cpuTime: string;
//   threads: string;
// }

// LHA: Job
// export interface JobData {
//   job: Job;
//   type: string;
// }

export abstract class UserData {
  abstract getUsers(): Observable<User[]>;
  abstract getContacts(): Observable<Contacts[]>;
  abstract getRecentUsers(): Observable<RecentUsers[]>;
  // abstract getJobs(): Observable<any[]>;
}
