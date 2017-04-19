import { Component, OnInit } from '@angular/core';

import { Job } from './job';
import { OracleJobService } from './oracle-job.service';


@Component({
  selector: 'my-app',
    template: `
    <h1>Hello from {{name}}!</h1>
    <h2>Jobs available according to HR.JOBS</h2>
    <ul class="jobs">
        <li *ngFor="let job of jobs"
                [class.selected]="job === selectedJob"
                (click)="onSelect(job)">
            <span class="badge">{{job.job_id}}</span> {{job.job_title}}
        </li>
    </ul>
    `,
    providers: [OracleJobService]
})
export class AppComponent implements OnInit {
    name = 'OrAngular';
    jobs: Job[];
    selectedJob: Job;

    constructor(private jobService: OracleJobService) { }

    getOracleJobs(): void {
        this.jobService.getOracleJobs().then(jobs => this.jobs = jobs);
    }

    ngOnInit(): void {
        this.getOracleJobs();
    }

    onSelect(job: Job): void {
        this.selectedJob = job;
    }
}
