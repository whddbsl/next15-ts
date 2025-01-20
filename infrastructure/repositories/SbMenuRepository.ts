import { Menu } from "@/domain/entities/Menu";
import { createClient } from "@/utils/supabase/server";
import { MenuRepository } from "@/domain/repositories/MenuRepository";

export class SbMenuRepository implements MenuRepository {
  async findAll(): Promise<Menu[]> {
    const supabase = await createClient();
    const { data: menus } = await supabase.from("menu").select();

    return menus || [];
  }
}
