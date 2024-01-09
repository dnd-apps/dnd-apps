import "./animation.scss";
import Image from "next/image";
import { sample } from "lodash-es";

/**
 *
 * @param props
 * @param {string} props.href
 * @param {string} props.src
 * @param {string} props.alt
 * @param {string} props.description
 * @constructor
 */
export default function ExternalLink(props) {
  const animation = sample(["back-in-left", "back-in-down", "back-in-up"]);
  return (
    <div
      data-id={"external-link"}
      className={`border border-darkgray-500 rounded-md p-2 hover:bg-blue-500 p-4 hover:text-white cursor-pointer lg:w-1/4 sm:w-full ${animation}`}
    >
      <a href={props.href} target="_blank" className="rounded-full w-16 h-16">
        <Image
          className="rounded-lg"
          src={props.src}
          width={400}
          height={400}
          priority
          alt={props.alt}
        />
      </a>
      <div className="flex flex-col h-full">
        <p className="flex-grow text-wrap">{props.description}</p>
      </div>
    </div>
  );
}
