import { Dictionary, Locale } from "@/i18n-config";
import Link from "next/link";

export default function Footer({ dictionary, currentLang }: { 
  dictionary: Dictionary["footer"], 
  currentLang: Locale 
}) {
    return (
      <div className="flex flex-col bg-linear-to-t from-black to-[#3C0366] border-t-1 border-white">
        <div className="flex">
          <div className="text-white">
            <p>Pascal Harting</p>
            <p>Full Stack Software Engineer</p>
            <p>Building scalable platforms and AI-driven tools, balancing technical rigor with creative problem-solving. Passionate about user-centric solutions.</p>
          </div>
          <div className="text-white">
            <p>Navigation</p>
            <ul>
              <li>
                <Link href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/ueber-mich">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/kontakt">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-white">
            <p>Socials</p>
            <ul>
              <li>
                <Link href="https://www.linkedin.com/in/pascal-harting">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="https://github.com/p-harting">
                  Github
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-white">
            <hr />
            <p>Made with ♡ by Pascal Harting</p>
        </div>
      </div>
    )
}
