# Todo List

원티드 프리온보딩 프론트엔드 사전과제였던 Todo List를 리액트로 구현해보았습니다.

과제 내용 : https://github.com/walking-sunset/selection-task

---

### 배포 링크
[ 클릭하시면 배포 링크로 이동합니다 ](https://todolist-alwayssingyo.vercel.app/)

---

### STACKS
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white"> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"/> <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">


---

### 프로젝트 실행
```
npm install
npm start
```

---

### 폴더 구조

```
📦 src
┣ 📂 api
┃ ┗ 📜 request.js
┣ 📂 components
┃ ┣ 📂 Auth
┃ ┃ ┗ 📜 AuthForm.js
┃ ┗ 📂 Todos
┃   ┣ 📜 TodoItem.js
┃   ┗ 📜 TodoList.js
┣ 📂 fonts
┃ ┗ 📜 …
┣ 📂 pages
┃ ┣ 📜 index.js
┃ ┣ 📜 Login.js
┃ ┣ 📜 NotFound.js
┃ ┗ 📜 Todo.js
┣ 📜 App.js
┣ 📜 App.scss
┗ 📜 index.js
```

---

###  ✅ 기능 구현 체크리스트

### 1. 로그인 / 회원가입

- [x] `/` 경로에 로그인 / 회원가입 기능을 개발해주세요

Assignment1
- [x] 이메일과 비밀번호의 유효성 검사기능을 구현해주세요
- [x] 이메일 조건: `@` 포함
- [x] 비밀번호 조건: 8자 이상
- [x] 입력된 이메일과 비밀번호가 위 조건을 만족할 때만 버튼이 활성화 되도록 해주세요

Assignment2
- [x] 로그인 API를 호출하고, 올바른 응답을 받았을 때 `/todo` 경로로 이동해주세요
- [x] 응답받은 JWT는 로컬 스토리지에 저장해주세요

Assignment3
- [x] 로컬 스토리지에 토큰이 있는 상태로 `/` 페이지에 접속한다면 `/todo` 경로로 리다이렉트 시켜주세요
- [x] 로컬 스토리지에 토큰이 없는 상태로 `/todo`페이지에 접속한다면 `/` 경로로 리다이렉트 시켜주세요

### 2. 투두 리스트

Assignment4
- [x] `/todo`경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요
- [x] 리스트 페이지에는 투두 리스트의 내용과 완료 여부가 표시되어야 합니다.
- [x] 리스트 페이지에는 입력창과 추가 버튼이 있고, 추가 버튼을 누르면 입력창의 내용이 새로운 투두 리스트로 추가되도록 해주세요

Assignment5
- [x] 투두 리스트의 수정, 삭제 기능을 구현해주세요
- [x] 투두 리스트의 개별 아이템 우측에 수정버튼이 존재하고 해당 버튼을 누르면 수정모드가 활성화되고 투두 리스트의 내용을 수정할 수 있도록 해주세요
- [x] 수정모드에서는 개별 아이템의 우측에 제출버튼과 취소버튼이 표시되며 해당 버튼을 통해서 수정 내용을 제출하거나 수정을 취소할 수 있도록 해주세요
- [x] 투두 리스트의 개별 아이템 우측에 삭제버튼이 존재하고 해당 버튼을 누르면 투두 리스트가 삭제되도록 해주세요
