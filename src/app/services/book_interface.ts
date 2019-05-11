export interface Book{
    all_text: string,
    index:number,
    // author_id: string
    authors: string,
    // average_rating: number
    description: string,
    image_url: string,
    isbn: string,
    num_pages: string,
    original_title: string,
    publication_day: number,
    publication_month: number,
    publication_year: number,
    publisher: string,
    genre:string,
    similar_books: string,
    url: string,
    work_id: number,
    book_id:number,
    cosine:number
}