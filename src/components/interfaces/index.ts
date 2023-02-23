export interface IComponent {
  viewMode: string;
  setviewMode?: (viewMode: 'chart' | 'list') => void;
}
