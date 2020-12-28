import React from "react";
import uniqid from "uniqid";
import {IoIosSave} from "react-icons/io";
import {FiEdit} from "react-icons/fi";
import {AiOutlineDelete} from "react-icons/ai";
import {MdCreateNewFolder} from "react-icons/md";

class Experience extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            experiences: [
                {
                    id: uniqid(),
                    title: "Software Engineer",
                    company: "Sun Microsystem",
                    date: "1995 - 2005",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," 
                },
                {
                    id: uniqid(),
                    title: "Senior Software Engineer",
                    company: "Sun Microsystem",
                    date: "2005 - 2012",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
                },
                {
                    id: uniqid(),
                    title: "CTO",
                    company: "Sun Microsystem",
                    date: "2012 - Present",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," 
                }
            ], 
        }
    }

    saveEdit = (uid, updates) => {
        this.setState({
            experiences: this.state.experiences.map(exp => exp.id === uid ? {...exp, ...updates} : exp)
        })
    }

    createForm = () => {
        this.setState({
            experiences: [...this.state.experiences, {mode: false, id: uniqid(), title: "", company: "", date: "", description:""}]
        })
    }

    deleteExp = (uid) => {
        this.setState({
            experiences: this.state.experiences.filter(exp => exp.id !== uid )
        }) 
    }

    renderExperiences = (EXP) => {
        return EXP.map(exp => (
            <Job mode={this.props.mode} job={exp} 
                saveEdit={this.saveEdit} deleteExp={this.deleteExp} key={uniqid()}
            />
        ))    
    }

    render() {
        return (
            <div id="cv-experience">
                <span className="section-title">Work Experience</span>
                <div id="job-list">
                    {this.renderExperiences(this.state.experiences)}
                </div>
                {!this.props.mode &&
                    <MdCreateNewFolder className="icon big fill" onClick={this.createForm}/>
                }
            </div>
        );
    }
}

class Job extends React.Component {
    constructor(props) {
        super(props);

        const {title, company, date, description} = this.props.job;
        const defaultMode = this.props.job.mode !== undefined ? this.props.job.mode : true;

        this.state = {
            mode: defaultMode,
            title: title,
            company: company,
            date: date,
            description: description
        }
    } 

    switchToEdit = () => {  
        this.setState({mode: false});
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });        
    }

    saveEdit = () => {
        this.props.saveEdit(this.props.job.id, {...this.state, mode: true});
    }

    render() {
        const {mode, title, company, date, description} = this.state;

        return (
            <div className="job-item">
                <div className="job-control">
                    {!this.props.mode && 
                        <>
                            {mode ? 
                                <FiEdit className="icon medium stroke" onClick={this.switchToEdit} />
                                :
                                <IoIosSave className="icon medium fill" onClick={this.saveEdit}/>
                            }
                            <AiOutlineDelete className="icon medium fill" onClick={() => this.props.deleteExp(this.props.job.id)}/>
                        </>
                    }  
                </div>
                <div className="job-title">
                    {mode ? 
                        <p>{title}</p>
                        :
                        <input type="text" name="title"
                            value={title}
                            onChange={this.handleChange}    
                        /> 
                    }
                </div>
                <div className="job-company-date">
                    {mode ?
                        <>
                            <p>{company}</p>
                            <p>|</p>
                            <p>{date}</p>
                        </>
                        :
                        <>
                            <input type="text" name="company"
                                value={company}
                                onChange={this.handleChange}
                            /> 
                            <p>|</p>
                            <input type="date" name="date"
                                value={date}
                                onChange={this.handleChange}
                            /> 
                        </> 
                    }
                </div>
                <div className="job-description">
                    {mode ? 
                        <p>{description}</p>
                        :
                        <textarea name="description"
                            value={description}
                            onChange={this.handleChange}
                        />
                    }
                </div>
            </div>
        );
    }
}

export default Experience;