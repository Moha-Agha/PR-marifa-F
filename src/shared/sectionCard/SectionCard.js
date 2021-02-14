import React from 'react';
import {SECTION_CARD_LOCA} from '../../localization/ar/Language';
import Business_administration from './svg/business_administration.svg';
import Child_rearing from './svg/child_rearing.svg';
import Human_development from './svg/human_development.svg';
import Novels from './svg/novels.svg';
import Political_science from './svg/political_science.svg';

const SectionCard = ({title, content,icon}) => {

let cartIcon

    switch (icon) {
        case 'Business_administration':
            cartIcon =  <img  src={Business_administration} alt={"marifa.de section" + title} />
            break;
        case 'Child_rearing':
            cartIcon =  <img  src={Child_rearing} alt={"marifa.de section" + title} />
            break;
        case 'Human_development':
            cartIcon =  <img  src={Human_development} alt={"marifa.de section" + title} />
            break;
        case 'Novels':
            cartIcon =  <img  src={Novels} alt={"marifa.de section" + title} />
            break;
        case 'no':
            cartIcon =  ''
            break;
        default:
            cartIcon =  <img  src={Political_science} alt={"marifa.de section" + title} />
            break;
    }
 
    return (
        <div className={icon === 'no'? "section-card section-card-center": "section-card"}>
            <div className={icon === 'no'? "section-card_info section-card_info-center": "section-card_info"}>
            <span className="section-card_title">{title}</span>
                 <span className="section-card_content">
                 {SECTION_CARD_LOCA.thereIs} <i> {content} </i>
                 {icon === 'no'? 
                 SECTION_CARD_LOCA.sections + SECTION_CARD_LOCA.ToIncreaseYourKnowledges 
                 : SECTION_CARD_LOCA.book + SECTION_CARD_LOCA.ToIncreaseYourKnowledge}
                 </span>
            </div>
            {icon === 'no'? "": <div className="section-card_icon" >{cartIcon}</div>}
            
        </div>
    )
}

export default SectionCard
