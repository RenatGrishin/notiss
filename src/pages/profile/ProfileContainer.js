import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {editEnteredLogin} from "../../store/actions/authAction";


class profileContainer extends React.Component{
	getUserInfo(){
		const userInfo = this.props.users.find(key => key.id === this.props.auth.userID);
		return userInfo;
	}

	render (){
		return <Profile
			user={this.getUserInfo()}
		/>
	}
}

function mapStateToProps(state) {
	return{
		auth: state.auth,
		users: state.users
	}
}

const ProfileContainer = connect(mapStateToProps, {editEnteredLogin})(profileContainer);
export default ProfileContainer;