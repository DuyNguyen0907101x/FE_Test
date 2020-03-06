import { getUser1, getUser2 } from './service'
export const convertArrToObj = () => null;
export const convertObjToArr = () => null;

Promise.all([getUser1, getUser2]).then(res => {
  console.log(res)
});
export default class Human {
  constructor(name, age) {
    this.name = name
  };

}