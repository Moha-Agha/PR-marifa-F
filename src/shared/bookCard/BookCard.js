import React from 'react'

const BookCard = ({title='عنوان الكتاب', author='اسم الكاتب', price='10€', stars='5'}) => {
    return (
        <div className='book-card'>
            <div className='book-card_image'></div>
            <div className='book-card_title'>
                <p>{title}</p>
                <span>{author}</span>
            </div>
            <div className='book-card_footer'>
                 <span className='book-card_footer-stars'>{stars}</span>
                 <span className='book-card_footer-price'>{price}</span>
            </div>
        </div>
    )
}

export default BookCard
