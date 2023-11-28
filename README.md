# Git
Git 이란 버전을 통해 코드를 관리하는 도구를 말함
- 코드 관리도구
- 코드 협업도구
- 코드 배포도구   

## Git 명령어
`git [명령어]`

### (1) `git init`
Git으로 코드 관리를 시작한다는 의미
- 코드 관리 단위(기준) : 폴더
- `(master / main)` : 현재 브랜치명
- `.git` 폴더 생성 : Git의 관리와 관련된 파일

### (2) `git status`
현재 상태를 출력 - Git에게 현재 상태를 물어봄

- `git init` 직후,
  ```
  On branch master
  -> master라는 브랜치 위에 있어요.

  No commits yet
  -> 아직 commit이 없어요.

  nothing to commit (create/copy files and use "git add" to track)
  -> commit할 것이 없어요.
  ```

- `test.txt` 파일 생성 후,
    ```  
    Untracked files:
    (use "git add <file>..." to include in what will be committed)
            test.txt

    -> 추적되지 않은 파일이 있어요.
            (파일명)
    
    nothing added to commit but untracked files present(use "git add")
    -> commit 하기 위해 add된 것이 없어요. 그러나 추적되지 않은 파일은 있어요.
    ```

- `git add test.txt` 직후,
    ```
    nothing to commit, working tree clean
    -> commit 할 게 없어요. 작업 폴더는 깔끔해요.
    ```

- 파일 수정후,
  ```
  On branch master
  Changes not staged for commit:
  -> commit하기 위해 stage 되지 않은 변경 사항이 있어요.

    (use "git add <file>..." to update what will be committed)
    (use "git restore <file>..." to discard changes in working directory)
        modified:   test.txt
  
  no changes added to commit (use "git add" and/or "git commit -a")
  ```

### (3) `git add [파일명]`
commit을 위한 stage
- `git add .` : 현재 폴더의 모든 변경 사항 stage

### (4) `git commit -m "커밋 메시지"`
> commit == 버전을 생성 == 현재상태의 스냅샷 촬영
- 처음으로 commit을 할 경우,
  ```
  Author identity unknown
  -> 작자미상

  *** please tell me who you are.
  -> 당신이 누군지 알려주세요.

  Run
  -> 아래의 명령어를 실행해주세요.

    git config --global user.name "Your Name"
    git config --global user.email "you@example.com"

  ```

- `git config` 설정 후(`vim` 에디터 창),
  ```
  # Please enter the commit message for your changes.
  -> 변경사항에 대한 commit message를 입력해주세요.

  # Lines starting with '#' will be ignored, and an empty message aborts the commit.
  -> #로 시작하는 라인은 무시됩니다. 아무것도 없는 메시지는 종료됩니다.

  # On branch master
  #
  # Initial commit
  #
  # Changes to be committed:
  #     new file:   test.txt
  ```

### (5) `git config`
Git에 관한 설정
- `git config --global user.email "이메일"` : global(전역으로) user의 email을 설정
- `git config --global user.email` : 설정값 확인
  
### (6) `git log`
현재까지의 commit을 출력
- `git log` 출력화면
  
  ```
  commit 1f5c7219246ca764b1402507f753a3217366e1ff (HEAD -> main)
  Author: Juewon Seo <j1sodamdev@gmail.com>
  -> 작성자
  Date:   Tue Sep 19 16:59:38 2023 +0900
  -> 날짜

        Frist commit
        -> 커밋 메시지
  ```
- `git log --oneline` : 한줄로 출력
    ```
    3d9c383 (HEAD -> main) Add b.txt
    1f5c721 Frist commit
    ```

### (7) `git remote`
- `git remote add [저장소이름] [저장소주소]` : git remote add origin https://github.com/hkeryfonttlxisdrlw/basic_git 
  - git에게 원격저장소(remote) 추가(add)를 명령
- 저장소이름 : `origin`
- 저장소주소 : https://github.com/hkeryfonttlxisdrlw/basic_git 
