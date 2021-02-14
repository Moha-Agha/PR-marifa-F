import React from 'react';
import HeroImage from './components/heroImage/HeroImage';
import SectionCard from '../../shared/sectionCard/SectionCard';


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
        </>
    )
}

export default Home
