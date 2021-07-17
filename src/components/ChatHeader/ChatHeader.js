import React from "react";
import "./ChatHeader.css";

import NotificationsIcon from "@material-ui/icons/Notifications";
import EditLocationRoundedIcon from "@material-ui/icons/EditLocationRounded";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import InboxIcon from "@material-ui/icons/Inbox";
import HelpRoundedIcon from "@material-ui/icons/HelpRounded";
import { IconButton } from "@material-ui/core";

function ChatHeader({ channelName }) {
  return (
    <div className="chatHeader">
      <div className="chatHeader__left">
        <h3>
          <span className="chatHeader__hash">#</span>
          {channelName}
        </h3>
      </div>

      <div className="chatHeader__right">
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <EditLocationRoundedIcon />
        </IconButton>
        <IconButton>
          <PeopleAltIcon />
        </IconButton>
      </div>

      <div className="chatHeader__search">
        <input placeholder="Search " />
        <SearchRoundedIcon />
      </div>

      <IconButton>
        <InboxIcon />
      </IconButton>
      <IconButton>
        <HelpRoundedIcon />
      </IconButton>
    </div>
  );
}

export default ChatHeader;
