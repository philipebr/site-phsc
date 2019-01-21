import { Experience } from './experience';

export class Vhl01Experience implements Experience {
    
    getDescription(): string {
        return `Responsável por definir a estrutura, a tecnologia e os testes de
        back e front-end, integrando o build do projeto com o Maven junto ao Sonar para
        avaliação e métricas da qualidade dos códigos, além da utilização do plugin Cobertura
        para auxiliar a equipe de desenvolvimento ao gerar o build local com a criação de novos
        testes`;
    }
    
    getStartDate(): Date {
        return new Date(2015, 7);
    }
    
    getEndDate(): Date {
        return new Date(2015, 10);
    }
    
    getCompanyName(): string {
        return 'VHL Sistemas';
    }
    
    getPositionHeld(): string {
        return 'Consultor';
    }
    
}