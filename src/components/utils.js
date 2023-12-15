// utils.js
export const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank');
    if (newWindow) newWindow.opener = null;
  };
  