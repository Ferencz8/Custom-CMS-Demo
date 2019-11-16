import { WidgetType } from './widget.type';

export class Widget {
  id: number;

  name: string;

  content: string;

  widgettype: WidgetType;

  isPublished: boolean;

  displayOrder: number;
}
