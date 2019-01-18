## Sample Project (Feat. 제안서)
제안서 작업등 간단한 project시 SCSS를 사용하여 개발할 수 있습니다.

## Install Node
[node.js](https://nodejs.org/en/) 를 먼저 설치 해주세요

## Clone
프로젝트를 clone하여 local repo를 생성합니다
```
git clone http://~
```

## 의존성 모듈 설치
clone한 repo로 이동하여 node module을 설치합니다
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
경우에 따라 바꿔서 사용할 수 있음

## Tip
VS Code의 [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) 와 함께 사용할 것을 권장합니다

## Bug
위 gulp 실행 단계에서 Task function~ 오류가 난다면 
```
gulp -v
```
통해 gulp-cli 버전을 확인해주세요<br>
v3.0.0 이상의 cli에서 실행 오류를 확인했습니다<br>
실행 오류가 발생한다면
```
npm install gulp-cli --global
```
위 명령어로 gulp-cli를 전역으로 새로 설치해주세요

## 기능 개선
시간이 날때마다 있으면 좋을법한 기능을 하나씩 붙여볼 예정입니다(기약없음)
