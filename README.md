# Git 셋팅

## 1. Git 관련

### 1.1. Git 프로그램 설치

- 다운로드 링크 (https://git-scm.com/) : 64bit window

- 설치된 버전 확인

```
win 키 + R 누른 후 cmd 입력
```

- 아래 입력 후 확인

```
git --version
```

### 1.2. VSCode 터미널 셋팅

- 터미널 환경을 git bash 창으로 설정을 진행

```
manage 버튼 > setting > 검색창에 default:Windows 입력
terminal.integrated.defaultProfile.windows 를 Git Bash로 설정
```

- 터미널 환경을 더 편리하게 git bash 설정

```
VSCode 내의 터미널 입력창에서 우측 상단 +옆의 v를 클릭해
select Default Profile 를 선택하여 Git Bash로 설정
```

### 1.3. Git 코딩 환경설정

- terminal 입력 내용

```
git --version
> 버전 확인

git config --global init.defaultBranch main
> 기본 브랜치명을 main 으로 변경

git config --global core.autocrlf true
> window, mac, linux 환경에서 키보드 Enter 키 처리를 동일하게

git config --global core.editor "code --wait"
> git 명령어 입력시 editor 를 VSCode 로 셋팅(commit)

git config --global user.name "ID"
> 사용자의 id를 저장

git config --global user.mail "Email"
> 사용자의 email을 저장
```

## 2. github 셋팅

- 사이트주소 (https://github/com)

### 2.1. 프로젝트 Repository(저장소) 생성

```
생성시 private 와 public 중에 선택
> private 는 개인 및 초대한 사용자만 접근 가능
> public 은 아무나 접근가능(오픈소스)

설명글은 가능하면 작성을 해주는 것이 좋다
> 프로젝트 목록에 표시됨
```

## 3. git 과 github 연결하기(인증하기)

### 3.1. github 웹사이트에 로그인한 상태

### 3.2. PC의 '자격 증명 관리자' 를 실행

> 검색 > 자격 증명 관리자

```
항목 중 windows 자격 증명 항목
> 기존에 git:https://github.com 가 있으면 삭제
```

### 3.3. VSCode 에 새로운 폴더 생성 및 등록

#### 3.3.1. VSCode 내에서 터미널 실행

```
단축키 : Ctrl + `
터미널이 bash 인지 필수적으로 확인
```

#### 3.3.2. git 초기화

```
git init
```

#### 3.3.3. README.md 파일 추가

```
README.md 파일은 root 폴더에 있어야 함

필요한 내용 작성
```

#### 3.3.4. 수정된 작업 git 등록

```
git add .
```

#### 3.3.5. 수정내역 메모 작성

```
git commit

첫번째 줄은 제목
두번째 줄은 제목과 내용을 구분을 위해 비워두고
세번째 줄부터 작업한 내용 작성

저장 후 창을 닫음
```

#### 3.3.6. github URL 연결하기(최초 1번만)

```
git remote add 별칭 url 식으로 작성
> ex) git remote add origin https://github.com/213am/til.git
```

#### 3.3.7. github 로 전송

```
만약 자격 증명 관리자에 없으면 인증을 위한 안내창이 팝업
```
