import { Experience } from './experience';

export class Vhl02Experience implements Experience {
    
    getDescription(): string {
        return `Junto a equipe de desenvolvimento, fui responsável pelo back end
        dos produtos da empresa, meu maior desafio no pouco tempo que estive na empresa
        foi de ofuscar todo código java usando o framework ProGuard, além, de efetuar o
        desaclopamento do projeto em módulos utilizando o maven para a reutilização de
        diversas classes em comum em outros projetos que estavam por vir. Também tive a
        oportunidade de iniciar um projeto para a federação de cartórios utilizando SpringBoot
        com Angular`;
    }    
    
    getStartDate(): Date {
        return new Date(2017, 3);
    }

    getEndDate(): Date {
        return new Date(2017, 10);
    }

    getCompanyName(): string {
        return 'VHL Sistemas';
    }

    getPositionHeld(): string {
        return 'Analista de Sistemas';
    }

}