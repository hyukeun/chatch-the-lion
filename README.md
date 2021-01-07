# PROJECT

## Typescript를 이용해서 만든 PROJECT 입니다.

<br/>

### 들어가기전에 어떻게 작업을 해야하는지에 대한것을 작성했습니다.

<details>

<summary>Set-up</summary>

1. 먼저 PROJECT SET-UP을 해야합니다.
2. PROJECT를 npm or yarn 을 사용하여 node.js 환경을 만들어 기본적인 package.json 환경을 만들어주었다.

```js
npm init -y 
```

3. node.js 및 typescript를 사용하기 위해서 parcel이라는 bundler를 사용할 것이다.

```js
npm i parcel-bundler -D
// Dependency : 의존성
```

4. 그 후 package.json에서 scripts부분에 추가해 준다.

```js
 "scripts": {
    "dev": "parcel index.html",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

5. index.html를 새로 만들어 body 안에 script 부분을 넣어 다음과 같이 작성해 준다. 이것은 Javascript로 컴파일 될 것인데 
parcel이라는 bundler가 알아서 다 해주게 된다. npm run dev를 입력하게 되면 개발서버가 자동으로 실행되며 ts라는 파일이 dist라는 폴더에 들어가게 되고 작성을 안한 기본파일만 있을 경우 기본적으로 parcel를 이용하는데 필요한 기본적인 내용들이 들어가 있는 파일이 보여지게 된다. 그 후 app.ts에서 console.log("hello world!")라고 console작성후 html로 작동을 확인해 보면 된다. 
```js
<body>
    <script src="./src/app.ts"></script>
</body>
```

</details>

<details>

<summary>Module</summary>

1. SET-UP이 완료되면 그 다음은 Module을 정리할 것이다.
2. src부분안에 type들을 정리한 것을 넣기위해 type.ts라는 것을 만들어 주었다.
3. interface를 이용하여 만들어 주었으며 export를 통해서 app.ts로 옮겨주고 import로 작성후 사용시 text는 string으로 설정한것만 사용가능하게 해 줄 수 있으며 만들어야 할 type들은 type.ts에서 만들어 주면 된다.

```ts
// type.ts
export interface Hello {
    text: string;
}
```

```ts
// app.ts
import {Hello} from './type';

const helloMessage : Hello = {
    text : 'hello world!'
}
```
- 여기서 사용되는 export와 import는 es6에서 사용되는 문법과 동일하다. 마찬가지로 user에 name을 만들어줘서 export로 접근할 수 있으며, export 사용시 특정한 변수, 이름, 상수, 함수, 클래스등 인터페이스들의 이름을 통해서 export할 수 있고 모든 모듈에서는 default로 사용된 export를 사용할 수 있다.

</details>
<br/>

___

<br/>

## Name : Catch the lion

<br/>

#### 추가적으로 bootstrap 사용했습니다.

```js
npm i bootstrap
```

-