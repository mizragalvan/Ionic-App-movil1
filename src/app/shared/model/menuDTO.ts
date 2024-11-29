export class Menu {
    application: string;
    application1: string;
    collapse: string;
    factory: string;
    factoryName: string;
    factoryNameParent: string;
    imagen: string;
    menuLevel: string;
    nombre: string;
    subMenu?: Menu[]
    type: string;
    expandable: boolean;
    level: any;
    select: boolean;

    constructor () {
     this.application = "";
     this.application1= "";
     this.collapse = "";
     this.factory = "";
     this.factoryName = "";
     this.factoryNameParent = "";
     this.imagen = "";
     this.menuLevel = "";
     this.nombre = "";
     this.subMenu = [];
     this.type = "";
     this.expandable = false;
     this.level = "";
     this.select = false;
    }
}