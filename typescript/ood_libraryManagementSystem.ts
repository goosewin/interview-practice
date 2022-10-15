class Library {
  name: string;
  location: Address;
  books: BookItem[];
}

class Address {
  pinCode: number;
  street: string;
  city: string;
  state: string;
  country: string;
}

class Book {
  id: number;
  title: string;
  authors: Author[];
  category: BookCategory;
}

enum BookCategory {
  FANTASY,
  SCI_FI,
  ROMANTIC,
  DRAMA,
  // ...
}

enum BookStatus {
  ISSUED,
  AVAILABLE,
  RESERVED,
  LOST
}

enum BookFormat {
  HARDCOVER,
  PAPERBACK,
  NEWSPAPER,
  JOURNAL
}

class BookItem extends Book {
  barcode: string;
  publicationDate: Date;
  rack: Rack;
  status: BookStatus;
  format: BookFormat;
  issueDate: Date;
}

class Rack {
  locationId: string;
  number: number;
}

class Person {
  firstName: string;
  lastName: string;
}

class Author extends Person {
  booksPublished: Book[];
}

class SystemUser extends Person {
  email: string;
  phoneNumber: string;
  account: Account;
}

class Customer extends Person {
  booksCheckedOut: number;
  balance: number;
  searchService: SearchService;
  issueService: BookIssueService;
}

class Librarian extends SystemUser {
  searchService: SearchService;
  issueService: BookIssueService;

  addBookItem(bookItem: BookItem) { }
  deleteBookItem(barcode: string): BookItem { return new BookItem(); }
  editBookItem(bookItem: Partial<BookItem>): BookItem { return new BookItem(); }
}

// @ts-ignore
class Account {
  id: number;
  username: string;
  password: string;
}

class SearchService {
  getBooks(criteria: Partial<BookItem>) { return [new BookItem()]; }

  getBooksByTitle(title: string) { return [new BookItem()]; }
  getBooksByAuthor(authorName: string) { return [new BookItem()]; }
  getBooksByCategory(category: BookCategory) { return [new BookItem()]; }
  getBooksByPublicationDate(publicationDate: Date) { return [new BookItem()]; }
  getBookByID(id: number): BookItem { return new BookItem(); }
}

class BookIssueService {
  fineService: FineService;

  getReservationInfo(book: BookItem) { return new BookReservationInfo(); }
  updateReservationData(bookReservationDetails: Partial<BookReservationInfo>) { return new BookReservationInfo(); }

  reserveBook(book: BookItem, user: SystemUser) { return new BookReservationInfo(); }
  issueBook(book: BookItem, user: SystemUser) { return new BookIssueInfo(); }
  renewBook(book: BookItem, user: SystemUser) { return new BookIssueInfo(); }
  returnBook(book: BookItem, user: SystemUser) { }
}

class BookLending {
  book: BookItem;
  startDate: Date;
  user: SystemUser;
}

enum ReservationStatus {
  RESERVED,
  FULFILLED,
}

class BookReservationInfo extends BookLending {
  status: ReservationStatus;
}

enum IssueStatus {
  ISSUED,
  RETURNED,
  LATE,
}

class BookIssueInfo extends BookLending {
  status: IssueStatus;
  dueDate: Date;
}

class FineService {
  calculateFine(book: BookItem, user: SystemUser, days: number) {
    return new Fine();
  }
}

class Fine {
  date: Date;
  book: BookItem;
  user: SystemUser;
  amount: number;
}
