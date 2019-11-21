export class Navbar {

  id: number;
  name: string;
  url: string;
  isPublished: boolean;
  displayOrder: number;

  constructor(params: Navbar = {} as Navbar) {

    this.id = params.id;
    this.name = params.name;
    this.url = params.url;
    this.isPublished = params.isPublished;
    this.displayOrder = params.displayOrder;
  }
}
