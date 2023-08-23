import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

//import TokenProvider from './contexts/TokenProvider/TokenProvider';

const queryClient = new QueryClient();
//커밋 테스트
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<LoginEntry />} />
            {/* <Route path="/home/:userId" element={<Home />} />
          <Route path="/ownerhome" element={<OwnerHome />} /> 이건 출시 이전에 뺄 것입니다. 개발을 위해 라우트 해두었습니다. */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/moreinfo" element={<MoreInfo />} />

            <Route path="/home" element={<MainScreen />} />

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
            <Route path="/google/callback" element={<GoogleCallback />} />
            <Route
              path="/questionlistscreen"
              element={<QuestionListScreen />}
            />
            <Route path="/send" element={<AddReply />} />
            {/* <Route path="/mypage/:userId" element={<MyPage />} /> */}
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
