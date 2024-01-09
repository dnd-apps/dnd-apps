import Image from "next/image";
import ExternalLink from "@/app/components/ExternalLink";
import KoFi from "@/app/components/Ko-Fi";

export default function Home() {
  const links = [
    {
      href: "https://chat.openai.com/g/g-94X2MQZ73-d-d-5th-edition-companion",
      src: "/gpt-4-dnd-5e-bot.png",
      alt: "gpt 4 logo",
      description:
        "Check out our Dungeons & Dragons trained GPT! Click Here! Via ChatGPT 4.",
    },
    {
      href: "https://chat.openai.com/g/g-8mJvnQ3kL-storyteller-assistant",
      src: "/gpt-4-story-teller-assistant.png",
      alt: "gpt 4 st logo",
      description:
        "Check out our Storyteller Assistant trained GPT! Click Here! Via ChatGPT 4. Fed over 150 pages of story writing prompts, lore, and guidelines!",
    },
    {
      href: "https://vtt-maps.dnd-apps.dev/",
      src: "https://vtt-maps.dnd-apps.dev/assets/vtt-maps-logo.png",
      alt: "Foundry",
      description:
        "All of our free custom D&D maps! All with Universal DD2VTT exports & Hi-Res image exports!",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center sm:p-10 md:p-24 sm:w-full">
      <div className="font-bold text-center flex flex-row max-w-5xl pb-4">
        <div>
          <h1 className={"text-4xl"}>{"Welcome to DND Apps!"}</h1>
          <small>
            {
              "We produce integrations for D&D related software & content for campaigns!"
            }
          </small>
        </div>

        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <div className="flex h-48 w-full items-end justify-center lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-1 p-2 lg:pointer-events-auto lg:p-0"
              href="https://github.com/dnd-apps"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://avatars.githubusercontent.com/u/84164320"
                alt="Vercel Logo"
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={"p-8 m-8"}>
          <KoFi />
        </div>
      </div>

      <div
        className={
          "flex flex-row flex-wrap items-center justify-center  w-full"
        }
      >
        {links.map((link, index) => (
          <ExternalLink
            key={index}
            href={link.href}
            src={link.src}
            alt={link.alt}
            description={link.description}
          />
        ))}
      </div>
    </main>
  );
}
