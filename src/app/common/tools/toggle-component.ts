import {Component, HostListener} from "@angular/core";

@Component({template: ''})
export abstract class ToggleComponent {
    hidden: boolean = true
    abstract toggleId: string

    @HostListener("document:click", ['$event.target'])
    onClick(target: HTMLElement) {
        if (this.notInToggle(target)) this.hidden = true
    }

    notInToggle(target: HTMLElement): boolean {
        return (target.id !== this.toggleId && (target.parentElement ? this.notInToggle(target.parentElement) : true))
    }
}