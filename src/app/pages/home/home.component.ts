import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import Aos from 'aos';
import { HeaderStateManagerService } from 'src/app/services/header-state-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: any,
    private headerManager: HeaderStateManagerService
  ) {}

  ngOnInit(): void {
    Aos.init({ once: true });

    // this.getHeight();
  }

  /* getHeight() {
     this.headerManager.scrollHeight.subscribe((resp: any) => {
      if (
        resp >= this.custoBeneficioElementTop &&
        resp <= this.custoBeneficioElementBottom &&
        this.document.body.offsetWidth >= 991
      ) {
        this.changeCustoBeneficioBackground(resp);
      }

      if (
        resp > this.bankingServicesElementTop - 80 &&
        resp < this.bankingServicesElementBottom - 100
      ) {
        this.headerManager.changeState(true);
      } else if (
        resp >= this.bankingServicesElementBottom - 100 ||
        (resp < this.bankingServicesElementTop &&
          resp > this.bankingServicesElementTop - 200)
      ) {
        this.headerManager.changeState(false);
      }
    });
  } */

  ngAfterViewInit(): void {
    const bannerHeight = this.document.getElementById('banner-top');
    this.headerManager.topBannerHeight = bannerHeight?.offsetHeight || 0;

    console.log(bannerHeight?.offsetHeight);
  }
}
