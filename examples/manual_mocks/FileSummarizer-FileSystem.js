var fs = require('FileSystem');

function summarizeFilesInDirectorySync(directoryPath) {
  return fs.readdirSync(directoryPath).map(function(fileName) {
    return {
      fileName: fileName,
      directory: directoryPath
    };
  });
  return directoryFileSummary;
}

exports.summarizeFilesInDirectorySync = summarizeFilesInDirectorySync;
