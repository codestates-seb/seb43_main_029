# 시작 가이드

## Installation
```
$ git clone https://github.com/codestates-seb/seb43_main_029.git
```

## application.yml
```java
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
    url: jdbc:mysql://{JDBC_URL:PORT}/application?serverTimezone=Asia/Seoul
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



## Start
```
$ cd seb43_main_029
$ cd server
$ ./gradlew build
$ cd build/libs
$ java -jar seb43_main_029-0.0.1-SNAPSHOT.jar
```
