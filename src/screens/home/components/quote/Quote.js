import React from 'react'
import {QUOTE_LOCA} from '../../../../localization/ar/Language'

const Quote = () => {
    return (
        <div className="quote_container">
            <div className="quote">إن الإيمان بالمعتقدات قوة لا يمكن الاستهانة بها وإن للسلام قدرة عجيبة على الإختفاء بمواجهة المعتقدات القوية</div>
            <div className="quote-book">{QUOTE_LOCA.fromABook} : <a href="#">الأراء والمعتقدات</a></div>
        </div>
    )
}

export default Quote
