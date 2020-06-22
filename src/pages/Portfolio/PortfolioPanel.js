import React, { useState } from 'react';
// import WitcherImg from './witcher_3.jpg';
import './PortfolioPanel.css';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import CloseIcon from '@material-ui/icons/Close';

const PortfolioPanel = ({ id, image, title, description, link, style, techStack, darkTheme }) => {

    const [imgIndex, setImgIndex] = useState(0);
    const [imgFullScreen, setImgFullScreen] = useState(false);

    const handleLeftArrow = () => {
        if(imgIndex === 0){
            setImgIndex(image.length - 1);
        } else {
            setImgIndex(imgIndex - 1);
        }
        // console.log('port left arrow clicked');
    };

    const handleRightArrow = () => {
        if(imgIndex === image.length - 1) {
            setImgIndex(0);
        } else {
            setImgIndex(imgIndex + 1);
        }
        // console.log('port right arrow clicked');
    };

    const handleImgClickFS = () => {
        // console.log('img fullscreen');
        setImgFullScreen(true);
    };

    const handleImgClickFSClose = () => {
        // console.log('img fs close');
        setImgFullScreen(false);
    };

    const renderLinks = () => {
        return link.map(link => 
            <div>
                {/* <a className="portfolio-info-link" href={link.url}>{link.title}</a> */}
                <a className={darkTheme ? 'portfolio-info-link dark-link' : 'portfolio-info-link light-link'} href={link.url}>{link.title}</a>
                {link.note ? <span className='portfolio-info-link-note'> {link.note}</span>: null}
            </div>
        );

        // <div><a className='portfolio-info-link' href={link.url}>{link.title}</a></div>

        // return portfolioList.map((Project, index)=> {
        //     return (
        //         <React.Fragment>
        //             <Project key={index} id={index+1}/>
        //         </React.Fragment>
        //     );
        // });
    };

    const renderPortfolio = () => {
        // console.log(key%2);
        if(id%2 === 1){
            return (
                <div className='portfolio-panel-container' style={style}>
                    <div className='portfolio-panel-img-container p-shadow-top'>
                        <img className='portfolio-panel-img' src={image[imgIndex].src} alt={image[imgIndex].alt} onClick={handleImgClickFS}/>
                        <div className='portfolio-panel-img-bot-wrapper'>
                            <NavigateBeforeIcon className='portfolio-nav-arrow' fontSize='large' onClick={handleLeftArrow} />
                            <label className='portfolio-panel-img-title'>{image[imgIndex].alt}</label>
                            <NavigateNextIcon className='portfolio-nav-arrow' fontSize='large' onClick={handleRightArrow} />
                        </div>
                    </div>
                    {/* <img className='portfolio-panel-img' src={image.src} alt={image.alt} /> */}
                    <div className='portfolio-info-container p-shadow-bot'>
                        <h1>{title}</h1>
                        <h4> {renderLinks()}
                            {/* <a className='portfolio-info-link' href={link.url}>{link.title}</a>
                            <div><a className='portfolio-info-link' href={link.url}>{link.title}</a></div> */}
                        </h4>
                        <h4>Tech Stack: <span className='portfolio-info-tech'>{techStack}</span></h4>
                        <h4 className='portfolio-info-desc'>{description}</h4>
                    </div>
                    {imgFullScreen ? 
                        <div className='portfolio-panel-img-fs-container'>
                            <img className='portfolio-panel-img-fs' src={image[imgIndex].src} alt={image[imgIndex].alt} onClick={handleImgClickFSClose}/>
                            {/* <button className='portfolio-panel-img-fs-btn-close' onClick={handleImgClickFSClose}>X</button> */}
                            <CloseIcon className='portfolio-panel-img-fs-btn-close' onClick={handleImgClickFSClose} />
                        </div>
                    : null}
                </div>
            );
        } else {
            return (
                <div className='portfolio-panel-container' >
                    <div className='portfolio-info-container p-shadow-top' style={style}>
                        <h1>{title}</h1>
                        <h4>{renderLinks()}
                            {/* <a className='portfolio-info-link' href={link.url}>{link.title}</a> */}
                        </h4>
                        <h4>Tech Stack: <span className='portfolio-info-tech'>{techStack}</span></h4>
                        <h4 className='portfolio-info-desc'>{description}</h4>
                    </div>
                    <div className='portfolio-panel-img-container p-shadow-bot' >
                        <img className='portfolio-panel-img' src={image[imgIndex].src} alt={image[imgIndex].alt} onClick={handleImgClickFS} style={style}/>
                        <div className='portfolio-panel-img-bot-wrapper'>
                            <NavigateBeforeIcon className='portfolio-nav-arrow' fontSize='large' onClick={handleLeftArrow} />
                            <label className='portfolio-panel-img-title'>{image[imgIndex].alt}</label>
                            <NavigateNextIcon className='portfolio-nav-arrow' fontSize='large' onClick={handleRightArrow} />
                        </div>
                    </div>
                    {imgFullScreen ? 
                        <div className='portfolio-panel-img-fs-container'>
                            <img className='portfolio-panel-img-fs' src={image[imgIndex].src} alt={image[imgIndex].alt} onClick={handleImgClickFSClose}/>
                            {/* <button className='portfolio-panel-img-fs-btn-close' onClick={handleImgClickFSClose}>X</button> */}
                            <CloseIcon className='portfolio-panel-img-fs-btn-close' onClick={handleImgClickFSClose} />
                        </div>
                    : null}
                </div>
            );
        }
    }
    
    return (
        // <div>
        <React.Fragment>
            {renderPortfolio()}
        </React.Fragment>
            // {renderPortfolio()}
        // </div>
    )
};

export default PortfolioPanel;