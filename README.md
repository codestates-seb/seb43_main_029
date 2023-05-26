
![로고5](https://github.com/Latada/seb43_main_029/assets/110769132/0f897c7f-1b7b-4ada-8991-770359abdb3d)

# 푸드피디아 (FoodPedia)
> 프로젝트 소개: 맛집 검색 및 리뷰 플랫폼 <br>
> 프로젝트 기간: 2023.04.28 ~ 2023.05.25
> 팀명: 👁️ Be Fearless
# 배포주소
> 개발 버전: http://foodpedia.co.kr/

# 시작 가이드
## 설치
```
$ git clone https://github.com/codestates-seb/seb43_main_029.git
```
<details>
  <summary>프론트엔드</summary>

  ### start
  ```
  $ cd seb43_main_029
  $ cd client
  $ npm install
  $ npm run start
  ```
</details>
<details>
  <summary>백엔드</summary>

  ### application.yml
  ```
  spring:
  output:
    ansi:
      enabled: ALWAYS

  servlet:
    multipart:
      max-file-size: 10MB # 파일 하나 당 최대 사이즈
      max-request-size: 50MB # 요청 당 최대 사이즈

  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://{JDBC_URL:PORT}/{DATABASE_NAME}?serverTimezone=Asia/Seoul
    username: {JDBC_USERNAME}
    password: {JDBC_PASSWORD}

  config:
    use-legacy-processing: true

  jpa:
    hibernate:
      ddl-auto: create
    show-sql: true
    properties:
      hibernate:
        format_sql: true
        highlight_sql: true
        color-codes: true
        use_sql_comments: true
        type:
          descriptor:
            sql: trace

  security:
    oauth2:
      client:
        registration:
          google:
            clientId: {GOOGLE_CLIENT_ID}
            clientSecret: {GOOGLE_CLIENT_SECRET}
            scope:
              - email
              - profile
          kakao:
            client-id: {KAKAO_CLIENT_ID}
            client-secret: {KAKAO_CLIENT_SECRET}
            redirect-uri: http://localhost:8080/login/oauth2/code/kakao
            authorization-grant-type: authorization_code
            client-authentication-method: POST
            client-name: Kakao
            scope:
              - profile_nickname
              - account_email
        provider:
          kakao:
            authorization-uri: https://kauth.kakao.com/oauth/authorize
            token-uri: https://kauth.kakao.com/oauth/token
            user-info-uri: https://kapi.kakao.com/v2/user/me
            user-name-attribute: id

mail:
  address:
    admin: {ADMIN_EMAIL}

jwt:
  key: ${JWT_SECRET_KEY}
  access-token-expiration-minutes: ${JWT_ACCESS_EXPIRATION_MINUTE}
  refresh-token-expiration-minutes: ${JWT_REFRESH_EXPIRATION_MINUTE}

cloud:
  aws:
    s3:
      bucket: {AWS_S3_BUCKET_NAME}
    region:
      static: ap-northeast-2
    stack:
      auto: false
    credentials:
      access-key: {AWS_ACCESSKEY}
      secret-key: {AWS_SECRETKEY}

  ```
  ### start
  ```
  $ cd seb43_main_029
$ cd server
$ ./gradlew build
$ cd build/libs
$ java -jar seb43_main_029-0.0.1-SNAPSHOT.jar
  ```
</details>

# 기술 스택

### 프론트엔드
[![HTML](https://img.shields.io/badge/-HTML-orange?logo=html5&logoColor=white&style=for-the-badge)](#)
[![CSS](https://img.shields.io/badge/-CSS-blue?logo=css3&logoColor=white&style=for-the-badge)](#)
[![JavaScript](https://img.shields.io/badge/-JavaScript-yellow?logo=javascript&logoColor=white&style=for-the-badge)](#)
[![React](https://img.shields.io/badge/-React-blueviolet?logo=react&logoColor=white&style=for-the-badge)](#)
[![Redux](https://img.shields.io/badge/-Redux-purple?logo=redux&logoColor=white&style=for-the-badge)](#)
[![Material UI](https://img.shields.io/badge/-Material%20UI-blue?logo=material-ui&logoColor=white&style=for-the-badge)](#)
[![React Router](https://img.shields.io/badge/-React%20Router-orange?logo=react-router&logoColor=white&style=for-the-badge)](#)
[![Styled Components](https://img.shields.io/badge/-Styled%20Components-pink?logo=styled-components&logoColor=white&style=for-the-badge)](#)
[![Axios](https://img.shields.io/badge/-Axios-red?logo=axios&logoColor=white&style=for-the-badge)](#)
[![GitHub](https://img.shields.io/badge/-GitHub-black?logo=github&logoColor=white&style=for-the-badge)](#)
[![Figma](https://img.shields.io/badge/-Figma-purple?logo=figma&logoColor=white&style=for-the-badge)](#)
[![Amazon S3](https://img.shields.io/badge/-Amazon%20S3-orange?logo=amazon-s3&logoColor=white&style=for-the-badge)](#)
[![Create React App](https://img.shields.io/badge/-Create%20React%20App-blue?logo=create-react-app&logoColor=white&style=for-the-badge)](#)

### 백엔드
![Java](https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white)
![Gradle](https://img.shields.io/badge/gradle-02303A?style=for-the-badge&logo=gradle&logoColor=white)
![SpringBoot](https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![SpringDataJPA](https://img.shields.io/badge/springdatajpa-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
![SpringBatch](https://img.shields.io/badge/springbatch-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON&logoColor=white)
![AWS_EC2](https://img.shields.io/badge/AWS%20EC2-FF8C00?style=for-the-badge&logo=amazonaws&logoColor=white)
![AWS_S3](https://img.shields.io/badge/AWS%20S3-FF4500?style=for-the-badge&logo=amazonaws&logoColor=white)
![AWS_RDS](https://img.shields.io/badge/AWS%20RDS-007BFF?style=for-the-badge&logo=amazonaws&logoColor=white)
![AWS_Route53](https://img.shields.io/badge/AWS%20Route%2053-FFA500?style=for-the-badge&logo=amazonaws&logoColor=white)
![AWS_CodePipeline](https://img.shields.io/badge/AWS%20CodePipeline-006400?style=for-the-badge&logo=amazonaws&logoColor=white)

# 주요 기능

# 화면 구성
|메인페이지|식당조회페이지|
|-----|-----|
|![image](https://github.com/Latada/seb43_main_029/assets/110769132/05d1952b-5e8d-4186-9720-0ab6b4a48258)|![image](https://github.com/Latada/seb43_main_029/assets/110769132/d7f6e826-566b-45b8-92e9-51bfee7b05d6)|
|로그인|회원가입|
|-----|-----|
|![image](https://github.com/Latada/seb43_main_029/assets/110769132/05d1952b-5e8d-4186-9720-0ab6b4a48258)|![image](https://github.com/Latada/seb43_main_029/assets/110769132/d7f6e826-566b-45b8-92e9-51bfee7b05d6)|
|일반회원 마이페이지|사업자회원 마이페이지|
|-----|-----|
|![image](https://github.com/codestates-seb/seb43_main_029/assets/110769132/5674ad52-4dfa-4665-a6f3-0bab94cb8fe1)|![image](https://github.com/codestates-seb/seb43_main_029/assets/110769132/93bb6493-a72b-413b-9dbd-b687569589c9)|
|로그인|회원가입|
|-----|-----|
|![image](https://github.com/Latada/seb43_main_029/assets/110769132/05d1952b-5e8d-4186-9720-0ab6b4a48258)|![image](https://github.com/Latada/seb43_main_029/assets/110769132/d7f6e826-566b-45b8-92e9-51bfee7b05d6)|



# 팀원 소개

## ✉️ Commit  Message
|Message|설명|
|:---:|:---|
|feat|새로운 기능 추가|
|init|프로젝트 시작, 초기화|
|update|수정 추가|
|fix|버그 수정|
|design|UI 수정|
|docs|문서 수정|
|style|코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우|
|refactor|코드 리팩토링|
|test|테스트 코드|
|chore |빌드 업무 수정, 패키지 매니저 수정|
