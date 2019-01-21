import { Experience } from './experience';

export class ProgicExperience implements Experience {
    
    getDescription(): string {
        return `Responsável por efetuar a manutenção em softwares flash e 
        action script. Participação na migração do software legado da empresa para Android e 
        Windows utilizando C++, nas partes de definição da estrutura e codificação do projeto.`;
    }
    
    getStartDate(): Date {
        return new Date(2015, 11);
    }
    
    getEndDate(): Date {
        return new Date(2016, 11);
    }
    
    getCompanyName(): string {
        return 'Progic';
    }
    
    getPositionHeld(): string {
        return 'Analista de Sistemas';
    }

}