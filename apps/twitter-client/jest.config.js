module.exports = {
  name: 'twitter-client',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/twitter-client',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
