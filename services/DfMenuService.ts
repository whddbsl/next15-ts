import { Menu } from "@/domain/entities/Menu";
import { MenuListModel } from "@/models/MenuListModel";
import { SbMenuRepository } from "@/infrastructure/repositories/SbMenuRepository";

export class DfMenuService {
  constructor(private repository: SbMenuRepository = new SbMenuRepository()) {}

  async getList(): Promise<MenuListModel[]> {
    const menus: Menu[] = await this.repository.fetchAll();

    return menus.map((menu) => {
      const model: MenuListModel = {
        ...menu,
        img: "default.svg",
      };

      return model; 
    });
  }
}

