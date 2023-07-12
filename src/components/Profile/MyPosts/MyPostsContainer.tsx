import { connect } from 'react-redux';
import MyPosts from './MyPosts';
import { profileActions } from '../../../redux/profileReducer';
import { RootState } from '../../../redux/redux-store';

const mapStateToProps = (state: RootState) => ({
  postData: state.profilePage.postData
});

const MyPostsContainer = connect(mapStateToProps, {
  addPost: profileActions.addPost
})(MyPosts);

export default MyPostsContainer;
