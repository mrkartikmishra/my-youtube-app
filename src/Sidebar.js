import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TheatersIcon from '@material-ui/icons/Theaters';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import DeckIcon from '@material-ui/icons/Deck';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import SettingsIcon from '@material-ui/icons/Settings';
import FlagIcon from '@material-ui/icons/Flag';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackIcon from '@material-ui/icons/Feedback';

import './Sidebar.css';
import SidebarMenuItem from './SidebarMenuItem';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarMenuItem title="Home" Icon={HomeIcon} />
            <SidebarMenuItem title="Explore" Icon={ExploreIcon} />
            <SidebarMenuItem title="Subscriptions" Icon={SubscriptionsIcon}  />
            <hr className="sidebar__divider" />
            <SidebarMenuItem title="Library" Icon={VideoLibraryIcon}  />
            <SidebarMenuItem title="History" Icon={HistoryIcon}  />
            <SidebarMenuItem title="Watch later" Icon={WatchLaterIcon}  />
            <SidebarMenuItem title="Liked videos" Icon={ThumbUpIcon}  />
            <hr className="sidebar__divider" />
            <SidebarMenuItem title="Youtube Premium" Icon={YouTubeIcon}  />
            <SidebarMenuItem title="Movies" Icon={TheatersIcon}  />
            <SidebarMenuItem title="Gaming" Icon={SportsEsportsIcon}  />
            <SidebarMenuItem title="Live" Icon={LiveTvIcon}  />
            <SidebarMenuItem title="Fashon & Beauty" Icon={DeckIcon}  />
            <SidebarMenuItem title="Learning" Icon={EmojiObjectsIcon}  />
            <SidebarMenuItem title="Sports" Icon={SportsSoccerIcon}  />
            <hr className="sidebar__divider" />
            <SidebarMenuItem title="Settings" Icon={SettingsIcon}  />
            <SidebarMenuItem title="Report history" Icon={FlagIcon}  />
            <SidebarMenuItem title="Help" Icon={HelpIcon}  />
            <SidebarMenuItem title="Send feedback" Icon={FeedbackIcon}  />
        </div>
    );
}

export default Sidebar;