const { format_date } = require("../utils/helpers");
test("format_date() returns a date string", () => {
  const date = new Date("2020-03-20 16:12:03");

  expect(format_date(date)).toBe("12/23/2022");
});

const { format_plural } = require("../utils/helpers");

test("return different nouns", () => {
  const plural = format_plural("fly", 2);
  const single = format_plural("dog", 1);

  expect(plural).toBe("flies");
  expect(single).toBe("dogs");
});

const { format_url } = require("../utils/helpers");

// shortening URLS
test("format_url()", () => {
  const url1 = format_url("http://yahoo.com/page/1");
  const url2 = format_url("https://www.facebool.com/findstuff/");
  const url3 = format_url("https://www.google.com?q=hi");
  const url4 = format_url("https://www.search.com?q=apple");

  expect(url1).toBe("yahoo.com");
  expect(url2).toBe("facebook.com");
  expect(url3).toBe("google.com");
  expect(url4).toBe("apple.com");
});
