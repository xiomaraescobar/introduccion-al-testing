const BooksService = require('./books.service');

const fakeBooks = [
  {
    _id: 1,
    name: 'Harry Potasadter',
  },
];

const MongoLibStub = {
  getAll: () => [...fakeBooks],
  create: () => {},
};

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => MongoLibStub));

describe('Test for BookService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('Test for getBooks', () => {
    test('should return list books', async () => {
      const books = await service.getBooks({});
      console.log(books);
      expect(books.lenght).toEqual();
    });

    test('should return list books', async () => {
      const books = await service.getBooks({});
      console.log(books);
      expect(books[0].name).toEqual('Harry Potasadter');
    });
  });
});
