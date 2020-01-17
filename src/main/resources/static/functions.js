let languageCoutryList = {
    "sq": "AL",
    "hy": "AM",
    "ps": "AR",
    "az": "AZ",
    "bs": "BA",
    "bg": "BG",
    "be": "BY",
    "zh": "CN",
    "cs": "CZ",
    "de": "DE",
    "da": "DK",
    "et": "EE",
    "es": "ES",
    "gl": "ES",
    "fi": "FI",
    "fo": "FO",
    "fr": "FR",
    "en": "GB",
    "ka": "GE",
    "el": "GR",
    "hr": "HR",
    "hu": "HU",
    "id": "ID",
    "he": "IL",
    "hi": "IN",
    "fa": "IR",
    "is": "IS",
    "it": "IT",
    "ja": "JP",
    "sw": "KE",
    "ky": "KG",
    "ko": "KR",
    "kk": "KZ",
    "lt": "LT",
    "lv": "LV",
    "mk": "MK",
    "mn": "MN",
    "mt": "MT",
    "dv": "MV",
    "ms": "MY",
    "nl": "NL",
    "nb": "NO",
    "nn": "NO",
    "mi": "NZ",
    "tl": "PH",
    "ur": "PK",
    "pl": "PL",
    "pt": "PT",
    "ro": "RO",
    "ru": "RU",
    "sv": "SE",
    "sl": "SI",
    "sk": "SK",
    "sr": "SP",
    "sy": "SY",
    "th": "TH",
    "tr": "TR",
    "uk": "UA",
    "uz": "UZ",
    "vi": "VN",
    "zu": "ZA"
};

let languageNameList = {
    "sq": "Albanian",
    "hy": "Armenian",
    "ps": "Pashto",
    "az": "Azeri",
    "bs": "Bosnian",
    "bg": "Bulgarian",
    "be": "Belarusian",
    "zh": "Chinese",
    "cs": "Czech",
    "de": "German",
    "da": "Danish",
    "et": "Estonian",
    "es": "Spanish",
    "gl": "Galician",
    "fi": "Finnish",
    "fo": "Faroese",
    "fr": "French",
    "en": "English",
    "ka": "Georgian",
    "el": "Greek",
    "hr": "Croatian",
    "hu": "Hungarian",
    "id": "Indonesian",
    "he": "Hebrew",
    "hi": "Hindi",
    "fa": "Farsi",
    "is": "Icelandic",
    "it": "Italian",
    "ja": "Japanese",
    "sw": "Swahili",
    "ky": "Kyrgyz",
    "ko": "Korean",
    "kk": "Kazakh",
    "lt": "Lithuanian",
    "lv": "Latvian",
    "mk": "FYRO Macedonian",
    "mn": "Mongolian",
    "mt": "Maltese",
    "dv": "Divehi",
    "ms": "Malay",
    "nl": "Dutch",
    "nb": "Norwegian",
    "nn": "Norwegian",
    "mi": "Maori",
    "tl": "Tagalog",
    "ur": "Urdu",
    "pl": "Polish",
    "pt": "Portuguese",
    "ro": "Romanian",
    "ru": "Russian",
    "sv": "Swedish",
    "sl": "Slovenian",
    "sk": "Slovak",
    "sr": "Serbian",
    "sy": "Syriac",
    "th": "Thai",
    "tr": "Turkish",
    "uk": "Ukrainian",
    "uz": "Uzbek",
    "vi": "Vietnamese",
    "zu": "Zulu"
};

$(document).ready(function () {
    registerSearch();
    registerTemplate();

    var i;
    for (i=0; i<Object.keys(languageNameList).length; i++) {
        $("#lang")[0].options[i] = new Option( Object.values(languageNameList)[i], Object.keys(languageNameList)[i]);
    }
});

function registerSearch() {
    $("#search").submit(function (ev) {
        event.preventDefault();
        $.get($(this).attr('action'), {q: $("#q").val(), max: $("#max").val(), lang: $("#lang").val()}, function (data) {
            $("#resultsBlock").html(Mustache.render(template, data));
        });
    });
}

function registerTemplate() {
    template = $("#template").html();
    Mustache.parse(template);
}
