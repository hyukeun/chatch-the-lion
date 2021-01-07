# Project : chatch-the-lion

## Typescript로 만들어진 Project 입니다.

<details>

<summary>Set-up<summary>

- project를 yarn or npm을 사용하여 node.js환경을 만들어주어 기본적인 package.json 환경을 만들어주었다.

```js
npm init -y 
```

- node.js 및 typescript를 사용하기 위해서 parson이라는 번들러를 사용할 것이다.

```js
npm i parcel-bundler -D
// Dependency : 의존성
```

- 그 후 package.json에서 scripts부분에 추가해 준다.

```js
 "scripts": {
    "dev": "parcel index.html",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
- 그 후 index.html를 새로 만들어 주며 body 부분안에 script부분을 넣어주고 scr 부분에 ./src/app.ts를 만들어준다.
- 다음과 같이 만든 것은 실제로 자바스크립트로 컴파일이 될 것인데 parcel이 알아서 다 해주게 된다.
-  npm run dev로 설정한 것으로 실행하게되면 개발서버가 자동으로 실행되고 ts라는 파일이 dist라는 폴더에 들어가게되고
- 작성을 안할시 기본적으로 나오게 되는데 이것은 parcel를 이용하는 데필요한 기본적인 내용들이 들어가있는 코드들이다.
- 그 후 app.ts에서 들어가서 hello world!라고 콘솔로그를 작성후 확인해 보면 나오는 것을 알 수 있다. 


-  그 다음으로 는 모듈을 정리 할 것이다. 
- src부분안에 type들을 정리한 것을 넣어준다. type.ts라는 것을 만들어 주었다.
- interface로 만들어주어서 만들어 준다. 
- 그 후 export를 통해서 app.ts로 옮겨주고 import로 작성후 text는 스트링으로 설정한것만 사용가능하게 해 줄 수 있다. 
- 그래서 만들어야할 type들을 type.ts에서 만들어 줄 것이다.
- 여기서 사용되는 export와 import는 es6에서 사용되는 문법과 동일하다.
- user에 이름에 접근할 수있다. export를 만들어줘서 
- export를 사용할 때 특정한 변수나 이름이 있거나 상수나 함수나 클래스들 혹은 인터페이스들을 이름을 통해서 익스포트할 수 있고
- 혹은 모든 모듈에서는 디폴트 익스폴트를 사용할 수 있다. 


</details>