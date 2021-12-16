import { SubTitle, SubText } from '../../SubTitle.style';
import Profile from './MyProfile';
import List from './MyList';

function MyPage() {
  return (
    <div>
      <SubTitle>
        <SubText>MyPage</SubText>
      </SubTitle>
      <Profile />
      <List />
    </div>
  );
}

export default MyPage;
