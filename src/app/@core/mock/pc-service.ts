import { Injectable } from '@angular/core';
import { PCData } from '../data/pc';

@Injectable()
export class PCService extends PCData {

    data = [{
        id: 1,
        name: 'PC-1',
        ram: '00:00:00',
        model: '4',
        hardware: 'xxxx',
        macAddress: 'xxxx',
        ipAddress: 'xxxx',
        osVersion: 'ubuntu'
    }, {
        id: 2,
        name: 'PC-2',
        ram: '00:00:00',
        model: '4',
        hardware: 'xxxx',
        macAddress: 'xxxx',
        ipAddress: 'xxxx',
        osVersion: 'ubuntu'
    }, {
        id: 3,
        name: 'PC-3',
        ram: '00:00:00',
        model: '4',
        hardware: 'xxxx',
        macAddress: 'xxxx',
        ipAddress: 'xxxx',
        osVersion: 'ubuntu'
    }, {
        id: 4,
        name: 'PC-4',
        ram: '00:00:00',
        model: '4',
        hardware: 'xxxx',
        macAddress: 'xxxx',
        ipAddress: 'xxxx',
        osVersion: 'ubuntu'
    }, {
        id: 5,
        name: 'PC-5',
        ram: '00:00:00',
        model: '4',
        hardware: 'xxxx',
        macAddress: 'xxxx',
        ipAddress: 'xxxx',
        osVersion: 'ubuntu'
    }, {
        id: 6,
        name: 'PC-6',
        ram: '00:00:00',
        model: '4',
        hardware: 'xxxx',
        macAddress: 'xxxx',
        ipAddress: 'xxxx',
        osVersion: 'ubuntu'
    }, {
        id: 7,
        name: 'PC-7',
        ram: '00:00:00',
        model: '4',
        hardware: 'xxxx',
        macAddress: 'xxxx',
        ipAddress: 'xxxx',
        osVersion: 'ubuntu'
    }, {
        id: 8,
        name: 'PC-8',
        ram: '00:00:00',
        model: '4',
        hardware: 'xxxx',
        macAddress: 'xxxx',
        ipAddress: 'xxxx',
        osVersion: 'ubuntu'
    }, {
        id: 9,
        name: 'PC-9',
        ram: '00:00:00',
        model: '4',
        hardware: 'xxxx',
        macAddress: 'xxxx',
        ipAddress: 'xxxx',
        osVersion: 'ubuntu'
    },
    ];

    getPCs() {
        return this.data;
    }
}
