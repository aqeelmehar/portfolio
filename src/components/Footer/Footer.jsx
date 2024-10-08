import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        <div
          className={css.left}
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by{" "}
            <a href="https://wa.me/923017631644" alt="Whatsapp" target="_blank">
              saying hi👋
            </a>
          </span>
          <span>
            <div className="primaryText" style={{ display: "flex" }}>
              <ul
                style={{
                  margin: "10px 5px 15px ",
                  display: "flex",
                  listStyleType: "none",
                }}
              >
                <li
                  style={{
                    marginRight: "10px",
                    fontSize: "25px",
                  }}
                >
                  <a href="https://github.com/Asad-Saeed" target="blank">
                    <i style={{ color: "#634699" }} className="fab fa-github" />
                  </a>
                </li>
                <li
                  style={{
                    marginRight: "10px",
                    fontSize: "25px",
                  }}
                >
                  <a
                    href="https://www.instagram.com/asadsaeed_44/"
                    target="_blank"
                  >
                    <i
                      style={{ color: "#634699" }}
                      className="fab fa-instagram"
                    />
                  </a>
                </li>
                <li
                  style={{
                    marginRight: "10px",
                    fontSize: "25px",
                  }}
                >
                  <a
                    href="https://www.linkedin.com/in/asad-saeed-4685a9202"
                    target="blank"
                  >
                    <i
                      style={{ color: "#634699" }}
                      className="fab fa-linkedin-in"
                    />
                  </a>
                </li>
                <li
                  style={{
                    marginRight: "10px",
                    fontSize: "25px",
                  }}
                >
                  <a href="https://twitter.com/asadsaeed_44">
                    <i
                      style={{ color: "#634699" }}
                      className="fab fa-twitter"
                      target="_blank"
                    />
                  </a>
                </li>
                <li
                  style={{
                    marginRight: "10px",
                    fontSize: "25px",
                  }}
                >
                  <a href="https://web.facebook.com/asadsaeed44">
                    <i
                      style={{ color: "#634699" }}
                      className="fab fa-facebook"
                      target="_blank"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <ul style={{ listStyleType: "circle" }}></ul>
          </div>
          <ul className={css.menu}>
            <li>
              <a href="https://goo.gl/maps/REf5Fv4kMjkiF6me6" target={"_blank"}>
                Lahore, Punjab, Pakistan
              </a>
            </li>

            <li>
              <a href="tel:+92 3017631644">+92 3066003746</a>
            </li>
            <li>
              <a href="#experties">Services</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
