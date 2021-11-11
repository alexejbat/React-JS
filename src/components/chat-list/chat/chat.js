import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import styles from "./chat.module.css";
import { useSelector } from "react-redux";
import { lastMessageSelector } from "../../../store/messages";

const useStyles = makeStyles((theme) => {
  return {
    item: {
      "&.Mui-selected": {
        backgroundColor: "#2b5278",
      },
      "&.Mui-selected:hover": {
        backgroundColor: "#2b5278",
      },
    },
  };
});

export function Chat({ title, selected, handleListItemClick }) {
  const s = useStyles();
  const lastMessage = useSelector(lastMessageSelector(title));

  return (
    <ListItem
      className={s.item}
      button={true}
      selected={selected}
      onClick={handleListItemClick}
    >
      <ListItemIcon>
        <AccountCircle fontSize="large" className={styles.icon} />
      </ListItemIcon>
      <div className={styles.description}>
        <ListItemText className={styles.text} primary={title} />
        {lastMessage && (
          <>
            <ListItemText 
              className={styles.text} 
              primary={`${lastMessage.author}: ${lastMessage.value}`}/>
          </>
        )}
      </div>
    </ListItem>
  );
}
