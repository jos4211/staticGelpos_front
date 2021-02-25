# 사이트 링크

- [ Gelpos사이트](https://gelpos.netlify.app/)
- [ GelposBackend](https://github.com/jos4211/staticGelpos_backend)

# 개인 프로젝트 기획 배경

기존에 프로젝트로 개발했던 Gelpos를 가지고 정적페이지로 만들어 netlify와 heroku를 이용해 배포하고 싶어 개발하게 되었습니다.

# 배포 방법

- FrontEnd-netlify

  - netlify를 이용해 git과 연결해 staticGelpos_front에 업데이트를 하면 자동으로 build를 하여 배포하게 개발 하였습니다.

- BackEnd-heroku

  - heroku를 이용해 git과 연결해 staticGelpos_backend에 업데이트를 하면 자동으로 build를 하여 배포하게 개발 하였습니다.

- Database
  - mongoDB Atlas를 서버와 연결하여 회원정보, 가게정보, 스케줄, 테이블 등의 데이터를 저장하고 사용할 수 있게 개발 하였습니다.

# 회원가입 방법

### 이메일 인증

```

편의를 위해 f12 개발자 화면 console에 코드 번호를 띄어 코드번호 확인 가능합니다.

실제 이메일을 입력하지 않아도 됩니다.(실제 코드번호는 전송 됩니다.)

```

# 기능

```

모든 기능을 구현하고 싶었지만 정적페이지 특성상 soket.io 구현이 힘들어서 테이블 기능에 있는

soket.io기능을 일반 REST통신을 통해 구현할 예정입니다.

```
