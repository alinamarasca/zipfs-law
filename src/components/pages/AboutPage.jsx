import React from "react";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <div className="about">
      <article>
        <h2>This app was inspired by Zipf's law.</h2>
        <p>
          Zipf’s law, in probability, assertion that the frequencies f of
          certain events are inversely proportional to their rank r. The law was
          originally proposed by American linguist George Kingsley Zipf
          (1902–50) for the frequency of usage of different words in the English
          language; this frequency is given approximately by f(r) ≅ 0.1/r. Thus,
          the most common word (rank 1) in English, which is the, occurs about
          one-tenth of the time in a typical text; the next most common word
          (rank 2), which is of, occurs about one-twentieth of the time; and so
          forth. Another way of looking at this is that a rank r word occurs 1/r
          times as often as the most frequent word, so the rank 2 word occurs
          half as often as the rank 1 word, the rank 3 word one-third as often,
          the rank 4 word one-fourth as often, and so forth. Beyond about rank
          1,000, the law completely breaks down. Zipf’s law purportedly has been
          observed for many other statistics that follow an exponential
          distribution. For example, in 1949 Zipf claimed that the largest city
          in a country is about twice the size of the next largest, three times
          the size of the third largest, and so forth. While the fit is not
          perfect for languages, populations, or any other data, the basic idea
          of Zipf’s law is useful in schemes for data compression and in
          allocation of resources by urban planners.<br></br>
          <span>
            Hosch, W. L.. "Zipf's law."{" "}
            <a href="https://www.britannica.com/topic/Zipfs-law">
              Encyclopedia Britannica
            </a>
            , December 7, 2018.{" "}
          </span>
        </p>
      </article>
      <p className="back-home">
        <Link to="/zipfs-law/index">Back To Home</Link>
      </p>
    </div>
  );
}

export default AboutPage;
