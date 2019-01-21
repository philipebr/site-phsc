import { Experience } from './experience';

export class Brd1Experience implements Experience {
    
    getDescription(): string {
        return `Desenvolvimento e manutenção das aplicações web da empresa, utilizando a tecnologia java e seus frameworks, tais como: iReport, Hibernate, JSF, Richfaces, JBoss, HTML, CSS, Postgresql e Oracle. Responsável pela criação de alguns módulos no projeto BRD Ambiental, tais como: protocolo, fiscalização e pela atualização dos módulos de licenciamento e arquivo. Também responsável por parte do desenvolvimento do módulo web do sistema de licenciamento ambiental da FATMA, o SinFAT Web, para a geração de captchas e de vídeos na página principal; além de dar apoio quando necessário para correção de bugs no sistema de licenciamento da FATMA, o SinFAT2.`;
    }
    
    getStartDate(): Date {
        return new Date(2011, 7);
    }

    getEndDate(): Date {
        return new Date(2012, 7);
    }

    getCompanyName(): string {
        return 'Brasil Direct';
    }

    getPositionHeld(): string {
        return 'Programador Java';
    }

}