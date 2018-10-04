import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


const API_URL = 'https://api.angularbootcamp.com';

interface Video {
  title: string;
  author: string;
}

 @Component({
  selector: 'cg-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  videoList: Video [] = [];

  constructor(http: HttpClient) {
    http
      .get<Video[]>(API_URL + './videos')
      .subscribe(videos => this.videoList = videos); /*call back function*/
  }

  ngOnInit() {
  }

}
