import { MenuImage } from "./MenuImage";

export interface Menu {
  id: number;
  korName: string;
  engName: string;
  price: number;
  regDate: Date;
  categoryId: number;
  regMemberId: number;

  // 자식으로 관계를 가지고 있는 객체 집합 1:N이어서 배열로 담음, 따로 정의
  images: MenuImage[]; 
}
