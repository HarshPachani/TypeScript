/// <reference types="vite/client" />
type LangType = 'ja' | 'hi' | 'es' | 'fr'

type WordType = {
    word: string,
    meaning: string,
    options: Array<string>,
}

interface StateType {
    loading: boolean;
    result: Array<string>;
    words: Array<WordType>;
    error?: string;
}

type FetchedDataType = {
    translations: {
        text: string
    }[]
}