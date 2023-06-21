import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all our Problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are a team of passionate developers who are always ready to help
            you with your problems. We are just one click away from you. we do
            not charge anything for our services. We are here to help you with
            your problems. Nothing is impossible for us. We can solve any
            problem. just contact us and we will be there for you. we know that
            you are facing a lot of problems in your life. we are here to help
            you with your problems. we are just one click away from you. we do
            not charge anything for our services. we are here to help you with
            your problems. nothing is impossible for us. we can solve any
            problem. just contact us and we will be there for you.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who are we?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            excepturi tempora, adipisci in beatae vel! Assumenda officia
            delectus incidunt eos aliquid, iure, possimus fugit impedit autem
            quo doloribus repellendus, accusantium dolorum tenetur ea similique
            soluta voluptatibus. Velit vitae dolore repellendus in, totam id
            facilis? Nobis nemo doloribus Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptates quidem fugiat pariatur corporis, facere
            at minus, iusto, repellat asperiores impedit voluptatum sit eos
            dolore totam repellendus deleniti qui magni modi nesciunt
            perspiciatis animi? Facere velit praesentium id. Cumque repellat
            impedit eos minima fuga, officia sapiente blanditiis placeat
            perspiciatis pariatur tempora doloribus nobis! Assumenda, doloribus
            soluta. excepturi incidunt accusamus! eos quia velit
          </p>
        </div>
      </div>

      <div className="home4" id="Brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
            <div style={{ animationDelay: "0.9s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
