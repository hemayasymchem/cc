import { Component, Input, ViewEncapsulation, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageCropperComponent, CropperSettings, Bounds } from 'ng2-img-cropper';

/**
 * 确认框
 */
@Component({
    selector: 'avatar-cropper',
    templateUrl: './avatar-cropper.component.html',
    encapsulation: ViewEncapsulation.None
})
export class AvatarCropperComponent {

    //头像
    avatar: any;
    //头像裁剪配置
    avatarSettings: CropperSettings;
    //头像裁剪元素
    @ViewChild('avatarCropper', undefined)
    avatarCropper: ImageCropperComponent;

    constructor(public activeModal: NgbActiveModal) {
        //头像裁剪配置
        this.avatarSettings = new CropperSettings();
        this.avatarSettings.noFileInput = true;
        this.avatarSettings.width = 120;
        this.avatarSettings.height = 120;
        this.avatarSettings.croppedWidth = 120;
        this.avatarSettings.croppedHeight = 120;
        this.avatarSettings.canvasWidth = 550;
        this.avatarSettings.canvasHeight = 380;
        this.avatarSettings.minWidth = 100;
        this.avatarSettings.minHeight = 100;
        this.avatarSettings.cropperDrawSettings.strokeWidth = 2;
        this.avatarSettings.rounded = true;
        this.avatar = {};
    }

    /**
     * 文件选择
     * @param   
     */
    fileChangeListener($event) {
        let image: any = new Image();
        let file: File = $event.target.files[0];
        let myReader: FileReader = new FileReader();
        let that = this;
        myReader.onloadend = function (loadEvent: any) {
            image.src = loadEvent.target.result;
            that.avatarCropper.setImage(image);
        };

        myReader.readAsDataURL(file);
    }

    /**
     * 上传
     */
    upload() {
        console.info(this.avatar.image);
    }

    /**
       * 关闭
       */
    close(): void {
        this.activeModal.dismiss({ status: 'closed' });
    }


}
