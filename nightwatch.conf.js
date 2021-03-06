
module.exports = {
    "src_folders" : ["tests/e2e/spec"],
    "output_folder" : "tests/e2e/reports",
    "custom_commands_path" : "",
    "custom_assertions_path" : "",
    "page_objects_path" : "",
    "globals_path" : "tests/e2e/globals.js",

    "selenium" : {
        "start_process" : true,
        "server_path" : "tests/e2e/bin/selenium.jar",
        "log_path" : "tests/e2e",
        "host" : "127.0.0.1",
        "port" : 4444,
        "cli_args" : {
            "webdriver.chrome.driver" : "tests/e2e/bin/chromedriver",
            "webdriver.ie.driver" : ""
        }
    },

    "test_settings" : {
        "default" : {
            "launch_url" : "http://localhost",
            "selenium_port"  : 4444,
            "selenium_host"  : "localhost",
            "silent": true,
            "screenshots" : {
                "enabled" : false,
                "path" : "tests/e2e/screenshots"
            },
            "desiredCapabilities": {
                "browserName": "chrome",
                "javascriptEnabled": true,
                "acceptSslCerts": true
            }
        }
    }
};
