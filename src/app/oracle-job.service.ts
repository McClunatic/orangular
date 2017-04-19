import { Injectable } from '@angular/core';

import { Job } from './job';
import { JOBS } from './mock-jobs';


@Injectable()
export class OracleJobService {
    getOracleJobs(): Promise<Job[]> {
        return Promise.resolve(JOBS);
    }
}
