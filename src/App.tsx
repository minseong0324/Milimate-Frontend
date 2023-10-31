import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigate,
    useLocation,
    Navigate,
    useParams
} from "react-router-dom";
import React, { ReactElement, useState, useEffect } from "react";
import Login from "./pages/login/Login";
import SignUp from "./pages/SignUp/SignUp";
import LoginEntry from "./pages/LoginEntry/LoginEntry";
import MoreInfo from "./pages/MoreInfo/MoreInfo";
import KakaoCallback from "./pages/login/kakaoLogin/KakaoCallback";
import NaverCallback from "./pages/login/naverLogin/NaverCallback";
import GoogleCallback from "./pages/login/googleLogin/GoogleCallback";
import {QueryClient, QueryClientProvider} from "react-query";
import MainScreen from "./pages/Home/MainScreen";
import QuestionListScreen from "./pages/QuestionList/QuestionList";
import ReplyScreen from "./pages/Replies/ReplyScreen";
import ShowCaracter from "./pages/ShowCharacter/ShowCaracter";
import AddReply from "./pages/AddReply/AddReply";
import Guest from "./pages/Guest/Guest";
import MyPage from "./pages/MyPage/MyPage";
import UserProvider from './contexts/UserProvider/UserProvider';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import store, {persistor} from "../src/components/Redux/store";
import TokenProvider from './contexts/TokenProvider/TokenProvider';
const queryClient = new QueryClient();
import {s} from './style'
import ErrorModal from "./components/ErrorModal/ErrorModal";

function App() {
    const accessToken = localStorage.getItem("accessToken");
   /* 
  //점검할 때  전역적으로 띄울 공지모달을 위한 코드
  const [isErrorModalOpen, setErrorModalOpen] = useState(false);
  const [modalErrorContent, setModalErrorContent] = useState<React.ReactNode>(null); // 모달에 표시될 내용을 저장합니다.
  const [word, setWord] = useState('');  // 보내는 사람 이름을 관리하는 상태

  const handleNavigateInstagram = () => {
    window.location.href = 'https://instagram.com/milimate_official?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr';
}

// 관리자 비밀번호 입력하기 위한 함수
const writeWord = (e: React.ChangeEvent<HTMLInputElement>) => {
  setWord(e.target.value)
}

const handleModalClose = () => {
  if (word !== 'qkdgogkwlaktpa') {
    setErrorModalOpen(false);
    return;
  }
}

  //점검할 때  전역적으로 띄울 공지모달을 위한 코드
  useEffect(() => {
    if (word === 'qkdgogkwlaktpa') {
      // word가 '강승준'이라면 이 useEffect는 실행하지 않음
      return;
    }

      setModalErrorContent(
          <s.SmallCenterModalWrapper>
              <s.SmallModalTextsWrapper2>이용 중 불편을 드려 죄송합니다.</s.SmallModalTextsWrapper2>
              <s.SmallModalTextsWrapper2>점검 완료 시, 인스타그램 스토리를 </s.SmallModalTextsWrapper2>
              <s.SmallModalTextsWrapper2>통해 공지를 올릴 예정입니다.</s.SmallModalTextsWrapper2>
              <s.BtnDiv>
                <s.OkBtnStyle onClick={handleNavigateInstagram}>인스타그램</s.OkBtnStyle>
                <s.CancelBtnStyle onClick={handleNavigateInstagram}>인스타그램</s.CancelBtnStyle>
              </s.BtnDiv>
              <br/>
              <s.MoreInfoInputName
                        type="text"
                        placeholder="관리자 비밀번호"
                        value={word}
                        onChange={writeWord}
              />
              <button onClick={handleModalClose}>관리자용</button>
          </s.SmallCenterModalWrapper>
      );
      
      setErrorModalOpen(true) 

  }, [isErrorModalOpen, word]);
*/ 
    // 로그인 여부를 판단하는 함수
    function isLoggedIn() {
        if(accessToken !== null) {
            return true;
        } else {
            return false;
        }
    }
    
    // 로그인이 필요한 컴포넌트를 래핑하는 Protected 컴포넌트
    function Protected({ children }: { children: ReactElement }) {
    const location = useLocation();
    return isLoggedIn() ? children : <Navigate to="/" replace state={{ from: location }} />;
    }

    return (
        <>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <QueryClientProvider client={queryClient}>
                        <UserProvider>
                        <Router>
                            <TokenProvider>

                                <Routes>
                                    <Route path="/" element={<LoginEntry/>}/>
                                    
                                    <Route path="/login" element={<Login/>}/>
                                    <Route path="/signup" element={<SignUp/>}/>

                                    <Route path="/moreinfo" element={<MoreInfo/>}/>

                                    <Route path="/guest/:userId" element={<Guest/>}/>

                                    <Route path="/home/:userId" element={<MainScreen/>}/>
                                   {/* <Route path="/home/:userId" element={<Protected><MainScreen/></Protected>}/>*/}
                                    
                                    <Route path="/mypage" element={<MyPage/>}/>

                                    <Route
                                        path="/replyscreen/:userId"
                                        element={<ReplyScreen day={""}/>}
                                    />

                                    <Route path="/showcharacter" element={<ShowCaracter/>}/>

                                    <Route path="/kakao/callback" element={<KakaoCallback/>}/>

                                    <Route path="/naver/callback" element={<NaverCallback/>}/>
                                    <Route
                                        path="/google/callback"
                                        element={<GoogleCallback/>}
                                    />
                                    {/*<Route
                                        path="/questionlist/:userId"
                                        element={<QuestionListScreen />}
                                    />
                                     */}
                                    <Route
                                        path="/questionlist/:userId"
                                        element={<QuestionListScreen />}
                                    />
                                   
                                    <Route path="/send/:userId" element={<AddReply/>}/>
                                </Routes>
                            </TokenProvider>

                        </Router>
                        </UserProvider>
                    </QueryClientProvider>
                </PersistGate>
            </Provider>
             {/*점검할 때  전역적으로 띄울 공지모달을 위한 코드
    <ErrorModal isOpen={isErrorModalOpen} onClose={() => setErrorModalOpen(false)} >
      {modalErrorContent}
    </ErrorModal>
*/}
        </>
    );
}

export default App;
