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
               <BookCard/>
               <BookCard/>
               <BookCard/>
               <BookCard/>
               <BookCard/>
              
               <BookCard/>
               <BookCard/>
               <BookCard/>
               <BookCard/>
               <BookCard/>
               </div>

           </div>
        </>
    )
}

export default Home
