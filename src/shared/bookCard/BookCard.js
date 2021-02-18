import React from 'react'

const BookCard = ({image='test',title='عنوان الكتاب', author='اسم الكاتب', price='15€', salePrice='13,99€', stars='5'}) => {
    return (
        <div className='book-card'>
            <div className='book-card_image'>
                <img src={require('../../media/images/'+image+'.png')} />
            </div>
            <div className='book-card_title'>
                <p>{title}</p>
                <span>{author}</span>
            </div>
            <div className='book-card_footer'>
                 <div className='book-card_footer-stars'>
                     <i className="material-icons md-20">star_outline</i>
                     <i className="material-icons md-20">star_outline</i>
                     <i className="material-icons md-20">star_half</i>
                     <i className="material-icons md-20">star</i>
                     <i className="material-icons md-20">star</i>
                 </div> 
                 <div className='book-card_footer-price'>
                   
                 <span className="book-card_footer-price_sale">{salePrice}</span> 
                     <span className="book-card_footer-price_normal">
                         <i className="book-card_footer-price_normal-with-sale"></i>
                         {price}
                     </span>

                 </div>
            </div>
        </div>
    )
}

export default BookCard
