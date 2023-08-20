export interface NavigationInterface {
  identifier: string;
  position: string;
  slug: string;
  sys: { id: string };
  title: string;
  navigationItemsCollection: {
    items: NavigationInterface[];
  };
}
