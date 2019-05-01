function Header() {
    var style = { margin: "auto", textAlign: "right" }
    var jstyle = { padding: "20px", marginBottom: "0px" }
    return (
        <div className='jumbotron' style={jstyle}>
            <div className='row'>
                <div className='col-xs-12 col-sm-5'><h2>Joshua Goss</h2></div>
                <div className='col-7 d-none d-sm-block' style={style}>
                    joshuamgoss@aol.com | <a href="http://www.linkedin.com/in/joshua-goss" target="_black">LinkedIn profile</a> | <a target="-blank" href="http://www.github.com/joshuamgoss">GitHub </a>
                </div>
            </div>
        </div>
    )
}

function Menu() {
    var style = { height: '20px' }
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light sticky-top">
            <a className="navbar-brand" href="#top">Top of Page</a>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="\hello.html">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Resume Section Details</a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <a className="dropdown-item" href="\experience.html">Experience</a>
                            <a className="dropdown-item" href="\skills.html">Skills</a>
                            <a className="dropdown-item" href="\education.html">Education</a>
                        </div>
                    </li>
                </ul>
                
            </div>
        </nav>
    )
}

