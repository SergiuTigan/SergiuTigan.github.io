import { TableColumn } from '@swimlane/ngx-datatable';

export interface CustomColumnModel extends TableColumn {
  label?: string;
  prop?: string;
}

export class CustomColumn implements CustomColumnModel {
  label = '';
  prop = '';

  constructor(customColumnDto?: CustomColumnModel) {
    if (!customColumnDto) {
      return;
    }
    this.label = customColumnDto.label ? customColumnDto.label : this.label;
    this.prop = customColumnDto.prop ? customColumnDto.prop : this.prop;
  }
}
