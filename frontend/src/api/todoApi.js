import axios from "axios";
import { nanoid } from "nanoid";
import { get_response } from "./dummy";

// api 함수용 파일
const server_address = process.env.REACT_APP_SERVER_ADDRESS + "/plan";
// const server_address = "https://1b66ee69-95f1-4301-8969-9e0144076d1d.mock.pstmn.io" + "/plan";
/**
 * 예시 api 함수 :
 * 서버에서 todo 이벤트 목록을 가져옵니다.
 * @param {String} userId
 *
 * @typedef {Object} TodoEvent
 * @property {string} id - 이벤트의 고유 식별자.
 * @property {string} title - 이벤트의 제목.
 * @property {string} start - 이벤트의 시작 날짜와 시간 (ISO 형식).
 * @property {string} end - 이벤트의 종료 날짜와 시간 (ISO 형식).
 * @property {string} content - 이벤트에 대한 추가 설명 또는 내용.
 * @property {boolean} isFinish - 이벤트가 완료되었는지 여부.
 * @property {"WORK"|"REST"} type - 이벤트가 완료되었는지 여부.
 * @property {string} important - 이벤트가 완료되었는지 여부.
 * @property {string} className - 이벤트가 완료되었는지 여부.
 *
 * @returns {Promise<TodoEvent[]>} - todo 이벤트 목록의 배열을 포함하는 프로미스를 반환합니다.
 * @throws {Error} - 네트워크 요청이 실패할 경우 오류를 발생시킵니다.
 */
export const getTodoList = async () => {
  try {
    const token = "your_bearer_token_here";
    // Bearer 토큰은 필요에 따라 변경

    // 요청 본문 데이터
    // const response = await axios.get(
    //   `${server_address}/view/`,
    //   {},
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //       // Authorization: `Bearer ${token}`,
    //     },
    //   }
    // );

    // 더미데이터
    const response = { data: get_response, status: 200 };

    if (response.status !== 200) {
      console.log(response.message);
      throw new Error(`HTTP 오류! 상태: ${response.status}`);
    }

    // const data = await response.json();
    const { data } = response.data;
    return data;
  } catch (error) {
    console.error("todo 목록을 가져오는 중 오류 발생:", error);
    return false;
  }
};

// C
export const createTodoRequest = async (newTodoItem) => {
  try {
    const token = "your_bearer_token_here";

    // const response = await axios.post(
    //   server_address + "/create/",
    //   JSON.stringify(newTodoItem),
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${token}`,
    //     },
    //   }
    // );

    // 테스트코드
    let response = { status: 201 };

    if (response.status !== 201) {
      console.log(response.message);
      throw new Error(`HTTP 오류! 상태: ${response.status}`);
    }

    // 더미 코드
    newTodoItem.id = nanoid();
    return newTodoItem;
    //

    // const data = await response.json();
    // return data;
  } catch (e) {
    console.error("todo 항목을 생성하는 중 오류 발생:", e);
    return false;
  }
};

// D
export const deleteTodoRequest = async (todoItem) => {
  try {
    const token = "your_bearer_token_here";

    // const response = await axios.delete(
    //   server_address + `/delete/${todoItem?.id}`,
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${token}`,
    //     },
    //   }
    // );

    const response = { status: 200 };

    if (response.status === 200) {
      return true;
    } else {
      throw new Error(`HTTP 오류! 상태: ${response.status}`);
    }
  } catch (e) {
    console.error("todo 항목을 삭제하는 중 오류 발생:", e);
    return false;
  }
};

// U
export const updateTodoRequest = async (todoItem) => {
  const token = "your_bearer_token_here";
  try {
    // const response = await axios.put(
    //   server_address + `/update/${todoItem?.id}/`,
    //   JSON.stringify(todoItem),
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${token}`,
    //     },
    //   }
    // );

    // 테스트코드
    const response = { status: 200 };

    if (response.status === 200) {
      return true;
    } else {
      throw new Error(`HTTP 오류! 상태: ${response.status}`);
    }
  } catch (e) {
    console.error("todo 항목을 수정하는 중 오류 발생:", e);
    return false;
  }
};