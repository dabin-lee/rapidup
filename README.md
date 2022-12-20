# rapid 과제

## ✔ 디렉토리 구조

```
📦src
┣ 📂atom
┃ ┗ 📜state.ataom.js
┣ 📂components
┃ ┣ 📜itemModal.tsx
┃ ┣ 📜ProductItem.tsx
┃ ┗ 📜ProductsDetails.tsx
┣ 📂hooks
┃ ┣ 📜axios.js
┃ ┣ 📜requests.js
┃ ┗ 📜useFetchData.js
┣ 📂pages
┃ ┣ 📜login.tsx
┃ ┗ 📜main.tsx
┣ 📂utils
┃ ┗ 📜auth.js
┣ 📜App.tsx
┣ 📜index.css
┗ 📜index.tsx
```

## ✔ 사용 라이브러리

```
typescript, javascript
Axios , react-query, react-router-dom, recoil, rxjs
tailwindcss, ant-design
```

## ✔ 설치

```
$ npm i
$ npm run start
```


## ✔ 기능

```
✅ 1. 로그인하기
  - 로그인 성공 시 access_token 토큰이 반환

✅ 2. 목록 불러오기

✅ 3. 목록에서 바로 상품명 수정할 수 있게 구현하기
    - 상품명 수정 시 1초 딜레이 후 상품 업데이트 API 요청
    - 상품명 수정 시 다른 상품 리렌더링되지 않게 하기

✅ 4. 상품 편집
    - 상품 편집 버튼을 누르면 상품명을 수정할 수 있는 팝업
    - (모달) 수정버튼을 누르면 업데이트 API를 요청
    - 팝업 닫히고 상품명이 반영
    - 수정한 상품만 리렌더링
```


### 미해결 부분

<img width="342" alt="errImg" src="https://user-images.githubusercontent.com/57528886/208594322-b57163e1-fede-4a1b-ae8b-4d16899c89a8.png">

```
- client state
  - 구현내용 3번)
    - 상품명 클릭 시 전체 목록의 input이 열림
    - 상품명 업데이트 후 input창 => 목록으로 변경
```
