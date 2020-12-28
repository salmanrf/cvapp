import React from "react";
import uniqid from "uniqid";
import {IoIosSave} from "react-icons/io";
import {FiEdit} from "react-icons/fi";

class Experience extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            mode: true,
            experiences: [
                {
                    id: uniqid(),
                    mode:true,
                    title: "Software Engineer",
                    company: "Sun Microsystem",
                    date: "1995 - 2005",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," 
                },
                {
                    id: uniqid(),
                    mode: true,
                    title: "Senior Software Engineer",
                    company: "Sun Microsystem",
                    date: "2005 - 2012",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
                },
                {
                    id: uniqid(),
                    mode:true,
                    title: "CTO",
                    company: "Sun Microsystem",
                    date: "2012 - Present",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," 
                }
            ], 

        }
    }

    // NOTE TO SELF
    // TRY CHANGING THE FORM IMPELEMENTATION
    // BY REMOVING FORM FROM STATE AND USE ONLY THE INITIAL STATE

    // componentDidMount() {
    //     this.state.experiences.map(exp => (
    //         this.setState({form: Object.assign(this.state.form, {
    //             [`${exp.id}title`] : exp.title,
    //             [`${exp.id}company`] : exp.date,
    //             [`${exp.id}date`] : exp.date,
    //             [`${exp.id}description`] : exp.description,
    //         })})
    //     ))
    // }

    switchToEdit = ID => {
        return () => {
            this.setState({
                experiences: this.state.experiences.map(exp => exp.id === ID ? Object.assign(exp, {mode: false}) : exp)
            })
        }
    }

    handleChange = (uid, target) => {
        return event => {
            this.setState({
                experiences: this.state.experiences.map(exp => exp.id === uid ? Object.assign(exp, {[target]: event.target.value}) : exp)
            })
        }
    }

    renderExperiences(EXP) {
        // const {form} = this.state;

        // console.table(this.state.form);

        return EXP.map(exp => (
            <div className="job-item" key={uniqid()}>
                {!this.props.mode &&
                    <>
                        {exp.mode ? 
                            <FiEdit className="explist-icon icon medium stroke" onClick={this.switchToEdit(exp.id)} />
                            :
                            <IoIosSave className="explist-icon icon medium fill" />
                        }
                    </>
                }
                <div className="job-title">
                    {exp.mode ? 
                        <p>{exp.title}</p>
                        :
                        <input type="text" 
                            value={this.state.experiences.filter(e => e.id === exp.id)[0].title}
                            onChange={this.handleChange(exp.id, "title")}    
                        /> 
                    }
                </div>
                <div className="job-company-date">
                    {exp.mode ?
                        <>
                            <p>{exp.company}</p>
                            <p>|</p>
                            <p>{exp.date}</p>
                        </>
                        :
                        <>
                            <input type="text" 
                                value={this.state.experiences.filter(e => e.id === exp.id)[0].company}
                                onChange={this.handleChange(exp.id, "company")}
                            /> 
                            <p>|</p>
                            <input type="date" 
                                value={this.state.experiences.filter(e => e.id === exp.id)[0].date}
                                onChange={this.handleChange(exp.id, "date")}
                            /> 
                        </> 
                    }
                </div>
                <div className="job-description">
                    {exp.mode ? 
                        <p>{exp.description}</p>
                        :
                        <textarea 
                        value={this.state.experiences.filter(e => e.id === exp.id)[0].description}
                            onChange={this.handleChange(exp.id, "description")}
                        />
                    }
                </div>
            </div>
        ))
    }

    render() {
        return (
            <div id="cv-experience">
                <span className="section-title">Work Experience</span>
                <div id="job-list">
                    {this.renderExperiences(this.state.experiences)}
                </div>
            </div>
        );
    }
}

export default Experience;