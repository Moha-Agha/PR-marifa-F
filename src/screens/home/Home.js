import React from 'react';
import HeroImage from './components/heroImage/HeroImage';
import SectionCard from '../../shared/sectionCard/SectionCard';

const Home = () => {
    return (
        <>
            <HeroImage/>
           <div className="sections-cards container">
               <SectionCard title="تنمية بشرية" content="2"/>
               <SectionCard title="علوم سياسية" content="20"/>
               <SectionCard title="إدارة أعمال" content="51"/>
               <SectionCard title="تربية أطفال" content="9"/>
               <SectionCard title="روايات ادبية" content="19"/>
               <SectionCard title="عرض كل الأقسام" content="2"/>
           </div>
        </>
    )
}

export default Home
