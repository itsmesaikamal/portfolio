import styled from 'styled-components';

const TabItemContainer = styled.li`
  margin: 0 1rem;
`;

const TabButton = styled.button`
  background-color: #1c1c1c;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #ffcc00;
    color: #1c1c1c;
    transform: scale(1.1);
  }

  &.active-tab-btn {
    background-color: #ffcc00;
    color: #1c1c1c;
  }
`;

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props;
  const {tabId, displayText} = tabDetails;

  const onClickTabItem = () => {
    clickTabItem(tabId);
  };

  const activeTabBtnClassName = isActive ? 'active-tab-btn' : '';

  return (
    <TabItemContainer>
      <TabButton
        type="button"
        className={activeTabBtnClassName}
        onClick={onClickTabItem}
      >
        {displayText}
      </TabButton>
    </TabItemContainer>
  );
};

export default TabItem;
