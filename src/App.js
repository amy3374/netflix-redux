import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import NavBar from "./components/NavBar";

//1. 3개의 페이지(홈, 무비, 디테일)
//2. 홈페이지에서 배너를 볼 수 있다.
//3. 3가지 섹션의 영화(popular, top rated, upcoming)
//4. 각 영화에 마우스를 올려두면 제목, 장르, 점수, 인기도, 청불여부 뜸
//5. 영화를 슬라이드로 넘기면서 볼 수 있음

//6.디테일 페이지에서 상세정보 볼 수 있음(포스터, 제목, 줄거리, 점수, 인기도, 청불여부, 예산, 러닝타임)
//7. 영화의 트레일러,리뷰, 관련영화도 볼 수있음
//8. 영화 검색
//9. 영화 정렬
//10. 영화 필터링
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
