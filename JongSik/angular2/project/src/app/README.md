# 서비스 생성법
` ng g s 서비스네임 `

1. app.module.ts에 서비스 선언이 필요하다.
  `import {서비스네임} from '서비스파일경로`
2. app.module.ts providers 속성에 서비스를 선언해준다.
  `providers:[서비스네임1, 서비스네임2]`
3. 사용하고자 하는 컴포넌트에서 서비스클래스 호출
  `import {서비스네임} from '서비스파일경로`

# 컴포넌트 생성법
` ng g c 컴포넌트네임 `
