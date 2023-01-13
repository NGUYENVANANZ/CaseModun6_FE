export class ShowProfileDTO{
  fullName !: string;
  img !: string;
  birthday !: Date;
  city !: string;
  nation !: string;
  gender !: string;
  height !: number;
  weight !: number;
  soThich !: string;
  moTa !: string;
  yeuCau !: string;

  constructor(fullName: string, img: string, birthday: Date, city: string, nation: string, gender: string, height: number, weight: number, soThich: string, moTa: string, yeuCau: string) {
    this.fullName = fullName;
    this.img = img;
    this.birthday = birthday;
    this.city = city;
    this.nation = nation;
    this.gender = gender;
    this.height = height;
    this.weight = weight;
    this.soThich = soThich;
    this.moTa = moTa;
    this.yeuCau = yeuCau;
  }
}
