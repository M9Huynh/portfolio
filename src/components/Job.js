
const Job = ({title, company, desc, time, skills}) => {
    return(
        <div className="border-2 border-transparent hover:border-gray-400">
            <h1>{title}</h1>
            <h3>{company}</h3>
            <p>{desc}</p>
            <p>{time}</p>
            <p>{skills}</p>
        </div>
    );
};

export default Job;