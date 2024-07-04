"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.countMatchingElements = exports.translateWords = void 0;
const axios_1 = __importDefault(require("axios"));
const lodash_1 = __importDefault(require("lodash"));
const random_words_1 = require("random-words");
const generateMCQ = (meaning, idx) => {
    const correctAns = meaning[idx].Text;
    const allMeaningExceptForCorrect = meaning.filter(i => i.Text !== correctAns);
    const incorrectOptions = lodash_1.default.sampleSize(allMeaningExceptForCorrect, 3).map(i => i.Text);
    const mcqOptions = lodash_1.default.shuffle([...incorrectOptions, correctAns]);
    return mcqOptions;
};
const translateWords = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const words = (0, random_words_1.generate)(8).map(i => ({ Text: i }));
    const options = {
        method: 'POST',
        url: 'https://microsoft-translator-text.p.rapidapi.com/translate',
        params: {
            'api-version': '3.0',
            'to[0]': params,
            profanityAction: 'NoAction',
            textType: 'plain'
        },
        headers: {
            'x-rapidapi-key': '7dfb43969emshc0879808567025cp127001jsn9930fb92a017',
            'x-rapidapi-host': 'microsoft-translator-text.p.rapidapi.com',
            'Content-Type': 'application/json'
        },
        data: words,
    };
    try {
        const response = yield axios_1.default.request(options);
        const received = response.data;
        const arr = received.map((i, idx) => {
            const testOptions = generateMCQ(words, idx);
            return {
                word: i.translations[0].text,
                meaning: words[idx].Text,
                options: testOptions,
            };
        });
        return arr;
    }
    catch (error) {
        return error;
    }
});
exports.translateWords = translateWords;
const countMatchingElements = (arr1, arr2) => {
    if (arr1.length !== arr2.length)
        throw new Error("Arrays are not Equal!");
    let matchedCount = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i])
            matchedCount++;
    }
    return matchedCount;
};
exports.countMatchingElements = countMatchingElements;
