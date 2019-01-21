import { Experience } from './experience';

export class SuntechExperience implements Experience {
    
    getDescription(): string {

        return `Junto a equipe de desenvolvimento Java, sou responsável pela 
        manutenção dos produtos principais da empresa, tanto na correção de bugs como na 
        implementação de novas funcionalidades. Com um ano de empresa, tive a 
        oportunidade de iniciar dois projetos novos e a reestruturação de outro produto na 
        parte do front-end, com uma equipe da Verint sediada em Israel, também tive oportunidade de 
        trabalhar com tecnologias atuais tais como: Amazon Kinesis, SpringBoot, Angular, 
        Apache Avro.`;

    }
    
    getStartDate(): Date {
        return new Date(2017, 10);
    }
    
    getEndDate(): Date {
        return null;
    }
    
    getCompanyName(): string {
        return 'Suntech | Grupo Verint';
    }
    
    getPositionHeld(): string {
        return 'Analista de Sistemas';
    }




}