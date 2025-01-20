import { DfMenuListUsecase } from "@/application/usecases/menuLookup/DfMenuListUsecase";
import { MenuListDto } from "@/application/usecases/menuLookup/dto/MenuListDto";
import { SbMenuRepository } from "@/infrastructure/repositories/SbMenuRepository";
import { NextResponse } from "next/server";
import { MenuRepository } from "@/domain/repositories/MenuRepository";


export async function GET() {
  // 업로로직을 호출해서 그 결과를 UI 에게 반환
  const menuRepository: MenuRepository = new SbMenuRepository();
  const menuListUsecase: DfMenuListUsecase = new DfMenuListUsecase(menuRepository); // DI
  const menuListDto: MenuListDto = await menuListUsecase.execute();

  return NextResponse.json(menuListDto);
}
