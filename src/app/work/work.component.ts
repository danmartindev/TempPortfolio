import { Component, OnInit } from '@angular/core';
import { fadeIn, fadeList } from '../animations';

export interface workTile {
  title: string;
  subTitle: string;
  link?: string;
  linkText?: string;
  link2?: string;
  linkText2?: string;
  chips: String[];
  image?: string;
  text: string;
}

@Component({
  selector: 'work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
  animations: [
    fadeIn,
    fadeList
  ]
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
            <br>
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
    {title: "Social Media Stopwatch", subTitle:"Chrome Exstension", link: "https://github.com/danmartindev/SocialStopwatch", linkText: "The code", 
    link2: "https://chrome.google.com/webstore/detail/social-media-stopwatch/fahoaamoeaejjidplpjhgmaggphgnaig", linkText2: "Try it!",
    chips: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Chrome APIs'], image:"../assets/soc_stop128.png",
      text: `This is a Google Chrome extension that I developed for a friend. It utilizes the Chrome alarms, 
      tabs, and local storage APIs to set timers(alarms) based on your open tabs, to help you better manage your 
      time usage of social media and other distracting sites. 
      <br>
      <br>
      Timers can be set manually with the user choosing the tab by URL and setting the how long they want to
       spend on the site. Timers can also be set automatically based on the URL. These URLs can be set by the 
      user in the options page.
      <br>
      <br>
      You can check out the code or download it to try for yourself in the links down below.`
    },
  ];

}
