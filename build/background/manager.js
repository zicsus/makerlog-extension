"use strict";const Manager={checkAuth:function(e){chrome.storage.sync.get(["ml_token"],t=>{const o=t.ml_token;o||chrome.tabs.create({url:chrome.runtime.getURL("auth/auth.html")}),e(o)})},logout:function(){chrome.storage.sync.remove("ml_token"),chrome.storage.sync.remove("user")}};