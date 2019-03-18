const dictionary = require("dictionary-en-us");
const spell = require("retext-spell");
const stringify = require("retext-stringify");
const processor = require("./process-text");

const process = text =>
  new Promise((resolve, reject) => {
    processor()
      .use(spell, dictionary)
      .use(stringify)
      .process(text, (err, file) => {
        if (!err) {
          resolve(file.messages);
        } else {
          reject(err);
        }
      });
  });

describe("text", () => {
  it("leaves mentions alone", () => {
    const text = `
Hello @unindented!
`;
    return expect(process(text)).resolves.toMatchSnapshot();
  });

  it("leaves urls alone", () => {
    const text = `
Visit me at unindented.org!
`;
    return expect(process(text)).resolves.toMatchSnapshot();
  });

  it("warns about insensitive, inconsiderate language", () => {
    const text = `
For he is truly his brother’s keeper, and the finder of lost children.
`;
    return expect(process(text)).resolves.toMatchSnapshot();
  });

  it("warns about passive voice", () => {
    const text = `
I was led to believe that if they come home and find us here, they wouldn’t appreciate it none too much?
`;
    return expect(process(text)).resolves.toMatchSnapshot();
  });

  it("warns about profane and vulgar wording", () => {
    const text = `
Why do we feel it’s necessary to yak about bullshit in order to be comfortable?
`;
    return expect(process(text)).resolves.toMatchSnapshot();
  });

  it("warns about apostrophes in elided contractions", () => {
    const text = `
In the past six years, 50’s diners have sprung up all over L.A.
`;
    return expect(process(text)).resolves.toMatchSnapshot();
  });

  it("warns about use of diacritics", () => {
    const text = `
Decor out of an “Archie” comic book.
`;
    return expect(process(text)).resolves.toMatchSnapshot();
  });

  it("warns about indefinite articles", () => {
    const text = `
Was than a uncomfortable silence?
`;
    return expect(process(text)).resolves.toMatchSnapshot();
  });

  it("warns about quotes", () => {
    const text = `
You still wanna hear my "Fox Force Five" joke?
`;
    return expect(process(text)).resolves.toMatchSnapshot();
  });

  it("warns about redundant acronyms", () => {
    const text = `
They stand nervously at an ATM machine.
`;
    return expect(process(text)).resolves.toMatchSnapshot();
  });

  it("warns about repeated words", () => {
    const text = `
How long do you intend to to walk the earth?
`;
    return expect(process(text)).resolves.toMatchSnapshot();
  });

  it("warns about spacing between sentences", () => {
    const text = `
Now I wanna dance, I wanna win.  I want that trophy, so dance good.
`;
    return expect(process(text)).resolves.toMatchSnapshot();
  });
});
