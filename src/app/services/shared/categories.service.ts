import {Injectable} from '@angular/core';
import {ApiService} from '../api.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Route} from '../../shared/util/route';
import {Cacheable, CacheBuster} from 'ngx-cacheable';
import {Subject} from 'rxjs';

const cacheBuster$ = new Subject<void>();

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private apiService: ApiService) {
  }

  @Cacheable({
    cacheBusterObserver: cacheBuster$
  })
  getAll(): Observable<any> {
    return this.apiService.get(Route.CATEGORY.CATEGORIES + Route.CATEGORY.GET_ALL).pipe(map(
      res => {
        if (res) {
          return res;
        } else {
          return {};
        }
      }
    ));
  }


}
