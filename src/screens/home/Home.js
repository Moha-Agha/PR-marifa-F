import React from 'react';
import HeroImage from './components/heroImage/HeroImage';
import BookCard from '../../shared/bookCard/BookCard';
import SectionCard from '../../shared/sectionCard/SectionCard';

import {HOME_PAGE_LOCA} from '../../localization/ar/Language'


const Home = () => {
    return (
        <>
            <HeroImage/>
           <div className="sections-cards container">
               <SectionCard title="تنمية بشرية" content="2" icon="Human_development"/>
               <SectionCard title="علوم سياسية" content="20" icon="Political_science"/>
               <SectionCard title="إدارة أعمال" content="51" icon="Business_administration"/>
               <SectionCard title="عرض كل الأقسام" content="8" icon="no"/>
               <SectionCard title="تربية أطفال" content="9" icon="Child_rearing"/>
               <SectionCard title="روايات ادبية" content="19" icon="Novels"/>
           </div>
           <div className="various-book container">
               
               <div className="various-book_title">
               <h2>{HOME_PAGE_LOCA.VariousBooksH2}</h2>
               <h3>{HOME_PAGE_LOCA.VariousBooksH3}</h3>
               </div>
               <div className="books-cards">
               <BookCard image="test" title='قاعدة الثواني الخمس' author='ميل روبنز' price='15€' salePrice='13,99€' stars='5'/>
               <BookCard image="test" title='فن العيش الحكيم' author='أرتور شوبنهاور' price='16€' salePrice='11,99€' stars='5'/>
               <BookCard image="test" title='الخطة السرية لإنقاذ البشرية' author='احمد خير العمري' price='8€' salePrice='6,99€' stars='5'/>
               <BookCard image="test" title='مئة عام من العزلة' author='غابرييل غارسيا ماركيز' price='35€' salePrice='20,99€' stars='5'/>
               <BookCard image="test" title='الخيميائي' author='باولو كويلو' price='10€' salePrice='6,99€' stars='5'/>
              
               <BookCard image="test" title='28 حرف' author='أحمد ذكي' price='15€' salePrice='13,99€' stars='5'/>
               <BookCard image="test" title='مميز بالأصفر' author='جاكسون براون' price='8€' salePrice='6,99€' stars='5'/>
               <BookCard image="test" title='حلم رجل مضحك' author='دوستويفسكي' price='25€' salePrice='20,99€' stars='5'/>
               <BookCard image="test" title='قوى العقل الباطن' author='جوزيف ميرفي' price='13€' salePrice='9,99€' stars='5'/>
               <BookCard image="test" title='مزرعة الحيوان' author='جورج اوريل' price='11€' salePrice='10,99€' stars='5'/>
               </div>

           </div>
        </>
    )
}

export default Home
