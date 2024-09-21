export interface Item {
  icon: string;
  label: string;
  href: string;
  visible: string[];
}
export type MenuType = {
  title: string;
  items: Item[];
};
