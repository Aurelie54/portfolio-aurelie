import { Component, OnInit, inject, signal } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { ProjetsService } from '../../services/projets.service';
import { Projet } from '../../interfaces/projet';
import { RouterLink } from '@angular/router';
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, TagModule, TabsModule, ButtonModule, MessageModule, BadgeModule, OverlayBadgeModule, AvatarModule, AnimateOnScrollModule, CardModule, DividerModule, FieldsetModule, CarouselModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  private projetService = inject(ProjetsService);
  projets = signal<Projet[]>([]);
  responsiveOptions: any[] | undefined;

  ngOnInit() {
    this.projetService.getProjets().then((data) => {
      this.projets.set(data.slice(0, 9));
    });
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

}

