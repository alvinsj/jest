jest.dontMock('FileSummarizer-FileSystem');
jest.setMock('FileSystem', {readdirSync: jest.genMockFn()});

describe('FileSummarizer-FileSystem', function() {
  describe('listFilesInDirectorySync', function() {
    var MOCK_FILE_INFO = {
      '/path/to/file1.js':
        'console.log("file1 contents");',

      '/path/to/file2.txt':
        "file2 contents"
    };

    beforeEach(function() {
      // Set up some mocked out file info before each test

      require('FileSystem').readdirSync.mockReturnValue(
        Object.keys(MOCK_FILE_INFO));
    });

    it('includes all files in the directory in the summary', function() {
      var FileSummarizer = require('FileSummarizer-FileSystem');
      var fileSummary = FileSummarizer.summarizeFilesInDirectorySync(
        '/path/to'
      );

      expect(fileSummary.length).toBe(2);
    });
  });
})
