import { hoverSlide, fadeUp, fadeOut, colorTest } from './../animations';
import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    hoverSlide,
    fadeUp,
    fadeOut,
    colorTest
  ]
})


export class HomeComponent {

  categories = [
    {title:'Languages', skills:['JavaScript', 'CSS', 'HTML', 'PHP', 'Swift', 'TypeScript', 'C#', 'Java', 'SASS']},
    {title:'Tools + Environments', skills:['jQuery', 'Angular', 'Wordpress', 'MySQL', 'Node', 'Bootstrap','Git', 'XCode', 'Unity', 'AJAX', 'REST APIs', 'JSON']},
    {title:'Other Skills', skills:['Photoshop', 'Adobe Illustrator', 'Web Design', 'Game Design']},
  ]

  // links = [
  //   {
  //     id: 0,
  //     title: 'About',
  //     linkTo: '/about',
  //     isHovered: false,
  //     info: `Hi! I'm Dan and I'm a front end developer. 
  //       I mainly focus on web and mobile development, 
  //       but have experience with game development. 
  //       I also like to work in game design. 
  //       My hobbies include video/board games, anime, and movies/TV.`
  //   }, 
  //   // {
  //   //   id: 1,
  //   //   title: 'Projects',
  //   //   linkTo: '/work',
  //   //   isHovered: false,
  //   //   info: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"'
  //   // },  
  //   {
  //     id: 1,
  //     title: 'Resume',
  //     linkTo: '/about',
  //     isHovered: false,
  //   },  
  //   {
  //     id: 2,
  //     title: 'Experience',
  //     linkTo: '/work',
  //     isHovered: false,
  //     info: `My professional experience includes a mixture of co-ops, contract work, and freelance projects.
  //           This includes work on an NIH grant medical research iOS app and a number of websites made with various 
  //           languages and environments.`
  //   } 
  // ]; 

  // activeInfo = 0;
  // infoText = this.links[0].info;
  // loading = false;

  // showInfo(id){
  //   this.activeInfo = id;
  //   if(this.links[id].info){
  //     this.infoText = this.links[id].info;
  //   }
  //   this.linkHover(id);
  // }

  // linkHover(id){
  //   this.links[id].isHovered = !this.links[id].isHovered;
  // }
}
