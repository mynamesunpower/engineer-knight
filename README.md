# 기사기사

## 기사기사: 기사(騎士) for 기사(技士)

### The knight for an Engineer

### 배경

정보처리기사 공부하면서 불편한 점을 좀 정리해봤는데, 문득 이걸 해결해보고자하는 생각이 들었음. 실기가 열흘 남짓 남았는데 역시 공부하기 싫으면 다른 걸 해보고싶나봉가.

### 기술 스택 (예상)

#### Front-end
- React
- TypeScript
- GraphQL (취소선)

#### Back-end
- AWS EC2
- Travis CI
- Spring Boot
- JPA
- Spring Security

#### 공통
- 테스트 코드 작성

### 목적

1. 무작위 문제에 대한 접근성을 향상시키고 싶었음.
2. 정처기는 2020년에 크게 개정되어 그 이전의 문제는 현재 시험에 완벽히 대응하지 못함.
3. 그러나 이전 문제에서도 출제되었던 부분이 있기 때문에 울며 겨자먹기로 공부해야 함.
4. 실기 문제에 대한 즉각 채점 시스템이 필요. 현재는 계속 종이나 메모장에 끄적여서, 답지를 확인하고, 반복해야 함.
5. 오답노트 필요
6. 한 번 맞춘 문제라도 시간이 꽤 지나고 다시 풀었을 때 은근 틀린다. 맞춘 문제라도 리마인더 필요. 정답률을 기반으로 한다거나.
7. 개념 공부는.. 사실 만들려면 만들겠지만 귀찮고, 책 사서(두 브랜드의 책을 모두 봄) 감사히 잘 공부했기에 책을 사시기를 권해드린다.

### 구현해야 할 사항

1. 문제 데이터는 일단 모으면 될 것 같음.
2. 이후 문제들을 정제하는 과정이 필요.
3. 단답형 문제에 대한 답안을 어떤 방법으로 체크할지 생각해야 함.
4. 크게 카테고리형으로 문제 데이터를 처리해 두면, 추후 시험 범위가 개정되어도 카테고리에 맞는 문제만 새로 뽑아오면 되지 않을까 생각.

### 지극히 개인적 요구사항
- Java 8

### 진행사항
~2021/7/6
AWS Amplify를 활용하여 배포 자동화 설정을 해두고 개발해보고자 하는데 계속 빌드 에러에서 걸려 repository를 지웠다, 재생성했다만 계속 반복하는 것 같아 우선 접어두었다.
로컬 웹앱으로 개발 후, 배포하는 방향으로 하는 걸로.

2021/7/6

CRA 어플리케이션 생성.

```bash
npx create-react-app engineer-knight template --typescript
```

이후 github repository 생성하고 원격 저장소로 등록하고 푸시.

```bash
git remote add origin https://github.com/mynamesunpower/engineer-knight.git
git push origin mater
```

2021/7/7
프로토타이핑을 위해 Adobe XD를 사용 (개인 라이센스)
퇴근 후 활용법을 간략히 익히기

2021/7/10
정보처리기사 합격 예상(85점 정도)

2021/7/12
styled-component with TypeScript
redux, react-router SETTINGS

2021/8/13
AWS springboot 무중단 배포를 익혔다.
이것을 back-end 서버 기반으로 삼아야겠다.

TODO 
React App CI
