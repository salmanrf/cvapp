import React from "react";
import {AiFillPhone} from "react-icons/ai";
import {MdEmail} from "react-icons/md";
import {IoIosSave} from "react-icons/io";
import {FiEdit} from "react-icons/fi";

class Header extends React.Component {
    constructor(props) {
        super(props);

        // true == preview mode, false == edit mode
        this.state = {
            name: {
                mode: true,
                content: "Dennis  Ritchie", 
            },
            title: {
                mode: true,
                content: "Computer Scientist",
            },
            phone: {
                mode: true,
                content: "+62-8979253935"
            },
            email: {
                mode: true,
                content: "mac.alistair@gmail.com"
            },
            form: {
                name: "Dennis  Ritchie",
                title: "Computer Scientist",
                phone: "+62-8979253935",
                email: "mac.alistair@gmail.com"
            }
        }
    }

    updateContent = target => {
        return () => {
            this.setState({
                [target]: {
                    mode: true,
                    content: this.state.form[target]
                }
            });
        }
    }

    // NOTE TO SELF
    // REACT PARTIAL STATE UPDATE
    // THIS CODE BELOW CHANGES OTHER FORM PROPERTIES TO UNDEFINED ! 
    // handleChange = target => {
    //     return event => {
    //         this.setState({
    //             form: {
    //                 [target]: event.target.value,
    //             }
    //         });    
    //     }
    // }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        });    
    }

    render() {
        const {mode} = this.props;
        const {name, title, phone, email, form} = this.state;

        return (
            <div id="cv-header">
                <div className="person">
                    <div className="flex flex-ai-c flex-jc-sb">
                        {name.mode ? 
                            <div className="person-name">{name.content}</div>
                            :
                            <>
                                {mode ?
                                    <div className="person-name">{name.content}</div>
                                    :
                                    <input type="text" value={form.name} name="name" onChange={this.handleChange}/>
                                }
                            </>
                        }
                        {!mode &&
                            <>
                                {name.mode ? 
                                    <FiEdit className="icon medium stroke" onClick={() => this.setState({name: {...this.state.name, mode: false}})} />
                                    :
                                    <IoIosSave className="icon medium fill" onClick={this.updateContent("name")} />        
                                }
                            </>                            
                        }
                    </div>

                    <div className="thick-line"></div>

                    <div className="flex flex-ai-c flex-jc-sb">
                        {title.mode ?
                            <div className="person-title">{title.content}</div>
                            :
                            <>
                                {mode ? 
                                    <div className="person-title">{title.content}</div>
                                    :
                                    <input type="text" value={form.title} name="title" onChange={this.handleChange}/>
                                }
                            </>
                        }
                        {!mode && 
                            <>
                                {title.mode ?
                                    <FiEdit className="icon medium stroke" onClick={() => this.setState({title: {...this.state.title, mode: false}})} />
                                    :
                                    <IoIosSave className="icon medium fill" onClick={this.updateContent("title")} />        
                                }
                            </>
                        }
                    </div>
                </div>
                    
                <div className="cv-contact">
                    <div className="contact-item">
                        <AiFillPhone className="icon small fill" />
                        {phone.mode ?
                            <div className="contact-content">{phone.content}</div>
                            :
                            <>
                                {mode ? 
                                    <div className="contact-content">{phone.content}</div>
                                    :
                                    <input type="text" value={form.phone} name="phone" onChange={this.handleChange} />
                                }
                            </>
                        }    
                        {!mode && 
                            <>
                                {phone.mode ?
                                    <FiEdit className="icon small stroke" onClick={() => this.setState({phone: {...this.state.phone, mode: false}})} />
                                    :
                                    <IoIosSave className="icon small fill" onClick={this.updateContent("phone")} />                        
                                }
                            </>
                        }
                    </div>
                    
                    <div className="contact-item">
                        <MdEmail className="icon small fill" />
                        {email.mode ?
                            <div className="contact-content">{email.content}</div>
                            :
                            <>
                                {mode ? 
                                    <div className="contact-content">{email.content}</div>
                                    :
                                    <input type="text" value={form.email} name="email" onChange={this.handleChange} />
                                }
                            </>
                        }
                        {!mode && 
                            <>
                                {email.mode ?
                                    <FiEdit className="icon small stroke" onClick={() => this.setState({email: {...this.state.email, mode: false}})} />
                                    :
                                    <IoIosSave className="icon small fill" onClick={this.updateContent("email")} />    
                                }
                            </>
                        }
                    </div> 
                </div>               
            </div>
        );
    }
}

export default Header;