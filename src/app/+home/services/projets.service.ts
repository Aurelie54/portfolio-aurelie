import { Injectable } from '@angular/core';
import { Projet } from '../interfaces/projet';

@Injectable({
    providedIn: 'root'
})
export class ProjetsService {

    private projets: Projet[] = [
        {
            id: 1,
            name: 'Site de gestion d un annuaire d entreprise',
            image: 'projet-annuaire.jpg',
            description: 'Boutique en ligne avec panier et gestion des commandes.',
            technologies: ['Angular', 'Spring Boot', 'MySQL'],
            github: 'https://github.com/votre-compte/ecommerce',
            demo: 'https://ecommerce-demo.com'
        },
        {
            id: 2,
            name: 'Application de gestion de tournois',
            image: 'projet-tournois.jpg',
            description: 'Organisation de tâches avec catégories et priorités.',
            technologies: ['Angular', 'Node.js', 'MongoDB'],
            github: 'https://github.com/votre-compte/todo-app',
            demo: 'https://todo-demo.com'
        },
        {
            id: 3,
            name: 'Portfolio développeuse',
            image: 'portfolio.jpg',
            description: 'Présentation de mes compétences et réalisations.',
            technologies: ['Angular', 'PrimeNG', 'CSS'],
            github: 'https://github.com/votre-compte/portfolio',
            demo: 'https://portfolio-demo.com'
        },
        {
            id: 4,
            name: 'Site de réservation de voyages',
            image: 'travel.jpg',
            description: 'Recherche et réservation de séjours.',
            technologies: ['Angular', '.NET', 'SQL Server'],
            github: 'https://github.com/votre-compte/travel-app',
            demo: 'https://travel-demo.com'
        }
    ];

    getProjets(): Promise<Projet[]> {
        return Promise.resolve(this.projets);
    }
}