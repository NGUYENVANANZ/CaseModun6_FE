import {Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {DetailAccount} from "../model/DetailAccount";
import {ProfileService} from "../../service/profileUser/profile.service";
import {Roles} from "../model/Roles";
import {LoginService} from "../../service/login/login.service";
import {EmployDTO} from "../model/DTO/EmployDTO";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize, first, pipe} from "rxjs";
import {Router} from "@angular/router";
import Swal from "sweetalert2";
import {SocketService} from "../../service/Socket/socketService";
import {NotificationDTO} from "../model/DTO/NotificationDTO";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Img} from "../model/Img";


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
  stompClient: any
  hihi: Comment[] = []
  history: EmployDTO[] = []
  notificationCheck !: NotificationDTO;

  S: number = 1
  imgX: Img[] = []
  // @ts-ignore
  xxx: Img = {
    img: "https://images.pexels.com/photos/127160/pexels-photo-127160.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  }
  @ViewChild('uploadFile1', {static: true}) public avatarDom1: ElementRef | undefined;

  arrfiles: any = [];
  arrayPicture: string[] = [];

  constructor(private profile: ProfileService, private loginService: LoginService, private storage: AngularFireStorage, private router: Router, private socket: SocketService) {
    this.stompClient = socket.stompClient
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
      if (data.imgs.length != 0) {
        this.imgX = data.imgs;
      } else {
        this.imgX.push(this.xxx);
        this.imgX.push(this.xxx);
        this.imgX.push(this.xxx);
      }
      this.check(this.userProfile);
    })
    this.profile.showHistory().subscribe((data) => {
      // @ts-ignore
      this.history = data;
    })
    this.moneyBack()
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
              this.arrfiles = [];
              Swal.fire({
                toast: true,
                position: 'top',
                showConfirmButton: false,
                icon: "success",
                timer: 5000,
                title: 'upLoad thành công'
              })
            })))
        ).subscribe();
      }
    }
  }

  submit2() {
    let index = 0;
    for (let file of this.arrfiles) {
      if (file != null) {
        const filePath = file.name;
        const fileRef = this.storage.ref(filePath);
        this.storage.upload(filePath, file).snapshotChanges().pipe(
          finalize(() => (fileRef.getDownloadURL().subscribe(
            url => {
              console.log(url)
              this.imgX[index].img = url
              this.saveImg(this.imgX[index])
              index++;
            })))
        ).subscribe();
      }
    }

    this.arrfiles = [];
    Swal.fire({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      icon: "success",
      timer: 5000,
      title: 'upLoad thành công1'
    })
  }

  moneyBack() {
    let url = '/topic/' + this.userName;
    const _this = this;
    this.stompClient.subscribe(url, function (notification: any) {
      console.log(JSON.parse(notification.body));
      _this.notificationCheck = JSON.parse(notification.body);
      if (_this.notificationCheck.status == 6) {
        _this.userProfile.money = _this.userProfile.money + _this.notificationCheck.money;
        Swal.fire({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          icon: "success",
          timer: 5000,
          title: '+' + _this.notificationCheck.money + '$'
        })
      }

    });
  }

  uploadFileImg() {
    for (const argument of this.avatarDom1?.nativeElement.files) {
      if (this.fileValidation(argument)) {
        this.arrfiles.push(argument)
      }
    }
    if (this.arrfiles.length < 2) {
      this.submit();
    } else {
      this.submit2();
    }

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
      Swal.fire({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        icon: "info",
        timerProgressBar: true,
        timer: 5000,
        title: 'Chọn file đúng định dạng jpg, jpeg, png, gif'
      })
      fileInput.value = '';
      return false;
    }
    return true;
  }


  showImg() {
    for (const argument of this.avatarDom1?.nativeElement.files) {
      this.arrfiles.push(argument)
    }

    if (this.arrfiles.length == 1) {
      var oFReader = new FileReader();
      oFReader.readAsDataURL(this.arrfiles[0]);
      oFReader.onload = function (oFREvent) {
        // @ts-ignore
        console.log(oFREvent.target.result)
        // @ts-ignore
        document.getElementById("uploadPreview").src = oFREvent.target.result;
      };
      this.arrfiles = [];
    } else {
      if (this.arrfiles.length > 4) {
        Swal.fire({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          icon: "info",
          timerProgressBar: true,
          timer: 5000,
          title: 'Chọn 1-3 ảnh'
        })
        this.arrfiles = [];
      } else {
        for (let i = 0; i < 3; i++) {
          oFReader = new FileReader();
          oFReader.readAsDataURL(this.arrfiles[i]);
          oFReader.onload = function (oFREvent) {
            // @ts-ignore
            console.log(oFREvent.target.result)
            let id = "uploadPreview" + i
            console.log(id)
            // @ts-ignore
            document.getElementById(id).src = oFREvent.target.result;
          }
        }
        this.arrfiles = [];

      }
    }
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
      // @ts-ignore
      document.getElementById("price").hidden = false;
      // @ts-ignore
      document.getElementById("provideds").hidden = false;
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

  saveImg(img: Img) {
    this.profile.saveImage(img).subscribe((data) => {
      this.userProfile = data;
    })
  }
}
