import {Component} from '@angular/core';

@Component({
    selector : 'app-body',
    templateUrl : './body.component.html'
})

export class BodyComponent {
    bandera = true;
    frase: any = {
        mensaje : 'Un gran poder con lleva una gran responsabilidad',
        autor : 'Ben Parker'
    };
    personajes: string[] = [
        'SpiderMan',
        'Venon',
        'Doctor Octopus'
    ];
}


