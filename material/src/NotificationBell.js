import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpIcon from '@mui/icons-material/Help';
import { Badge, IconButton, Tooltip } from '@mui/material';

const NotificationBell = () => {
    var NotificationNumber =5;
    var noNotifications =`You have No new Notifications`;
    var newNotifications = `You Have ${NotificationNumber} notifications`
  return (
    <Tooltip title ={NotificationNumber ? newNotifications : noNotifications}>

   <IconButton>
     <Badge badgeContent={NotificationNumber} color="primary">
        <NotificationsIcon color="action" />
    </Badge>
   </IconButton>
    </Tooltip>
  )
}

export default NotificationBell