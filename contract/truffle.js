require("ts-node").register({
  files: true,
});
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    }
  },
  test_file_extension_regexp: /.*\.ts$/,
};
