export const getTimeAgo = (timestamp: string | null | undefined) => {
  if (!timestamp) {
    return 'now';
  }

  const now = new Date();
  const messageTime = new Date(timestamp);
  
  if (isNaN(messageTime.getTime())) {
    return 'now';
  }

  const diffInSeconds = Math.floor((now.getTime() - messageTime.getTime()) / 1000);

  if (diffInSeconds < 0) {
    return 'now';
  }

  if (diffInSeconds < 60) {
    return `${diffInSeconds}s`;
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes}m`;
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours}h`;
  } else {
    const days = Math.floor(diffInSeconds / 86400);
    return `${days}d`;
  }
};
