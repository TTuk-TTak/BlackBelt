<div align="center">
  <img src="https://github.com/black-belt/black-belt/blob/main/README.assets/logo.png?raw=true"/>
  <br />
	<br />

  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
  <img src="https://img.shields.io/badge/recoil-764ABC?style=for-the-badge&logo=react&logoColor=white"> 
  <img src="https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white"> 
  <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
  <img src="https://img.shields.io/badge/socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white">
  <br />

  <img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"> 
  <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> 
  <img src="https://img.shields.io/badge/nginx-009639?style=for-the-badge&logo=nginx&logoColor=white"> 
  <img src="https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"> 
</div>



## 소개

> 우리문화 `태권도`를 세계에 홍보하기 위한 웹 기반 `AI 체험형 콘텐츠` 서비스, `Black Belt: Master of Taekwondo`
> </br>



집에서 쉽고 재미있게 태권도를 학습할 수 있습니다.    
AI pose detection 기술이 올바른 태권도 동작을 학습할 수 있도록 도와줍니다.    
충분한 연습 후에는 국기원과 동일한 방식으로 심사를 받아 보세요. 심사에 통과하면 단증을 획득합니다.     
겨루기 기능을 통해 상대와 1:1로 배틀을 진행하여 승패를 가릴 수도 있습니다         

**태권도 짱이 되고 싶다면 지금부터 BlackBelt로 수련을 시작하세요!**    

<br>



## 목차

[1. 개요](#개요)

[2. 주요 기능](#주요-기능)

[3. 기술스택](#기술-스택)

​	[3-1. Front-end](#🎨-FrontEnd)

​	[3-2. Back-end](#📊-BackEnd)

​	[3-3. AI](#💻-AI)

[4. 멤버소개](#멤버-소개)

<br>



## 개요  
* 프로젝트명: 검은띠 휘날리며 [Black Belt: Master of Taekwondo]
* 서비스 특징: AI 모션인식을 통한 태권도 학습 web service
* 주요 기능
  - 태권도 동작 학습 모델 기반 태권도 연습 및 심사
  - WebSocket을 통한 겨루기 매칭
  - WebRtc기술을 활용한 겨루기 화면
* 주요 기술
  - react 17.0.2
  - recoil 0.6.1
  - sockjs-client 1.6.0
  - styled-components 5.3.3
  - axios 0.26.1
  - teachablemachine-pose 0.8.6
  - spring boot 2.6.4
  - maven 3.8.4
  - nodejs 16.13.1
  - openjdk 11
  - ubuntu 20.04 LTS
  - mysql 8.0.28
  - docker + jenkins
* 참조 리소스
  - openvidu - webRtc
* 배포 환경
  - URL: https://j6a506.p.ssafy.io/

<br>

## 주요 기능

### 🥋 번역 기능 제공

![번역](https://user-images.githubusercontent.com/67628725/162374023-3c29aa64-4081-4c98-9487-800dd15c6509.gif)   

- 글로벌 서비스를 지향하는 저희 블랙벨트는, 번역 서비스를 제공합니다
- 네비게이션바에서 언제든지 원하는 언어로 편하게 바꾸어보실 수 있습니다

<br>



### 🥋 메인페이지

 ![메인페이지](https://user-images.githubusercontent.com/67628725/162373797-3ebd14c9-af94-44f2-8f5c-f55c24ca27b1.gif)    

- 연습모드, 심사모드, 겨루기로 나뉘어져 있습니다
- 태권도 영상을 배경으로 두어 웅장함을 더했습니다

<br>

### 🥋 연습모드

**1. 기본동작**

![기본동작](https://user-images.githubusercontent.com/67628725/162373820-7bf5038f-36a6-4e6f-9a5c-5aa000e03a64.gif)   

- 태권도의 7가지 기본동작들을 학습합니다
- 레벨에 따라 스테이지의 잠금이 해제됩니다
- 해당 스테이지를 클리어 하면 정확도에 따라 별을 1개부터 3개까지 얻을 수 있습니다
- 동작 카드 위에 마우스를 올려 동작에 대한 간단한 설명을 확인할 수 있습니다
- 자세한 설명은, 카드를 클릭시 연습 화면에서 확인할 수 있습니다

<br>

**2. 연결동작 & 품새** 

 ![연결동작](https://user-images.githubusercontent.com/67628725/162373826-7df9dc07-5f34-4ce4-99f2-40270bd700c8.gif) 

- 하나의 품새를 4단락으로 나누어 연습할 수 있도록 `연결동작` 코너를 만들었습니다
- 연결동작을 정확히 익힌 후 품새를 연습해보세요!
- 카드를 눌러 연습 스테이지로 입장하면, 상단에 동작 순서가 명시됩니다
- 명시된 동작을 정확하게 취하면 다음 동작으로 넘어갈 수 있습니다

<br>

### 🥋 겨루기

![Picture1 2](README.assets/invite.png)

- 겨루기 일반모드에서는 원하는 사용자를 지정해 겨루어볼 수 있습니다
- 상대의 닉네임을 검색하고 겨루기 신청을 보내보세요!

- 단, 상대가 다른 사람과 겨루기중이거나 로그아웃이거나 혹은 심사중인 경우, 겨루기 신청을 보낼 수 없습니다
- 유저의 상태는 닉네임 검색을 하면 이름 바로 아래에 나타납니다

![겨루기신청](https://user-images.githubusercontent.com/67628725/162375948-7a05f544-af86-44a2-b4d9-8d1f588d13de.gif)   

- 상대가 겨루기 신청을 수락하면, 페이지에 상대의 정보가 나타나고 겨루기 시작 버튼이 활성화됩니다
- `겨루기 시작` 버튼을 눌러 겨루기를 시작해봅시다!

![겨루기배틀](https://user-images.githubusercontent.com/67628725/162375953-de380490-4eca-44ff-9886-24777b72ae69.gif)

- 상대방에 대한 예의를 갖추고 `태권도 기본 준비동작`을 취하면, 인공지능이 이를 인식하고 겨루기가 시작됩니다
- 방어 동작을 성공하면 상단에 노란색 방패 이모티콘이 나타나며, 공격을 성공하면 상대에게 데미지 이펙트가 들어갑니다
- 30초 동안 상대의 공격을 막거나, 공격을 하면서 열심히 겨루어봅시다!

<br>

### 🥋 마이페이지

![마이페이지](https://user-images.githubusercontent.com/67628725/162374013-01e18f18-9203-492a-bea3-ac477c5141fa.gif)      

- 내 정보를 한눈에 확인할 수 있는 마이페이지입니다
- 지금까지 획득한 띠 및 단증을 확인할 수 있으며 겨루기와 관련된 전적을 확인할 수 있습니다
- 프로필사진 변경 및 닉네임 변경도 가능합니다

<br>



## 기술 스택

![아키텍처 구성도](./README.assets/blackBeltArchitecture.png)

<br>

### 🎨 FrontEnd

<div align=left>
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
  <img src="https://img.shields.io/badge/recoil-764ABC?style=for-the-badge&logo=react&logoColor=white"> 
  <img src="https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white"> 
  <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
  <img src="https://img.shields.io/badge/socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white">

</div>

- React를 이용해 웹 페이지를 구현하고 Recoil 및 React Query를 이용해 상태관리를 진행했습니다
- Styled Components를 이용해 css를 구현했습니다
- 겨루기를 위한 웹소켓은 SockJS를 이용했습니다
- Atomic 방식으로 개발을 진행하여 컴포넌트의 재사용성을 높이고 팀원과 디자인 통일성을 맞췄습니다

```
├── _foundation
│   ├── colors
│   ├── icons
│   ├── translation
│   └── typography
├── api
├── components
│   ├── atoms
│   │   ├── Buttons
│   │   │   └── GoogleButton
│   │   ├── Evaluation
│   │   ├── Icons
│   │   ├── Texts
│   │   └── Videos
│   ├── molecules
│   │   ├── Carousel
│   │   ├── DialogExtension
│   │   ├── Gyeorugi
│   │   ├── Layout
│   │   ├── Navbar
│   │   └── Stream
│   ├── organisms
│   │   ├── ChangeNickModal
│   │   ├── LoginModal
│   │   ├── PushAlarm
│   │   ├── SignupModal
│   │   ├── TaekwondoModal
│   │   ├── Timer
│   │   └── VideoRoom
│   └── templates
├── hooks
├── pages
│   ├── Gyeorugi
│   │   ├── GyeorugiStage
│   │   │   └── models
│   │   ├── Normal
│   │   └── Rank
│   ├── MainPage
│   │   └── SlideInfo
│   ├── Mypage
│   ├── Practice
│   └── Promotion
├── recoils
├── style
└── utils
```

<br>

### 📊 BackEnd

<div align=left>
  <img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"> 
  <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> 
  <img src="https://img.shields.io/badge/nginx-009639?style=for-the-badge&logo=nginx&logoColor=white"> 
  <img src="https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"> 
</div>

**Web Socket**

- Spring Framework에서 더 안정적인 SockJS 라이브러리를 선택하여 웹소켓 통신을 구현했습니다
- 통신규약을 위해 메시징 프로토콜 STOMP를 사용했습니다

![소켓메시지프로토콜2.png](./README.assets/%EC%86%8C%EC%BC%93%EB%A9%94%EC%8B%9C%EC%A7%80%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C2.png)  

- 동작 방식

  - http→ws 통신 헤더 요청으로 프로토콜 upgrade

  ![웹소켓서버설정.2png.png](./README.assets/%EC%9B%B9%EC%86%8C%EC%BC%93%EC%84%9C%EB%B2%84%EC%84%A4%EC%A0%95.2png.png)  

  - Server측 endpoiont 설정
  - Client 측 지정 endpoint로 socket 객체생성
  - Server 측 수신한 데이터 재발행하는 메서드 작성
  - Client 소켓데이터 send, receive

- WebSocket API

| 기능 | 프로토콜 | 동작 | api | 메시지 Type |
| --- | --- | --- | --- | --- |
| 개인세션 생성 | ws | sub | api/que/user | LOGIN |
| 겨루기 신청 | ws | pub | api/que/user/{게스트 id} | INVITE |
| 신청 수락/거절 | ws | pub | api/que/user/{호스트 id} | ACCEPT/REFUSE |
| 대기방 입장 | ws | pub | api/que/user/{호스트 id} | ENTER |

- 시퀀스 다이어그램 (겨루기-일반모드)

  ![시퀀스다이어그램2.png](./README.assets/%EC%8B%9C%ED%80%80%EC%8A%A4%EB%8B%A4%EC%9D%B4%EC%96%B4%EA%B7%B8%EB%9E%A82.png)

<br>

**Server**

1. 서버 접속 정보

>server ip : j6a506.p.ssafy.io  
>client id : ubuntu  
>client pw : pem파일로 대체 (MM첨부파일 확인, 팀원 이외에 공유 금지)

2. 포트 정보

| 포트 번호 |                   이름                    |
| :-------: | :---------------------------------------: |
|    22     |                    SSH                    |
|    53     |                    DNS                    |
|    80     | Redirected to Port 443 by nginx (docker)  |
|    443    | Redirected to Port 3000 by nginx (docker) |
|   3000    |             Frontend (Docker)             |
|   5050    |              MySQL (Docker)               |
|   8000    |             Backend (Docker)              |
|   8080    |         Jenkins Controller Web UI         |
|   8447    |      openvidu server https (Docker)       |
|   8448    |       openvidu server http (Docker)       |
|   8888    |       kurento media server (Docker)       |
|   8888    |        jupyter notebook (비활성화)        |
|   50000   | Jenkins TCP Agent Listener Port (Docker)  |

<br>

3. 서버 설계 상세 내용

- 주피터 접속 정보 및 상세 설명 - >
  -  server ip : j6a506.p.ssafy.io:8888
  - https로 하기위해 사설 cert 키로 진행해서 크롬에서 안전하지 못한 페이지로 인식합니다.
  - [주피터 노트북 설치과정](https://half-leather-4d3.notion.site/d066fbefa6c44f8ba407f4c77b1cf7d1)
  


-  [도커 및 도커 컴포즈 설치](https://half-leather-4d3.notion.site/4fcf091259e14df5bf60c13e837bf79d)


-  [젠킨스-깃 연동 및 자동 빌드/배포](https://half-leather-4d3.notion.site/ce92c2f95e044c3b98cdd370b6c48bdc)


-  [엔진엑스 세팅 및 프록시 설정](https://half-leather-4d3.notion.site/NGINX-CERTBOT-5271e86c1e9b4fe086c90c1eac482d66)


- [서버 mysql 세팅 과정](https://half-leather-4d3.notion.site/mysql-f55c1ba091be4573aeb044e6b3f52517)
- [프론트 / 백 도커](https://half-leather-4d3.notion.site/44e6651adb73413aba23f0fd6fa795a9)

<br>

### 💻 AI

**구현한 모델**

- 기본동작 - 13가지 기본동작을 판단해주는 인공지능 모델

- 연속동작/품새 - 1장~8장, 고려, 금강 등 품새별 4개의 구간으로 나눠서 해당 구간의 동작을 구분하는 인공지능 모델

- 겨루기 - 얼굴막기, 몸통지르기, 발차기 등의 동작을 구분하는 인공지능 모델

**제작 과정**

![aiml_1](README.assets/aiml_1.png)

- 인식의 정확성을 높이기 위해 Teachable Machine 사용했습니다
- 각 동작별 데이터를 직접 수집하고 정제하여 학습시켰고, 각 클래스가 정확하게 도출되는지 검증했습니다
- 학습된 모델은 Frontend에 전달하여 서비스를 완성했습니다

<br>



## 멤버 소개

<table>
  <thead>
  	<tr>
      <td align="center">
        <a href="https://github.com/rosieyeon/">
          <img src="https://avatars.githubusercontent.com/u/70363530?v=4" width="300px"/>
        </a>
        <p>
          <br />
          <b>연승은</b>
          <br/>
          <span>Frontend | Leader | Design</span>
        </p>
      </td>
      <td align="center">
      	<a href="https://github.com/Talia2019">
          <img src="https://avatars.githubusercontent.com/u/55391944?v=4" width="300px"/>
        </a>
        <p>
          <br />
          <b>정지영</b>
          <br/>
          <span>Frontend | Design</span>
        </p>
      </td>
      <td align="center">
      	<a href="https://github.com/Choi-YoungUn">
          <img src="https://avatars.githubusercontent.com/u/87463835?v=4" width="300px"/>
        </a>
        <p>
          <br />
          <b>최영운</b>
          <br/>
          <span>AI</span>
        </p>
      </td>
    </tr>
  </thead>
  <tbody>
  	<tr>
    	<td>
        <ul>
          <li>Figma 디자인</li>
          <li>기본 디자인 컴포넌트 생성</li>
          <li>웹소켓 통신으로 겨루기 매칭</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Figma 디자인</li>
          <li>추가예정</li>
          <li>추가예정</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>추가예정</li>
          <li>추가예정</li>
          <li>추가예정</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>



<table>
  <thead>
  	<tr>
      <td align="center">
        <a href="https://github.com/ckdn9595">
          <img src="https://avatars.githubusercontent.com/u/68536095?v=4" width="300px"/>
        </a>
        <p>
          <br />
          <b>이지우</b>
          <br/>
          <span>Backend | CI/CD</span>
        </p>
      </td>
      <td align="center">
      	<a href="https://github.com/limyt0">
          <img src="https://avatars.githubusercontent.com/u/80087763?v=4" width="300px"/>
        </a>
        <p>
          <br />
          <b>임영택</b>
          <br/>
          <span>Backend</span>
        </p>
      </td>
      <td align="center">
      	<a href="https://github.com/yunsoo-choi">
          <img src="https://avatars.githubusercontent.com/u/67628725?v=4" width="300px"/>
        </a>
        <p>
          <br />
          <b>최윤수</b>
          <br/>
          <span>Backend</span>
        </p>
      </td>
    </tr>
  </thead>
  <tbody>
  	<tr>
    	<td>
        <ul>
          <li>서버 설계 | 자동 빌드&배포</li>
          <li>DB 설계 | 프로시저 등 기초작업</li>
          <li>계정, WebRTC 관련 API 작성</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>추가예정</li>
          <li>추가예정</li>
          <li>추가예정</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>DB & API 설계</li>
          <li>겨루기 매칭 시스템</li>
          <li>웹소켓  </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

