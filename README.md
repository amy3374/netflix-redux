# 기술스택

### ✔️ Front-end

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"><img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=purple"><img src="https://img.shields.io/badge/Firebase-ffffff?style=for-the-badge&logo=Firebase&logoColor=yellow">

<Br />
<Br />
# 배포
[Netflix](https://netflix-redux-76de8.web.app)
<Br />
<Br />
# 구현기능

- 로그인
  - `firebase`를 통한 인증
  - 인증 후 메인페이지로 이동
    ![login](https://github.com/amy3374/netflix-redux/assets/119571479/4c88bd13-e389-4ad2-a4dc-b418cdb5de11)
  - 로그아웃 되면 다시 로그인 페이지로 이동
    ![logout](https://github.com/amy3374/netflix-redux/assets/119571479/3ccdc7e7-da3c-42d9-a88e-5a3ac844c16e)
- 메인페이지(Home)

  - movie api를 호출하여 popular movie, Top Rated Movie, Upcoming movie 보여줌
  - 슬라이드로 넘기며 볼 수 있음
  - 각 movie card에 마우스를 올려두면 상세 정보 볼 수있음!
  - movie card를 클릭하면 detail page로 이동
    ![slide](https://github.com/amy3374/netflix-redux/assets/119571479/204c49ac-6660-49d7-9b91-bf9f96066448)
  - 영화 `검색` 가능![search](https://github.com/amy3374/netflix-redux/assets/119571479/37405586-f9fa-4f63-922f-fc1a5e836e8e)

- movie detail page
  - 상세 정보 볼 수 있음![detail page](https://github.com/amy3374/netflix-redux/assets/119571479/7aac2a8a-6582-4b45-b38d-987c58a2d1c2)
  - `모달`을 이용해 movie에 관련된 비디오 볼 수 있음![modal](https://github.com/amy3374/netflix-redux/assets/119571479/c2fe4c46-4318-4baf-9153-04bbb5c72eec)
  - 토글버튼으로 review와 관련영화들 보여줌![review related](https://github.com/amy3374/netflix-redux/assets/119571479/9c22316c-042f-4f3a-9080-b0731f1a068b)
- movie page

  - 영화들 반응형으로 보여줌![반응형](https://github.com/amy3374/netflix-redux/assets/119571479/bf2607a1-2ee7-4bb2-95e3-46190be786b9)
  - 영화 `정렬`(인기순, 별점순, 현재 상영작)![정렬](https://github.com/amy3374/netflix-redux/assets/119571479/d242643e-48e7-4746-ad03-fb92cccfd7c6)
  - 각 영화를 클릭하면 detail page로 이동![detail로 이동](https://github.com/amy3374/netflix-redux/assets/119571479/d98ee4af-790a-48a7-8f66-990a790c2f78)
  - `pagination`![pagination](https://github.com/amy3374/netflix-redux/assets/119571479/5920b9a3-9e96-4877-94a5-071cd5c4af7d)

  <Br />
  <Br />

# 구현 예정 기능

- 장르별 필터링
- 마이페이지
- 영화 즐겨찾기 기능
