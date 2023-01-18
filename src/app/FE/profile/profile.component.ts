import {Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {DetailAccount} from "../model/DetailAccount";
import {ProfileService} from "../../service/profileUser/profile.service";
import {Roles} from "../model/Roles";
import {LoginService} from "../../service/login/login.service";
import {EmployDTO} from "../model/DTO/EmployDTO";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize, first, pipe} from "rxjs";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnChanges {
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
    birthday: new Date(),
    joinDate: new Date(),
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
  arrayPicture: string[] = [];

  constructor(private profile: ProfileService, private loginService: LoginService, private storage: AngularFireStorage, private router: Router) {
  }

  userName = this.loginService.getUserName();
  token = this.loginService.getToken();
  img = this.loginService.getImg();

  ngOnChanges(changes: SimpleChanges): void {
    if (this.token != "") {
      // @ts-ignore
      document.getElementById("logout").hidden = false;
    }
    this.profile.showProfile().subscribe((data) => {
      this.userProfile = data;
      this.check(this.userProfile);
    })
  }

  ngOnInit(): void {
    if (this.token != "") {
      // @ts-ignore
      document.getElementById("logout").hidden = false;
    }
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

  // submit1() {
  //   for (let file of this.arrfiles) {
  //     if (file != null) {
  //       const filePath = file.name;
  //       const fileRef = this.storage.ref(filePath);
  //       this.storage.upload(filePath, file).snapshotChanges().pipe(
  //         finalize(() => (fileRef.getDownloadURL().subscribe(
  //           url => {
  //             this.img = url;
  //           })))
  //       ).subscribe();
  //     }
  //   }
  // }

  uploadFileImg() {
    for (const argument of this.avatarDom1?.nativeElement.files) {
      if (this.fileValidation(argument)) {
        this.arrfiles.push(argument)
      }
    }
    this.submit();
  }

  // @ts-ignore
  function // @ts-ignore
  fileValidation(argument: any) {
    var fileInput = argument;
    // @ts-ignore
    var filePath = fileInput.name;
    // Allowing file type
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if (!allowedExtensions.exec(filePath)) {
      alert('Chọn file đúng định dạng jpg, jpeg, png, gif');
      // @ts-ignore
      fileInput.value = '';
      return false;
    }
    return true;
  }


  showImg() {
    for (const argument of this.avatarDom1?.nativeElement.files) {
        this.arrfiles.push(argument)
    }
    var oFReader = new FileReader();
    // @ts-ignore
    oFReader.readAsDataURL(this.arrfiles[0]);

    oFReader.onload = function (oFREvent) {
      // @ts-ignore
      console.log(oFREvent.target.result)
      // @ts-ignore
      document.getElementById("uploadPreview").src = oFREvent.target.result;
    };
  }

  save(img: string) {
    this.profile.save(img).subscribe((data) => {
      // @ts-ignore
      this.userProfile = data;
    })
  }

  check(detailAccount: DetailAccount) {
    if (this.checkRoles(detailAccount.roles)) {
      // @ts-ignore
      document.getElementById("status").hidden = false;
      this.checkStatus(detailAccount.status)
    } else {
      // @ts-ignore
      document.getElementById("requestAdmin").hidden = false
      this.checkStatus(detailAccount.status)
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
      document.getElementById("status1").hidden = false;
      // @ts-ignore
      document.getElementById("requestAdmin1").hidden = false;
      // @ts-ignore
      document.getElementById("status2").hidden = true;
      // @ts-ignore
      document.getElementById("requestAdmin2").hidden = true;
      return;
    }
    if (status == 1) {
      // @ts-ignore
      document.getElementById("status2").hidden = false;
      // @ts-ignore
      document.getElementById("requestAdmin2").hidden = false;
      // @ts-ignore
      document.getElementById("status1").hidden = true;
      // @ts-ignore
      document.getElementById("requestAdmin1").hidden = true;
      return;
    }
  }

  logOut() {
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

  saveDetail() {
    this.profile.editProfile(this.userProfile).subscribe((data) => {
      this.userProfile = data;
    })
  }


  // @ts-ignore
  onInput(event) {
    localStorage.setItem("search", event.target.value)
    this.router.navigate(["/browse"]);
  }


  showLinkFace() {
    // @ts-ignore
    document.getElementById("face").hidden = true;

    // @ts-ignore
    document.getElementById("face1").hidden = false;
  }

  showMota() {
    // @ts-ignore
    document.getElementById("mota").hidden = true;
    // @ts-ignore
    document.getElementById("mota1").hidden = false;
  }

  showSoThich() {
    // @ts-ignore
    document.getElementById("sothich").hidden = true;
    // @ts-ignore
    document.getElementById("sothich1").hidden = false;
  }

  showYeuCau() {
    // @ts-ignore
    document.getElementById("yeuCau").hidden = true;
    // @ts-ignore
    document.getElementById("yeuCau1").hidden = false;
  }

  showDichVu() {
    // @ts-ignore
    document.getElementById("dichvu").hidden = true;
    // @ts-ignore
    document.getElementById("dichvu1").hidden = false;
  }

  // @ts-ignore
  hideDichVu(event) {
    // @ts-ignore
    document.getElementById("dichvu").hidden = false;

    // @ts-ignore
    document.getElementById("dichvu1").hidden = true;
    this.profile.editProfile(this.userProfile).subscribe((data) => {
      this.userProfile = data;
    })
  }

  // @ts-ignore
  hideFaceLink(event) {
    // @ts-ignore
    document.getElementById("face").hidden = false;

    // @ts-ignore
    document.getElementById("face1").hidden = true;
    this.profile.editProfile(this.userProfile).subscribe((data) => {
      this.userProfile = data;
    })
  }

  // @ts-ignore
  hideMoTa(event) {
    // @ts-ignore
    document.getElementById("mota").hidden = false;
    // @ts-ignore
    document.getElementById("mota1").hidden = true;
    this.profile.editProfile(this.userProfile).subscribe((data) => {
      this.userProfile = data;
    })
  }

  // @ts-ignore
  hideSoThich(event) {
    // @ts-ignore
    document.getElementById("sothich").hidden = false;
    // @ts-ignore
    document.getElementById("sothich1").hidden = true;
    this.profile.editProfile(this.userProfile).subscribe((data) => {
      this.userProfile = data;
    })
  }

  // @ts-ignore
  hideYeuCau(event) {
    // @ts-ignore
    document.getElementById("yeuCau").hidden = false;
    // @ts-ignore
    document.getElementById("yeuCau1").hidden = true;
    this.profile.editProfile(this.userProfile).subscribe((data) => {
      this.userProfile = data;
    })
  }
}
