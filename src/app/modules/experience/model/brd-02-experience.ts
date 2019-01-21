import { Experience } from './experience';

export class Brd02Experience implements Experience {
    
    getDescription(): string {
        return `Responsável por modelar e definir a restruturação dos softwares,
        visando o desacoplamento das camadas, focando na portabilidade para a migração de
        tecnologias legadas. Com os sistemas já implantados e utilizados por todo Estado de
        Santa Catarina, as migrações ocorrem de forma gradual, evitando mudanças drásticas
        nos sistemas, tanto para quem desenvolve quanto para o usuário final. Constante
        suporte na correção de bugs e novas funcionalidades. Conquistas alcançadas: migração
        dos projetos para serem compatíveis com o maven; implantação do: Jenkins para
        integração contínua, do Artifactory para evitar tráfego excessivo aos repositórios de
        bibliotecas da internet, do Sonar para avaliação e métricas da qualidade dos códigos de
        cada projeto e do Jasper Reports Server para a geração de relatórios; migração dos
        servidores de aplicação jBoss 5.1 para o Tomcat 7; implantação do cache de segundo
        nível do hibernate.`;
    }
    
    getStartDate(): Date {
        return new Date(2014, 0);
    }
    
    getEndDate(): Date {
        return new Date(2015, 6);
    }
    
    getCompanyName(): string {
        return 'Brasil Direct';
    }
    
    getPositionHeld(): string {
        return 'Analista de Sistemas';
    }

}