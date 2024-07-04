import axios from 'axios';
import _ from 'lodash';
import { generate } from 'random-words';

const generateMCQ = (meaning: { Text: string; }[], idx: number): Array<string> => {
    const correctAns = meaning[idx].Text;

    const allMeaningExceptForCorrect = meaning.filter(i => i.Text !== correctAns);
    const incorrectOptions: Array<string> = _.sampleSize(allMeaningExceptForCorrect, 3).map(i => i.Text);

    const mcqOptions = _.shuffle([...incorrectOptions, correctAns]);

    return mcqOptions;
}

export const translateWords = async(params: LangType): Promise<Array<WordType>> => {
    const words = generate(8).map(i => ({ Text: i }));

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
        const response = await axios.request(options);
        const received: FetchedDataType[] =  response.data;

        const arr: WordType[] = received.map((i, idx) => {  
            const testOptions: string[] = generateMCQ(words, idx);    
            return {
                word: i.translations[0].text,
                meaning: words[idx].Text ,
                options: testOptions,
            }
        });
        return arr;
    } catch (error) {
        return error;
    }
}

export const countMatchingElements = (
    arr1: Array<string>,
    arr2: Array<string>
): number => {
    if(arr1.length !== arr2.length) throw new Error("Arrays are not Equal!");

    let matchedCount = 0;
    for(let i = 0; i<arr1.length; i++) {
        if(arr1[i] === arr2[i]) matchedCount++;
    }


    return matchedCount;
}