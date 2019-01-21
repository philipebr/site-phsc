import { Component, OnInit } from '@angular/core';
import { Experience } from './model/experience';
import { ExperienceService } from './service/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.sass']
})
export class ExperienceComponent implements OnInit {

  private experiences: Experience[];

  constructor(private experienceService: ExperienceService) { }

  ngOnInit() {

    this.experiences = this.experienceService.getExperiences();

  }

}
