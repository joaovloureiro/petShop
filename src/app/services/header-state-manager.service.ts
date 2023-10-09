import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderStateManagerService {
  private isDefaultSource = new BehaviorSubject(null);
  defaultHeader: any = this.isDefaultSource.asObservable();
  changeState(state: any) {
    this.isDefaultSource.next(state);
  }

  private scrollHeightSource = new BehaviorSubject(0);
  scrollHeight: any = this.scrollHeightSource.asObservable();
  private setScrollHeight(height: any) {
    this.scrollHeightSource.next(height);
  }

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('scroll', this.scroll, true);
    }
  }

  public topBannerHeight: number = 0;
  private scroll = (): void => {
    this.setScrollHeight(window.scrollY || 0);

    if (
      window.scrollY >= this.topBannerHeight - 80 &&
      window.scrollY <= this.topBannerHeight + 200
    ) {
      this.changeState(false);
    } else if (window.scrollY < this.topBannerHeight - 80) {
      this.changeState(true);
    }
  };

  private selectedTabSource = new BehaviorSubject(null);
  selectedTab: any = this.selectedTabSource.asObservable();
  public setSelectedTab(selected: any) {
    this.selectedTabSource.next(selected);
  }
}
