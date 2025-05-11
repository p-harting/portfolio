import { Dictionary } from "@/i18n-config";
import Link from "next/link";

export default function Footer({ dictionary }: { dictionary: Dictionary["footer"] })
{
    return (
      <div className="flex flex-col bg-linear-to-t from-black to-[#3C0366] border-t-1 border-white">
        <div className="flex">
          <div className="text-white">
            <p>Pascal Harting</p>
            <p>{dictionary.job}</p>
            <p>{dictionary.description}</p>
          </div>
          <div className="text-white">
            <p>Navigation</p>
            <ul>
              <li>
                <Link href="/">
                  {dictionary.home}
                </Link>
              </li>
              <li>
                <Link href="/portfolio">
                  {dictionary.portfolio}
                </Link>
              </li>
              <li>
                <Link href="/ueber-mich">
                  {dictionary.about}
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  {dictionary.blog}
                </Link>
              </li>
              <li>
                <Link href="/kontakt">
                  {dictionary.contact}
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-white">
            <p>{dictionary.socials}</p>
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
            <p>{dictionary.made}</p>
        </div>
      </div>
    )
}
