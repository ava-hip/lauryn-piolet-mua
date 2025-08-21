import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Project } from '../common/models/projects';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private projectData = 'assets/data/projects.json';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectData);
  }

  getProjectBySlug(slug: string): Observable<Project | undefined> {
    return this.http.get<Project[]>(this.projectData).pipe(
      map((projects) => projects.find((p) => p.slug === slug))
    );
  }

  getProjectByCategory(category: string): Observable<Project[]> {
  return this.http.get<Project[]>(this.projectData).pipe(
    map(projects => projects.filter(p => p.category === category))
  );
}
}