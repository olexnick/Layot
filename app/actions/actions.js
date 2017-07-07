import history from "../utils/history.js";

export function ShoweHiden(val){
  return {
  	type: "select/about",
  	payload: {
  		tab: val
  	}
  }
}
