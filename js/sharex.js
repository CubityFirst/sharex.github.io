﻿$(document).ready(function () {
    $.getJSON("https://api.github.com/repos/ShareX/ShareX/releases").done(function (json) {
        var latestRelease = json[0];
        var name = latestRelease.name;
        var asset = latestRelease.assets[0];
        var date = new Date(asset.updated_at);
        var downloadCount = asset.download_count;
        var text = name + " was last updated on " + date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " and has been downloaded " + downloadCount + " times.";
        $(".release-info").text(text);
        $(".release-info").slideDown("slow");
    });
});