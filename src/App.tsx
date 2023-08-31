import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
// import VisitorHome from './pages/home/VisitorHome/VisitorHome';
// import Home from './pages/home/Home';
// import UserProvider from './contexts/UserProvider/UserProvider';
import Login from "./pages/login/Login";
import SignUp from "./pages/SignUp/SignUp";
import LoginEntry from "./pages/LoginEntry/LoginEntry";
import MoreInfo from "./pages/MoreInfo/MoreInfo";
// import OwnerHome from './pages/home/OwnerHome/OwnerHome';
// import useScroll from './hooks/useScroll/useScroll';
// import LeafFalling from './components/leafFalling/leafFalling'
// import Clouds from './components/Clouds/Clouds';
// import SelectTreeCharacter from './pages/select/selectTreeCharacter';
import KakaoCallback from "./pages/login/kakaoLogin/KakaoCallback";
import NaverCallback from "./pages/login/naverLogin/NaverCallback";
import GoogleCallback from "./pages/login/googleLogin/GoogleCallback";
//import MyPage from './pages/MyPage/MyPage';
import { QueryClient, QueryClientProvider } from "react-query";
import MainScreen from "./pages/Home/MainScreen";
import QuestionListScreen from "./pages/QuestionList/QuestionList";
import ReplyScreen from "./pages/Replies/ReplyScreen";

import ShowCaracter from "./pages/ShowCharacter/ShowCaracter";
import AddReply from "./pages/AddReply/AddReply";
import Guest from "./pages/Guest/Guest";
import MyPage from "./pages/MyPage/MyPage";
import React from "react";
//import TokenProvider from './contexts/TokenProvider/TokenProvider';

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "../src/components/Redux/store";
import TokenProvider from './contexts/TokenProvider/TokenProvider';
const queryClient = new QueryClient();
// function ProtectedRoutes() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   React.useEffect(() => {
//     const allowedPaths = ["/", "/login", "/signup"];
//     if (!allowedPaths.includes(location.pathname)) {
//       alert("허용되지 않은 경로입니다!");
//       navigate("/");
//     }
//   }, [location, navigate]);

//   return (
//     {
//       <Routes></Routes>
//       기존의 라우터들
//     }
//   );
// }
//new environment

function App() {
  // const navigate = useNavigate();
  // const location = useLocation();

  // React.useEffect(() => {
  //   // 허용되는 경로 목록
  //   const allowedPaths = ["/", "/login", "/signup"];

  //   // 현재 경로가 허용되는 경로 목록에 없다면 리다이렉트
  //   if (!allowedPaths.includes(location.pathname)) {
  //     navigate("/"); // 메인 페이지로 리다이렉트. 원하는 경로로 변경 가능
  //   }
  // }, [location, navigate]);

  // ... 기존 코드 ...
  localStorage.clear();
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <Router>
            <TokenProvider>

              {/* <ProtectedRoutes /> */}
              <Routes>
                <Route path="/" element={<LoginEntry />} />
                {/* <Route path="/home/:userId" element={<Home />} />
          <Route path="/ownerhome" element={<OwnerHome />} /> 이건 출시 이전에 뺄 것입니다. 개발을 위해 라우트 해두었습니다. */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/moreinfo" element={<MoreInfo />} />
                <Route path="/guest/:userId" element={<Guest />} />
                <Route path="/home/:userId" element={<MainScreen />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route
                  path="/replyscreen"
                  element={<ReplyScreen day={""} question={""} />}
                />
                <Route path="/showcharacter" element={<ShowCaracter />} />

                <Route
                  path="/replyscreen"
                  element={<ReplyScreen day={""} question={""} />}
                />

                {/* <Route path="/select-character-tree/:userId" element={<SelectTreeCharacter />} /> */}

                <Route path="/kakao/callback" element={<KakaoCallback />} />

                <Route path="/naver/callback" element={<NaverCallback />} />
                <Route
                  path="/google/callback"
                  element={<GoogleCallback />}
                />
                <Route
                  path="/questionlistscreen"
                  element={<QuestionListScreen />}
                />
                <Route path="/send/:userId" element={<AddReply />} />
                {/* <Route path="/mypage/:userId" element={<MyPage />} /> */}
              </Routes>
              </TokenProvider>

            </Router>
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
