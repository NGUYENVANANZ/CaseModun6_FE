import {Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {DetailAccount} from "../model/DetailAccount";
import {ProfileService} from "../../service/profileUser/profile.service";
import {LoginService} from "../../service/login/login.service";
import {Roles} from "../model/Roles";
import {EmployDTO} from "../model/DTO/EmployDTO";
import {finalize} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {AdminService} from "../../service/Admin/admin.service";


@Component({
  selector: 'app-profile-admin',
  templateUrl: './profile-admin.component.html',
  styleUrls: ['./profile-admin.component.css']
})
export class ProfileAdminComponent implements OnInit, OnChanges{
  userProfile: DetailAccount = {
    id: 0,
    city: "",
    nation: "",
    gender: "",
    height: 0,
    weight: 0,
    soThich: "",
    moTa: "",
    yeuCau: "",
    fullName: "",
    birthday: new Date(1-1-1111),
    joinDate: new Date(1-1-1111),
    money: 0,
    img: "",
    imgs: [],
    provideds: [],
    comments: [],
    pricePerDay: 0,
    faceLink: "",
    status: 0,
    vip: 0,
    roles: []
  }
  history: EmployDTO[] = []
  @ViewChild('uploadFile1', {static: true}) public avatarDom1: ElementRef | undefined;
  arrfiles: any = [];

  constructor(private profile: ProfileService, private loginService: LoginService, private storage: AngularFireStorage,private adminService: AdminService) {
  }

  userName = this.loginService.getUserName();
  token = this.loginService.getToken();
  img = this.loginService.getImg();

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
    // if (this.token != "") {
    //   // @ts-ignore
    //   document.getElementById("logout").hidden = false
    // }
    this.profile.showProfile().subscribe((data) => {
      this.userProfile = data;
      this.check(this.userProfile);
    })
    this.profile.showHistory().subscribe((data) => {
      // @ts-ignore
      this.history = data;
    })
  }


  submit() {
    for (let file of this.arrfiles) {
      if (file != null) {
        const filePath = file.name;
        const fileRef = this.storage.ref(filePath);
        this.storage.upload(filePath, file).snapshotChanges().pipe(
          finalize(() => (fileRef.getDownloadURL().subscribe(
            url => {
              this.img = url;
              this.loginService.setImg(url);
              this.save(url);
            })))
        ).subscribe();
      }
    }
  }

  check(detailAccount: DetailAccount) {
    if (this.checkRoles(detailAccount.roles)) {
      // @ts-ignore
      document.getElementById("status").hidden = false;
      this.checkStatus(detailAccount.status)
    } else {
      // @ts-ignore
      document.getElementById("requestAdmin").hidden = false
    }
  }

  // @ts-ignore
  checkRoles(roles: Roles[]): boolean {
    let check = false;
    for (let i = 0; i < roles.length; i++) {
      if (roles[i].id == 3) {
        check = true;
      }
    }
    return check;
  }

  checkStatus(status: number) {
    if (status == 0) {
      // @ts-ignore
      document.getElementById("status1").innerText = "Offline";
      return;
    }
  }

// @ts-ignore
  function // @ts-ignore
  fileValidation(argument : any) {
    var fileInput = argument;
    // @ts-ignore
    var filePath = fileInput.name;
    // Allowing file type
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if (!allowedExtensions.exec(filePath)) {
      alert('Chọn file ảnh');
      // @ts-ignore
      fileInput.value = '';
      return false;
    }
    return true;
  }

  uploadFileImg() {
    for (const argument of this.avatarDom1?.nativeElement.files) {
      if (this.fileValidation(argument)){
        this.arrfiles.push(argument)
      }
    }
    this.submit();
  }

  save(img : string){
    this.profile.save(img).subscribe((data) => {
      // @ts-ignore
      this.userProfile = data;
    })
  }

  logOut(){
    this.loginService.logOut();
  }

  editProfile1() {
    this.profile.editProfile1().subscribe((data) => {
      this.userProfile = data;
      this.check(this.userProfile);
    })
  }

  editProfile2() {
    this.profile.editProfile2().subscribe((data) => {
      this.userProfile = data;
      this.check(this.userProfile);
    })
  }

  requsetAdmin1() {
    this.profile.requsetAdmin1().subscribe((data) => {
      this.userProfile = data;
      this.check(this.userProfile);
    })
  }

  requsetAdmin2() {
    this.profile.requsetAdmin2().subscribe((data) => {
      this.userProfile = data;
      this.check(this.userProfile);
    })
  }

}
