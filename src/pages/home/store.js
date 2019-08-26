import { observable, computed, action, runInAction } from 'mobx'



export default class HomeStore {
  @observable count = 0;
}