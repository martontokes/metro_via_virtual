import { useEffect } from "react";
import { enterSite, enterSiteZh } from "./enterbuttons";


export default function WelcomeScreen({site}) {

    return (
    <>
        <div id="wcsOuterContainer">
          <div id="wcsInnerContainer">
            <div className="innerContentContainer">
            <h1 id="wcsExhibitionEnglishHeader" className="montserrat">metro<br/>via virtual</h1>
            <h2 id="wcsExhibitionEnglishSubheader" className="montserrat">a virtual exhibition<br /> from Hong Kong</h2>
            <button id="wcsEnterButtonEnglish" onClick={ () => enterSite(site) } className="montserrat" ><span id="buttonTextEng">enter exhibition</span></button>
            </div>
            <div className="innerContentContainer" id="iCC2">
            <h1 id="wcsExhibitionChineseHeader" className="notoSansHk notoregular">虛擬都會</h1>
            <h2 id="wcsExhibitionChineseSubheader" className="notoSansHk notoregular">來自香港的線上展覽</h2>
            <button onClick={ () => enterSiteZh(site) } className="notoSansHk" id="wcsEnterButtonChinese"><span id="buttonTextZh">進入展覽</span></button>       
            </div>
          </div>    
        </div>
      </>
    );
  }