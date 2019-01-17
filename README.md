## Sample Project (Feat. 제안서용)
제안서 작업등 간단한 project시 유용한 sass 개발 환경을 만들었습니다

## 의존성 모듈 설치
```
npm install
```

## 실행
```
gulp
```
또는
```
gulp dev
```

## 파일 구조
기본적으로 **./project/src** 와 **./project/html**에서만 작업을 진행합니다<br>
버전관리 또한 두 폴더만 관리합니다.<br>
병합된 css파일은 **./project/dist/css** 에 저장되며 이는 버전관리 대상이 아닙니다.

## Rule
각 html은 한개의 css만을 import 하여 사용합니다(dist/app.css로 설정한상태)
경우에 따라 바꿔서 사용할수 

## Tip
VS Code의 [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) 를 함께 사용할 것을 권장합니다.

## 기능 개선
시간이 날때마다 있으면 좋을법한 기능을 하나씩 붙여볼 예정입니다(기약없음)
