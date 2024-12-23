import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { httpRequest } from "../../utils/httpRequest"; // httpRequest를 불러옴
import useTokenStorage from "../../utils/useTokenStorage"; // useTokenStorage를 불러옴

function Main({ user}) {
    // const [user, setUser] = useState({ username: "", role: "" });
    // const navigate = useNavigate();

    useEffect(() => {
        console.log("Main에서 사용자 상태 확인:", user);
    }, [user]); // 상태 변경 시 렌더링 확인


    // URL에서 토큰을 저장하는 훅 호출
    useTokenStorage();

    // useEffect(() => {
    //     console.log("useEffect 실행됨");
    //
    //     const fetchUserData = async () => {
    //         try {
    //             console.log("GET /api/user/main 요청 시작");
    //             const data = await httpRequest("GET", "/api/user/main");
    //             console.log("GET /api/user/main 성공:", data);
    //             setUser({ username: data.username, role: data.role });
    //             console.log("사용자 상태 업데이트:", { username: data.username, role: data.role }); // 상태 업데이트 확인
    //
    //         } catch (error) {
    //             console.error("GET /api/user/main 실패:", error);
    //         }
    //     };
    //
    //     fetchUserData();
    // }, []);
    //
    // const handleLogout = async () => {
    //     try {
    //         const response = await httpRequest("POST", "/api/auth/logout");
    //
    //         // 로컬 스토리지 및 상태 초기화
    //         localStorage.removeItem("access_token");
    //         deleteCookie("oauth2_auth_request");
    //         setUser({ username: "", role: "" }); // 사용자 상태 초기화
    //         navigate("/main"); // 로그인 페이지로 이동
    //     } catch (error) {
    //         console.error("로그아웃 실패:", error);
    //         alert("로그아웃에 실패했습니다.");
    //     }
    // };
    //
    // const deleteCookie = (name) => {
    //     document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
    // };
    //
    // const goToLoginPage = () => {
    //     navigate("/login"); // 로그인 페이지로 이동
    // };
    // const goToMyPage = () => {
    //     navigate("/mypage"); // 마이 페이지로 이동
    // };
    return (
        <div>
            <h1>메인 페이지 테스트 페이지 !!!</h1>

            {/* 조건부 렌더링: 사용자 정보 */}
            {user.username ? (
                <div>
                    <p>사용자 이름: <b>{user.username}</b></p>
                    <p>사용자 권한: <b>{user.role}</b></p>
                    {user.role === "ROLE_ADMIN" && <p>관리자 권한이 있습니다.</p>}
                    {/*<button onClick={handleLogout}>로그아웃</button>*/}
                </div>
            ) : (
                <div>
                    <p>로그인하지 않은 사용자만 볼 수 있습니다.</p>
                    {/*<button onClick={() => navigate("/login")}>로그인</button>*/}
                </div>
            )}


            {/*<p>사용자 이름: <b>{user.username}</b></p>*/}
            {/*<p>사용자 권한: <b>{user.role}</b></p>*/}

            {/*/!* ROLE_ADMIN에 따라 조건부 렌더링 *!/*/}
            {/*{user.role === "ROLE_ADMIN" && <p>관리자 권한이 있습니다.</p>}*/}
            {/*{user.role === "ROLE_USER" && <p>일반 사용자 권한이 있습니다.</p>}*/}

            {/*/!*<button type="button" id="logout-btn" onClick={handleLogout}>로그아웃</button>*!/*/}
            {/*/!*<button type="button" onClick={goToLoginPage}>로그인</button>*!/*/}
            {/*<button type="button" onClick={goToMyPage}>마이 페이지</button>*/}


            {/*<h1>Welcome, <span>{user.username}</span>!</h1>*/}

            {/*/!* 인증된 사용자만 볼 수 있는 부분 *!/*/}
            {/*{user.username && <div>인증된 사용자만 볼 수 있습니다.*/}
            {/*    <button type="button" id="logout-btn" onClick={handleLogout}>로그아웃</button>*/}
            {/*</div>}*/}

            {/*/!* 특정 권한이 있는 사용자만 볼 수 있는 부분 *!/*/}
            {/*{user.role === "ROLE_ADMIN" && <div>관리자만 볼 수 있습니다.</div>}*/}

            {/*/!* 익명 사용자만 볼 수 있는 부분 *!/*/}
            {/*{!user.username && <div>로그인하지 않은 사용자만 볼 수 있습니다.*/}
            {/*    <button type="button" onClick={goToLoginPage}>로그인</button>*/}
            {/*</div>}*/}
        </div>
    );
}

export default Main;
