

const Candidacy_User = (props) => {
    const user = props.user;

    return(<div className="user_info">
    <h6>{user.name}</h6>
    <h6>{user.frist_name}</h6>
    <h6>{user.phone}</h6>
    <h6>{user.email}</h6>
    <button>Download Resume</button>
    <button>Download Cover letter</button>
</div>)
}

export default Candidacy_User;