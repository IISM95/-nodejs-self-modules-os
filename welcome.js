import os from 'os'
let func = (b) =>{
	return `привет, юзер. Вижу ты зашел с ${b}`
}
console.log(func(os.type()));
 export default func