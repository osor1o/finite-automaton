export const handleOpenSidebar = () => {
  return { type: 'OPEN_SIDE_BAR', payload: true };
};

export const handleCloseSidebar = () => {
  return { type: 'CLOSE_SIDE_BAR', payload: false };
};
