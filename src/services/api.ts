import { Buffer } from "buffer";
import slugify from "slugify";
import * as cheerio from "cheerio";
import iconv from "iconv-lite";
import { IMAGE_URL, QUOTES_URL } from "@/constants/API";
import { TQuote } from "@/helpers/types/Quote";

type TApi = (limit: number, offset: number, searchTerm: string) => Promise<{quotesFounded: TQuote[], hasMore: boolean}>;
export const api: TApi = async (limit, offset, searchTerm = 'Frases curtas') => {
   const term = slugify(searchTerm, {
    replacement: "_",
    remove: /[*+~.()'"!:@]/g,
    lower: true,
  });

  let quotesFounded: TQuote[] = [];
  const documentHtml = await fetchPageHtml(term, offset);
  const { phrases, hasMorePagination: hasMore } = await extractPhrasesFromHtml(documentHtml, limit);
  
  for (const phrase of phrases) {
    const image = await getRandomImage();
    quotesFounded.push({ phrase, image });
  }
  return {quotesFounded, hasMore};
};

const getRandomImage = async () => {
  let image = IMAGE_URL
  try {
    image = await fetch(IMAGE_URL).then((res) => res.url)
  } catch (e) {}
  return image;
};

type TFetchPageHtml = (searchTerm: string, page: number) => Promise<string>;
const fetchPageHtml: TFetchPageHtml = async (searchTerm, page) => {
  return new Promise((resolve, reject) => {
    const url = `${QUOTES_URL}/${searchTerm}/${page}`;
    fetch(url)
      .then((res) => res.arrayBuffer())
      .then((arrayBuffer) =>
        iconv.decode(Buffer.from(arrayBuffer), "utf-8").toString()
      )
      .then((body) => resolve(body))
      .catch((err) => reject(err));
  });
};

type TExtractPhrasesFromHtml = (
  htmlContent: string,
  numberPhrases: number
) => Promise<{ phrases: string[]; hasMorePagination: boolean }>;
const extractPhrasesFromHtml: TExtractPhrasesFromHtml = (htmlContent, numberPhrases) => {
  return new Promise(async (resolve, reject) => {
    const phrases: string[] = [];
    let hasMorePagination = false;

    try {
      const $ = cheerio.load(htmlContent); //HTML Document

      const cardsPhrase = $(".thought-card")
      cardsPhrase.splice(0, cardsPhrase.length - numberPhrases)

      cardsPhrase.each(function (i, e) {
        const p = $(this).find("p").first().text().replace(/\n/g, "");
        phrases.push(p);
      });

      $("#paginacao").each(function (i, e) {
        if ($(this).find(".nav").last().text().includes("xima")) {
          hasMorePagination = true;
        }
      });

      resolve({ phrases, hasMorePagination });
    } catch (err) {
      reject(err);
    }
  });
};
