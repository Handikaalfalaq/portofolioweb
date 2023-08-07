import FolderImage from './img/folderImg.jsx';

function Home() {
    return(
        <div className="containerHome">
            <div className="informasi">
                <div className="greeting">Hi! I am,</div>
                <div className="name">Handika Al Falaq</div>
                <div className="work">Fullstack Developer</div>
                <div className="downloadCv">Download CV</div>
            </div>
            <div className="fotoProfile" style={{backgroundImage: `url(${FolderImage.Fotoprofile})`}}></div>
        </div>
    )
}

export default Home