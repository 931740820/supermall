import { request } from "./request.js";

export function getHomeMulitdata(){
	return request({
		url: '/home/multidata'
	})
}