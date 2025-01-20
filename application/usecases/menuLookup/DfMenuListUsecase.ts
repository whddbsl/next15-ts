import { MenuRepository } from "@/domain/repositories/MenuRepository";

export class DfMenuListUsecase {
  constructor(private repository: MenuRepository) {}

  async execute() {
    return await this.repository.findAll();

    return {};
  }
}
