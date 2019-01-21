import { Experience } from './experience';

export class DigitroExperience implements Experience {
    
    getDescription(): string {
        return `Desenvolvimento e manutenção dos produtos da empresa utilizando as tecnologias GWT, GWTP, SMARTGWT e GXT.`;
    }
    
    getStartDate(): Date {
        return new Date(2015, 6);
    }
    
    getEndDate(): Date {
        return new Date(2014, 0);
    }
    
    getCompanyName(): string {
        return 'Dígitro Tecnologia';
    }
    
    getPositionHeld(): string {
        return 'Programador';
    }




}