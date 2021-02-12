import React from 'react';
import {SECTION_CARD_LOCA} from '../../localization/ar/Language';

const SectionCard = ({title, content}) => {
    return (
        <div className="section-card">
            <div className="section-card_info">
            <span className="section-card_title">{title}</span>
            <span className="section-card_content"> {SECTION_CARD_LOCA.thereIs} <i>{content}</i> {SECTION_CARD_LOCA.ToIncreaseYourKnowledge}</span>
            </div>
            <div className="section-card_icon material-icons">done</div>
        </div>
    )
}

export default SectionCard
