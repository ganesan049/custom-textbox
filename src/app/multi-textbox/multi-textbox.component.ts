import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-multi-textbox',
  templateUrl: './multi-textbox.component.html',
  styleUrls: ['./multi-textbox.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class MultiTextboxComponent implements OnInit {
  @Input() key? = '';
  @Output() valueAdded = new EventEmitter();
  constructor() {}

  values: any[] = [];
  inputValue = '';
  ngOnInit() {}
  onTextboxChange(e) {
    if (['enter', 'comma'].includes(e.code.toLowerCase())) {
      let trim = this.inputValue;
      if(e.code.toLowerCase() == 'comma'){
        trim = this.inputValue.substring(0, this.inputValue.length - 1);
      }
      if (!trim || trim.length == 0) {
        this.inputValue = '';
        return;
      }
      this.inputValue = trim;
      this.values.push(this.inputValue);
      this.valueAdded.emit({ values: this.values, key: this.key });
      this.inputValue = '';
    }
  }
  deleteValue(index) {
    this.values.splice(index, 1);
  }
}
