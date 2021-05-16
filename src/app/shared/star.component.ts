import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";

@Component({
    selector :'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{

    ngOnChanges(changes: SimpleChanges): void {
        this.cropWidth = this.cropWidth*this.rating/5;

    }

    cropWidth: number=25;
    @Input() rating: number=0;

    @Output() emitter : EventEmitter<string> = new EventEmitter();



    onClick(){
        this.emitter.emit('clicked stars')
    }


}