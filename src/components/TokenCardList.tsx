import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { tokens } from "../data/sampleData";
import TokenCard from "./TokenCard";

export default function TokenCardList() {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        {tokens.map((token) => (
          <TokenCard token={token} />
        ))}
      </ListItem>
    </List>
  );
}
