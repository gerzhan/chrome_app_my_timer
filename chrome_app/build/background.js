/**
 * Created by Nikolay Gerzhan <nikolay.gerzhan@gmail.com>
 */
chrome.app.runtime.onLaunched.addListener(
    function () {
        chrome.app.window.create('chromeindex.html', {//http://developer.chrome.com/apps/app_window.html#method-create
                id: 'main',
                'bounds': { //http://developer.chrome.com/apps/app_window.html#type-Bounds
                    'top': 10,
                    'left': 10
                }
            }
        );
    }
)