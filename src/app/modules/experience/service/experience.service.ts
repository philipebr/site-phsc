import { Injectable } from '@angular/core';
import { Experience } from '../model/experience';
import { SuntechExperience } from '../model/suntech-experience';
import { Vhl02Experience } from '../model/vhl-02-experience';
import { ProgicExperience } from '../model/progic-experience';
import { Vhl01Experience } from '../model/vhl-01-experience';
import { Brd02Experience } from '../model/brd-02-experience';
import { DigitroExperience } from '../model/digitro-experience';
import { Brd1Experience } from '../model/brd-01-experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor() { }

  getExperiences(): Experience[] {
    
    let experiences: Experience[] = [];

    experiences.push(new SuntechExperience());
    experiences.push(new Vhl02Experience());
    experiences.push(new ProgicExperience());
    experiences.push(new Vhl01Experience());
    experiences.push(new Brd02Experience());
    experiences.push(new DigitroExperience());
    experiences.push(new Brd1Experience());
    
    return experiences;
  }

}
