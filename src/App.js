import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import MoviePage from "./pages/Movies/MoviePage";
import AppLayout from "./layout/AppLayout";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

// 홈페이지
// 영화 전체 보여주는 페이지(서치)
// 영화 디테일 페이지
// 추천 영화 /moveis/:id/recommandation
// 리뷰 /movies/:id/reviews
function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<AppLayout />} >
              <Route index element={<HomePage />} />
              {/*<Route path="/movies" >*/}
              {/*    <Route index element={<MoviePage />} />*/}
              {/*    <Route path=":id" element={<MovieDetail />} />*/}
              {/*</Route>*/}

              {/*그룹해서 사용할 경우 local 환경에서는 정상적으로 동작하는데 불구하고, netlify.app에서는 동작하지 않아 */}
              {/*부득이하게 이렇게 변경해서 올립니다. */}
              {/*더불어, notfoundpage의 경우도 동일하게 동작하지 않습니다.*/}
              <Route path="/movie" element={<MoviePage />} />
              <Route path="/movie/:id" element={<MovieDetail />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;

