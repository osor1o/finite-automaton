export const handleOpenSidebar = () => {
  console.log('OPEN')
  return { type: 'OPEN_SIDE_BAR', payload: true };
};

export const handleCloseSideBar = () => {
  return { type: 'CLOSE_SIDE_BAR', payload: false };
};
