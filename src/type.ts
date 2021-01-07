export interface Hello {
    text: string;
}

export const user = {
    name: 'user1'
}

// 익스폴트 디폴트로 특정한 객체 혹은 값 문자열 뭐 프리타입에 어떠한 값 혹은 클래스
// 사실은 클래스 자체로 들어가기 때문에 이름 자체로는 사용을 안해줘도 된다.

// export default {

// }

// export default class  {

// }

// 하지만 저희가 에이라는 클래스를 디폴트하지않고 하면 이름자체에 a가 의미가 있어지는 것이다. 
// 이 디폴트라는 한가지만 모듈에서 사용할 수 있게 되는 것이다. 
// 이게 인터페이스도 되고 클래스 뭐 함수 다 된다. 

// export default class A {
//     a() {

//     }
// }
// 라고 하고 뒤에 class a라고 작성하면 가져오기가 가능하다
// 하지만 하나 더 말들게 되면 디폴트는 하나만 작성이 가능하므로 사용이 되질 않는다. 


type d = Hello & { hi(): void }

export default d;