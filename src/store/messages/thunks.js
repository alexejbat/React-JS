import { clearMessageValue } from "../conversations";
import { sendMessage, getMessagesStart, getMessagesSuccess, getMessagesError, } from "./actions";

export const sendMessageWithThunk =
  (message, roomId) => (dispatch, getState) => {
    const c = dispatch(sendMessage(message, roomId));

    dispatch(clearMessageValue(roomId));

    console.log("c", c);
};

export const getMessagesFB = () => async (dispatch, _, api) => {
  try {
    dispatch(getMessagesStart());
    const data = await api.getMessagesApi();

    const messages = {};

    data.forEach((snap) => {
      messages[snap.key] = Object.values(snap.val());
    });

    dispatch(getMessagesSuccess(messages));
  } catch {
    dispatch(getMessagesError("Ошибка при получении сообщений"));
  }
};