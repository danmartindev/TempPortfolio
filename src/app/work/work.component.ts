import { Component, OnInit } from '@angular/core';

export interface workTile {
  title: string;
  subTitle: string;
  link?: string;
  linkText?: string;
  chips: String[];
  image?: string;
  text: string;
}

@Component({
  selector: 'work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  workTiles: workTile[] = [
    {title: "African Heritage Food Co-op", subTitle:"Wordpress Development", link: "https://myahfc.com/community/", linkText: "Visit the Site",
    chips: ['Wordpress', 'PHP', 'HTML', 'CSS', 'JavaScript'], image:"../assets/AHFC.png",
      text: `This freelance project had me working with designer/developer to develop a new website for a Buffalo based non-profit. 
            A majority of my time was spent working on the community section of the site. This implements a couple of plugins which we 
            lightly customized for user accounts, and also some custom PHP to allow for user submitted posts and comments. `
    },
    {title: "NIH CAMAFib", subTitle:"iOS Development", 
      chips: ['iOS', 'XCode', 'Mobile'],
      text: `This co-op had me working as an iOS developer on an NIH Grant project between RIT and the University of Rochester. 
            The goal of the project was to detect atrial fibrillation, irregular heart rhythms, through a video feed. 
            I worked as the iOS developer on a team including myself, a data analyst, and an android developer. 
            The end product of my time at this position was an app that on the front-end had a number of built in browser “apps” that 
            the user could browse, while in the background, videos were periodically recorded through the front facing camera. 
            These videos would have the RGB data of each frame extracted, the data sent to a firebase database, and then the video would be deleted for the user's privacy.`
    },
    {title: "Personalized Healthcare Technology", subTitle:"Wordpress Development", 
      chips: ['Wordpress', 'PHP', 'HTML', 'CSS'],
      text: `For this co-op I worked as a general web developer for the members of PHT, a group tied to the research and application 
      of healthcare technologies. Most of my work involved the development of Wordpress sites and plugins. 
      I was also responsible for some of the design work for the sites and instructing the members of PHT on how to update their 
      sites for themselves. `
    },
  ];

  projTiles: workTile[] = [
    {title: "African Heritage Food Co-op", subTitle:"Wordpress Development", 
    chips: ['Wordpress', 'PHP', 'HTML', 'CSS', 'JavaScript'], image:"../assets/AHFC.png",
      text: `Worked as a freelance web developer with a partner to design and develop a Wordpress site for a Buffalo based non-profit. 
            Most of my time was spent working on the community portion of the site.`
    },
  ];

}
