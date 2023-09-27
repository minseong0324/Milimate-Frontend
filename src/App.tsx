import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigate,
    useLocation,
    Navigate,
} from "react-router-dom";
import React, { ReactElement } from "react";
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

const userId = localStorage.getItem("userId");

// 로그인 여부를 판단하는 함수
function isLoggedIn() {
return userId !== null;
}

// 로그인이 필요한 컴포넌트를 래핑하는 Protected 컴포넌트
function Protected({ children }: { children: ReactElement }) {
const location = useLocation();
return isLoggedIn() ? children : <Navigate to="/" replace state={{ from: location }} />;
}

function App() {
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
                                    {/*<Route path="/moreinfo" element={<Protected><MoreInfo/></Protected>}/>*/}

                                    <Route path="/guest/:userId" element={<Guest/>}/>

                                    <Route path="/home/:userId" element={<MainScreen/>}/>
                                    {/*<Route path="/home/:userId" element={<Protected><MainScreen/></Protected>}/>*/}
                                    
                                    <Route path="/mypage" element={<MyPage/>}/>
                                    {/*<Route path="/mypage" element={<Protected><MyPage/></Protected>}/>*/}

                                    <Route
                                        path="/replyscreen/:userId"
                                        element={<ReplyScreen day={""}/>}
                                    />

                                    <Route path="/showcharacter" element={<Protected><ShowCaracter/></Protected>}/>
                                    {/*<Route path="/showcharacter" element={<Protected><ShowCaracter/></Protected>}/>*/}

                                    <Route path="/kakao/callback" element={<KakaoCallback/>}/>

                                    <Route path="/naver/callback" element={<NaverCallback/>}/>
                                    <Route
                                        path="/google/callback"
                                        element={<GoogleCallback/>}
                                    />
                                    <Route
                                        path="/questionlist/:userId"
                                        element={<QuestionListScreen />}
                                    />
                                    {/*
                                    <Route
                                        path="/questionlist/:userId"
                                        element={<Protected><QuestionListScreen nowDate = {0}/></Protected>}
                                    />
                                    */}
                                    <Route path="/send/:userId" element={<AddReply/>}/>
                                </Routes>
                            </TokenProvider>

                        </Router>
                        </UserProvider>
                    </QueryClientProvider>
                </PersistGate>
            </Provider>
        </>
    );
}

export default App;
