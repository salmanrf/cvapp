import React from "react";
import {IoIosSave} from "react-icons/io";
import {FiEdit} from "react-icons/fi";

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            profile: {
                mode: true,
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" +
                "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam," +
                "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
            }
        }
    }

    componentDidMount() {
        this.setState({
            form: {
                profile: this.state.profile.content
            }
        })
    }

    handleProfileChange = event => {
        this.setState({form: {profile: event.target.value}});
    }

    updateProfile = () => {
        this.setState({
            profile: {
                mode: true,
                content: this.state.form.profile
            }
        })
    }


    render() {
        return (
            <div id="cv-profile">
                <div className="flex flex-ai-c">
                    <span className="section-title">Profile</span>
                    {!this.props.mode &&
                        <>
                            {this.state.profile.mode ?
                                <FiEdit className="icon medium stroke"  onClick={(() => this.setState({profile:{...this.state.profile, mode: false}}))} />
                                :
                                <IoIosSave className="icon medium fill" onClick={this.updateProfile} />
                            }
                        </>
                    }
                </div>

                {this.state.profile.mode ? 
                    <div className="profile-content">
                        <p>
                            {this.state.profile.content}
                        </p>
                    </div>
                    :
                    <>
                        {this.props.mode ? 
                            <div className="profile-content">
                                <p>
                                    {this.state.profile.content}
                                </p>
                            </div>
                            :
                            <div className="profile-content">
                                <textarea type="text" value={this.state.form.profile} onChange={this.handleProfileChange}/>
                            </div>
                        }
                    </>
                }
            </div>
        );
    }
}

export default Profile;