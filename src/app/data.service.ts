import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  async axiosGlobalFn(url: any, method: any, data: any, id: any) {
    const self = this;
    var token = localStorage.getItem('vlc_user_token');
    let usersAuthStatus = await this.checkUserAuth();
    const configs = {
      url: `${environment.apiUrl}/${url}`,
      method,
      data,
      params: id,
      headers: { 'x-access-token': token },
    };
    try {
      let foreignData = null;
      foreignData = await axios(configs);
      if (foreignData) {
        return (foreignData.data);
      } else {

      }
    } catch (error) {
      if (error.response.data.message === 'Invalid Token') {
        return error.response;
      } else {
        return error.response;
      }
    }
  }

  async checkUserAuth() {
    var user_token = localStorage.getItem('vlc_user_token');
    if ((user_token !== undefined) && (user_token !== null)) {

      return true;

    } else {
      return false;
    }
  }

  //Login functionality

  async customerLogin(url: any, method: any, data: any, id: any) {
    const self = this;
    const configs = {
      url: `${environment.apiUrl}/${url}`,
      method,
      data,
      params: id,
     
    };
    try {
      let foreignData = null;
      foreignData = await axios(configs);
      if (foreignData) {
        // console.log(foreignData)
        return (foreignData.data);
      } else {

      }
    } catch (error) {
      if (error.response.data.message === 'Invalid Token') {
        return error.response;
      } else {
        return error.response;
      }
    }
  }
}
