

const homeTitle = React.createElement("h1", {key: "homeTitle" , id: "homeTitle"}, "Navneet Kaur Chahal");
const homeSubtitle = React.createElement("h3", {key:"homeSubtitle", id: "homeSubtitle"}, "FULL STACK DEVELOPER | DEVOPS ENGINEER");
const home = document.getElementById("home");
home.setAttribute("style", "background-color:  #ffcc99; color:black; padding: 40px; text-align: center;  ")
ReactDOM.render([ homeTitle,homeSubtitle], home);

const aboutTitle = React.createElement("h1", {key: "aboutTitle", id: "aboutTitle"}, "About me");
const aboutContent = React.createElement("h4",{key: "aboutContent", id: "aboutContent"}, `Hello, I'm Navneet Chahal. I am a student at Douglas College pursuing my
post-degree diploma in Information and Communication Technology. 
I have a three years of experience in information technology. I have done projects involving Spring MVC Framework, Terraform, AWS, CI/CD pipeline. 
I have worked as a Java developer for 1 year and have a very good understanding of Java concepts.
I have done a small android project and have a basic knowledge of android. I have also worked on writing JMX plugins for nagios and therefore,
have knowledge of shell scripting. I have also worked on configuration tools like ansible. I have worked on AWS Cloud Platform for 1 year 
and I am familiar with AWS IAM, S3, VPC and Subnets, Security Groups, ECS instances,
RDS, AWS Elastic Beanstalk, ECS, CloudFormation templates, etc.. Additionally, 
I have worked on Docker, Kubernetes, Bitbucket, Jira, StackStorm, Slack, Splunk, etc.. Other than this, I like to play table tennis. 
Recently, I have started spending my time to learn cooking.`);
const aboutMe = React.createElement("div", {style: {width: "60%", padding:'20px', paddingRight: '40px'},key: "aboutMe", id: "aboutMe"}, [aboutTitle,aboutContent]);
const aboutPhoto = React.createElement("img", {src: "img/aboutPhoto.jpg", style: {width: '25%', padding:'20px'}, key: "aboutPhoto", id: "aboutPhoto"});
const about = document.getElementById("about");
about.setAttribute("style", "background-color: white; display:flex; flex-wrap:wrap; ")
ReactDOM.render([aboutMe, aboutPhoto], about);

const projectTitle = React.createElement("h1", {style:{textAlign: 'center'},key: "projectTitle", id: "projectTitle"}, "Projects");
        const project1 = `Has been part of the DevOps team. My tasks included:`;
        const project1List =  ['deployments using AWS Code pipeline and Bitbucket', 'deployments using Elastic Beanstalk',
        'L2 and L3 Support', 'Windows Maintenance Activity on development and production servers', 
        'Creating user workspaces', 'production database server database backup using RDS and S3 buckets'];
        const project2 = [`Single handedly created entire flow of Registration form using JSP, Spring Framework Model View Controller. I have written validations for each field. I have used
                        Apis to fetch data.`];
        const project2List = [];
        const projectArray = [["img/exp1.jpg", "Project 2","AWS Cloud Platform", " Sales and Marketing Client", project1, project1List],
                        ["img/exp2.jpg","Project 1","Spring MVC Framework", " Coaching Client", project2, project2List]];

        

const projectArrayContent = projectArray.map(projectArrayElement =>
        {       let projectArrayHeading = projectArrayElement[1]+"Heading";
                let projectArrayPhoto = projectArrayElement[1]+"Photo";
                let projectArrayTech = projectArrayElement[1]+"Technology";
                let projectArrayClientTitle = projectArrayElement[1]+"ClientTitle";
                let projectArrayContentHeading = projectArrayElement[1]+"ContentHeading";
                let projectArrayDiv = projectArrayElement[1]+"Div";
                let projectArrayData = [];
                let projectDesc = [];
                let projectListKey = projectArrayElement[1];
                let listKey = 0;

                projectArrayData.push(React.createElement("img", {key: projectArrayPhoto, src: projectArrayElement[0], style: {width: '25%', padding:'20px'}}));
                projectDesc.push(React.createElement("h2", {key: projectArrayHeading, id: projectArrayHeading, style: {margin: '15px 2px 2px 2px',padding: '2px'}},projectArrayElement[1]));
                projectDesc.push(React.createElement("h4", {key: projectArrayTech, style:{ fontSize: '16px',margin: '2px',padding: '2px'}}, projectArrayElement[2]));
                projectDesc.push(React.createElement("h4", {key:  projectArrayClientTitle, style:{ fontSize: '14px',margin: '2px',padding: '2px'}}, projectArrayElement[3]));
                projectDesc.push(React.createElement("div", {style:{width: "100%"},className: 'container'},
                [React.createElement("h4", {key: projectArrayContentHeading}, projectArrayElement[4]),
                React.createElement("ul", {key: projectArrayHeading+"ul"},  projectArrayElement[5].map(listItem => {let projectListKey = projectArrayElement[1]+listKey++;  return React.createElement("li", {key:projectListKey}, listItem)}))]));
                projectArrayData.push(React.createElement("div", {style:{display: 'flex', flexDirection: 'column', width: "100%"},className: 'container'},projectDesc));
                return React.createElement("div", {id:projectArrayDiv, style: { display: 'flex', backgroundColor: 'white', width: '90%', margin: '10px 10px 10px 10px', boxShadow:'0px 1px 3px #888888'}}, projectArrayData);
});
projectArrayContent.unshift(projectTitle);

const project = document.getElementById("project");
ReactDOM.render(projectArrayContent,project);
projectArray.forEach(item => {
        item = item[0] + "Div";
        const itemName = document.getElementById(item);
        if(itemName != null){
        itemName.addEventListener("mouseover",(e) => { e.target.style.color='green';});
        itemName.addEventListener("mouseout",(e) => { e.target.style.color='black';});
}

});

project.setAttribute("style","display: flex;flex-wrap:wrap; flex-direction: row; background-color: #b3ffb3; color: black; justify-content: center; padding: 60px 0px 60px 0px; ");

const skillsArray = [
        {"Web Development": [{"HTML5/CSS3": "80%"}, {"Node.JS": "60%"}, {"Javascript/React":"80%"}]}, 
        {"Software Development": [{"Java":"90%"}, {"Python":"60%"}, {"C/C++":"70%"}]},
        {"Databases": [{"RDMS":"70%"}, {"MongoDB":"60%"}]},
        {"DevOps": [{"AWS Cloud Platform":"70%"}, {"Docker":"70%"}, {"Kubernetes":"70%"}]}
];


const skillsTitle = React.createElement("h1", {style:{textAlign: 'center', width:'100%'},key: "skillsTitle", id: "skillsTitle"}, "Skills");
const skillsArrayContent = skillsArray.map(skillsArrayElement =>
        {       let skillsArrayHeading = Object.keys(skillsArrayElement)[0]+"Heading";
                let skillsLevel1Array = [];
                let colorArray = ["#ff8566", "#66b3ff", "#ff99cc","#006622","#660000"];
                let count = -1;
                
                const skillsArrayData =  Object.values(skillsArrayElement).map(skillListItems => 
                        {     
                                skillsLevel1Array.push(React.createElement("h2", {key: skillsArrayHeading, id: skillsArrayHeading},Object.keys(skillsArrayElement)[0]));
                                return Object.values(skillListItems).map(skillListItem => 
                                {       
                                        (count == 4) ? count = 0 : count++;
                                        const skillNamePercent =  [Object.keys(skillListItem)[0], Object.values(skillListItem)[0]];
                                        skillsLevel1Array.push(React.createElement("p", {key:skillNamePercent[0]}, skillNamePercent[0]));
                                        skillsLevel1Array.push(React.createElement("div", {style:{width: "100%", backgroundColor: "#ddd"},className: 'container'}, 
                                        React.createElement("div", { key: skillNamePercent[0]+"value", style:{width: skillNamePercent[1], backgroundColor: colorArray[count], textAlign: "right", padding:"3px"}, id: skillNamePercent[0], className: "skills"},skillNamePercent[1])));
                                });
                        }
 );
                return React.createElement("div", {style: {backgroundColor:"white",boxShadow: '0px 1px 3px #888888',margin: "10px 10px 10px 10px",padding: "10px",flex:"0 0 270px"}, id: Object.keys(skillsArrayElement)[0]}, skillsLevel1Array);
});
skillsArrayContent.unshift(skillsTitle);
const skills = document.getElementById("skills");
skills.setAttribute("style", "display: flex; flex-wrap: wrap; justify-content: center; background-color:  #ffffb3; padding:60px 10px 60px 10px;")
ReactDOM.render(skillsArrayContent, skills);

const expTitle = React.createElement("h1", {style:{textAlign: 'center'},key: "expTitle", id: "expTitle"}, "Experience");
        const exp1 = `AWS Cloud Platform (IAM, Security Groups, VPC, Subnets, EC2, ECR, ECS, S3, Codepipeline, RDS,
        CloudFormation Template, etc.) Ansible, Bitbucket, Docker, Kubernetes`;
        const exp2 = `Back-end (Java, Spring Framework) and Front-end (React) developer`;
        const expArray = [[ "DevOps Engineer","Company 2", "August 2018 – July 2020", exp1],
                        ["Full-stack Developer","Company 1", "July 2017 – July 2018", exp2]];

const expArrayContent = expArray.map(expArrayElement =>
        {       let expArrayHeading = expArrayElement[0]+"Heading";
                let expArrayKey = expArrayElement[0];
                let expArrayData = [];
                let expArrayDiv = expArrayElement[0]+"Div";
                let expDesc = [];
                let data =[];
                
                expDesc.push(React.createElement("h2", {key: expArrayHeading, id: expArrayHeading,style: {margin: '15px 2px 2px 2px',padding: '2px'}},expArrayElement[0]));
                expDesc.push(React.createElement("p", {key:expArrayKey+"Company", style:{ fontSize: '16px',margin: '2px',padding: '2px'}}, expArrayElement[1]));
                expDesc.push(React.createElement("p", {key:expArrayKey+"Content",style:{width: "100%", margin: '10px'},className: 'container'},expArrayElement[3]));
                data.push(React.createElement("div", {key:expArrayKey+"Duration",style:{ fontSize: '14px',margin: '2px',padding: '5px 40px', width: '30%',textAlign:'right'}}, expArrayElement[2]));
                data.push(React.createElement("div", {style:{borderLeft: "8px solid white"},className: 'line'}));
                expArrayData.push(React.createElement("div", {style:{display: 'flex', backgroundColor:'white',boxShadow:'0px 1x 3px  #888888', flexDirection: 'column', width: "100%", margin: '10px 30px', padding: '10px'},className: 'container'},expDesc));
                data.push(React.createElement("div", {style: { display: 'flex', backgroundColor: '#b3d9ff', width: '90%'}}, expArrayData));
                return React.createElement("div", { id:expArrayDiv, style: {display:'flex',position:'relative', margin: '0',width: '100%',backgroundColor: '#b3d9ff'}},
               data
                );

        });
expArrayContent.unshift(expTitle);

const exp = document.getElementById("experience");
ReactDOM.render(expArrayContent,exp);
expArray.forEach(item => {
        item = item[0] + "Div";
        const itemName = document.getElementById(item);
        if(itemName != null){
        itemName.addEventListener("mouseover",(e) => { e.target.style.color='blue';});
        itemName.addEventListener("mouseout",(e) => { e.target.style.color='black';});}

});
exp.setAttribute("style","display: flex; justify-content: center;background-color: #b3d9ff;flex-wrap: wrap; flex-direction: column; z-index:-1;padding: 30px; ");



document.getElementsByTagName("body").item(0).setAttribute("style","background-color: white; font-family:'Consolas';");