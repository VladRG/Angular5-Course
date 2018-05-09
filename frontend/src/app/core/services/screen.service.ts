import { Injectable } from '@angular/core';

@Injectable()
export class ScreenService {

  screenType: ScreenType;

  constructor() {
    this.setType(window.innerWidth);
  }

  setType(width: number) {
    if (width > 1200) {
      this.screenType = ScreenType.DESKTOP;
    } else if (width > 768) {
      this.screenType = ScreenType.TABLET;
    } else {
      this.screenType = ScreenType.PHONE;
    }
  }

  isDesktopMode(): boolean {
    return this.screenType === ScreenType.DESKTOP;
  }

  isTabletMode(): boolean {
    return this.screenType === ScreenType.TABLET;
  }

  isPhoneMode(): boolean {
    return this.screenType === ScreenType.PHONE;
  }
}

export enum ScreenType {
  DESKTOP = 'desktop',
  TABLET = 'tablet',
  PHONE = 'phone'
}
